<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    $required_fields = ['name', 'email', 'phone', 'company', 'position', 'country'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "El campo $field es requerido"]);
            exit;
        }
    }
    
    // Validate email
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Email inválido']);
        exit;
    }
    
    // Email content
    $to = 'administracion.ec@intelector.net';
    $subject = 'Nuevo contacto desde el sitio web';
    
    $message = "Nuevo contacto recibido:\n\n";
    $message .= "Nombre: " . htmlspecialchars($data['name']) . "\n";
    $message .= "Email: " . htmlspecialchars($data['email']) . "\n";
    $message .= "Teléfono: " . htmlspecialchars($data['phone']) . "\n";
    $message .= "Empresa: " . htmlspecialchars($data['company']) . "\n";
    $message .= "Cargo: " . htmlspecialchars($data['position']) . "\n";
    $message .= "País: " . htmlspecialchars($data['country']) . "\n";
    if (!empty($data['message'])) {
        $message .= "Mensaje: " . htmlspecialchars($data['message']) . "\n";
    }
    
    $headers = [
        'From' => 'noreply@intelector.net',
        'Reply-To' => $data['email'],
        'X-Mailer' => 'PHP/' . phpversion()
    ];
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error al enviar el mensaje']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
}