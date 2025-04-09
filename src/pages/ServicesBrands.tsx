import React, { useEffect, useState } from 'react';
import { ArrowLeft, Shield, Server, Cloud, Database, Code, Lock, ShieldAlert, Wifi, Users, Award, Linkedin, Facebook, Instagram  } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServicesBrands() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const partners = [
    { 
      id: 'manage-engine',
      name: 'ManageEngine', 
      logo: '/Imagenes/Manageengine.jpg',
      description: 'ManageEngine ofrece soluciones de gestión de TI para empresas de todos los tamaños. Sus productos ayudan a administrar redes, servidores, aplicaciones y más.'
    },
    { 
      id: 'trend-micro',
      name: 'TrendMicro', 
      logo: '/Imagenes/TrendMicro.png',
      description: 'Trend Micro es líder en soluciones de seguridad cibernética, protegiendo a organizaciones contra amenazas digitales con su avanzada tecnología XGen.'
    },
    { 
      id: 'kaspersky',
      name: 'Kaspersky', 
      logo: '/Imagenes/Kasperky.webp',
      description: 'Kaspersky proporciona seguridad endpoint y soluciones de ciberseguridad para proteger contra malware, ransomware y otras amenazas avanzadas.'
    },
    { 
      id: 'sophos',
      name: 'Sophos', 
      logo: '/Imagenes/Sophos.jpg',
      description: 'Sophos ofrece soluciones de seguridad sincronizadas que protegen endpoints, redes, correo electrónico y la nube con inteligencia artificial.'
    },
    { 
      id: 'cato-networks',
      name: 'Cato Networks', 
      logo: '/Imagenes/Cato.png',
      description: 'Cato Networks proporciona una plataforma SASE que converge redes y seguridad en la nube para una protección unificada.'
    },
    { 
      id: 'Secpod',
      name: 'Secpod', 
      logo: '/Imagenes/Secpod.jpg',
      description: 'SecPod ofrece soluciones avanzadas para la gestión de vulnerabilidades, protección de endpoints y cumplimiento de normativas. Sus productos ayudan a detectar, evaluar y mitigar riesgos de forma proactiva.'
    },
    { 
      id: 'lumu',
      name: 'Lumu', 
      logo: '/Imagenes/Lumu.png',
      description: 'Lumu es una plataforma de inteligencia de amenazas que ayuda a las organizaciones a medir y neutralizar compromisos en tiempo real.'
    },
    { 
      id: 'wazuh',
      name: 'Wazuh', 
      logo: '/Imagenes/Wazuh2.png',
      description: 'Wazuh es una plataforma de seguridad open source que proporciona detección de intrusiones, monitoreo de integridad y respuesta a incidentes.'
    },
  ];
  const certifications = [
    { 
      name: 'Lead Cybersecurity Professional Certification', 
      logo: '/Imagenes/CertiprofLeadCybersecurity.png'
    },
    { 
      name: 'ISO 27001 Lead Implementer Professional Certification', 
      logo: '/Imagenes/Certiprof_ISO_27001_Lead_implementer_badge.webp'
    },
    { 
      name: 'Big Data Professional Certification', 
      logo: '/Imagenes/bigdata.webp'
    },
    { 
      name: 'Cybersecurity Foundation Professional Certificate', 
      logo: '/Imagenes/CybersecurityFoundation.webp'
    },
    { 
      name: 'Ethical Hacking Professional Certification', 
      logo: '/Imagenes/Eticalhacking.png'
    },
    { 
      name: 'Artificial Intelligence Foundation Professional Certificate', 
      logo: '/Imagenes/ArtificialInteligence.webp'
    },
    { 
      name: 'Certiprof Certification ISO 22301 Internal Auditor', 
      logo: '/Imagenes/Certiprof_ISO_22301.webp'
    },
    { 
      name: 'Scrum Master Professional Certification', 
      logo: '/Imagenes/scrum.webp'
    }
  ];

  const services = [
    {
      icon: Award,
      name: "Capacitaciones y Certificaciones sobre Ciberseguridad",
      description: "La ciberseguridad es clave en la protección de la información y la prevención de amenazas digitales. A través de capacitaciones y certificaciones especializadas, los profesionales pueden adquirir y validar sus conocimientos en seguridad informática.",
      image: "Imagenes/certifi.png"
    },
    {
      icon: Server,
      name: "Consultoria ITSM",
      description: "En Intelector Ecuador, ofrecemos consultoría especializada en ITSM (Gestión de Servicios de TI) para ayudar a las organizaciones a optimizar sus procesos tecnológicos, mejorar la eficiencia operativa y garantizar un servicio alineado con los objetivos del negocio.",
      image: "Imagenes/Consultoria.png"
    },
    {
      icon: Shield,
      name: "Protección de EndPoints",
      description: "La protección de endpoints es esencial para resguardar dispositivos como computadoras, servidores, móviles y tablets contra amenazas cibernéticas. Un enfoque robusto en seguridad previene ataques de malware, ransomware, accesos no autorizados y fugas de datos.",
      image: "Imagenes/endpoint.png"
    },
    {
      icon: Lock,
      name: "Servicios Gestionados",
      description: "Ofrecemos Servicios Gestionados de TI para garantizar la operación eficiente, segura y optimizada de tu infraestructura tecnológica, permitiéndote enfocarte en tu negocio mientras nosotros gestionamos tu entorno IT.",
      image: "Imagenes/servicios.png"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
  <img 
    src="/Imagenes/LogoIntelector.png" 
    alt="Intelector Ecuador" 
    className="h-12"
  />
  <span className="text-xl font-semibold text-gray-800">Intelector Ecuador</span>
</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-green-800">Inicio</Link>
              <Link to="/soluciones" className="text-gray-600 hover:text-green-800">Soluciones</Link>
              <Link to="/services-brands" className="text-gray-600 hover:text-green-800">Servicios y Marcas</Link>
            </div>
            <div className="flex items-center space-x-4">
            <Link 
                to="/" 
                onClick={() => sessionStorage.setItem('scrollToContact', 'true')}
                className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition duration-300"
              >
                Contáctanos
              </Link>

              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/grupointelector/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/grupointelector/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/p/Grupo-Intelector-61567309621283/?locale=tl_PH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section 
        className="pt-24 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(20, 83, 45, 0.85), 
              rgba(20, 83, 45, 0.85)
            ),
            url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Lock className="h-16 w-16 text-white" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delay">
            <ShieldAlert className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float">
            <Wifi className="h-16 w-16 text-white" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-green-800 mb-4" />
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-justify leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestras Marcas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                onClick={() => toggleFlip(partner.id)}
                className="relative h-64 cursor-pointer transition-transform duration-700"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[partner.id] ? 'rotateY(180deg)' : 'rotateY(0)'
                }}
              >
                <div 
                  className="absolute inset-0 bg-white p-6 rounded-lg shadow-md flex items-center justify-center backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    opacity: flippedCards[partner.id] ? 0 : 1,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-32 w-auto mx-auto object-contain"
                  />
                </div>
                
                <div 
                  className="absolute inset-0 bg-green-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    opacity: flippedCards[partner.id] ? 1 : 0,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <h3 className="text-lg font-bold mb-2 text-center">{partner.name}</h3>
                  <p className="text-sm text-center text-green-100">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(20, 83, 45, 0.90), 
              rgba(20, 83, 45, 0.90)
            ),
            url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              <Users className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Alianzas estratégicas</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
            ¡Certifícate y Destaca en el Mundo Tecnológico!
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm mb-8">
              <p className="text-lg text-white">
                Como <span className="font-semibold text-green-300">Partner Oficial de Certiprof</span>, 
                ofrecemos formación y certificación en las tecnologías más demandadas del mercado. 
                Nuestros programas de capacitación están avalados internacionalmente y son impartidos 
                por instructores certificados.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((certification, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center border border-white/20"
              >
                <div className="mb-4 p-2 bg-green-800/50 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <img 
                  src={certification.logo} 
                  alt={certification.name} 
                  className="h-32 w-auto mx-auto object-contain mb-4"
                />
                <h3 className="text-sm font-medium text-center text-gray-800">{certification.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default ServicesBrands;