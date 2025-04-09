import React, { useEffect } from 'react';
import { 
  Shield, Network, Terminal, Users, 
  ArrowLeft, Lock, ShieldAlert, Wifi,
  ChevronRight, Zap, Activity, Eye, Code, Server,
  Bot, Clock, AlertCircle, Settings, Database,
  FileSearch, Laptop, Cloud, Target, Workflow,
  LineChart, Layers, GitBranch, Bug, CheckCircle,
  HardDrive, Router, Cpu, Send, Linkedin, Facebook, Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';

function Soluciones() {
  const solutions = [
    {
      icon: Users,
      title: "Consultoría IT",
      description: "Asesoramiento estratégico para optimizar su infraestructura tecnológica y procesos de negocio.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      features: [
        "Análisis de infraestructura",
        "Planificación estratégica",
        "Optimización de recursos",
        "Roadmap tecnológico"
      ],
      animation: "animate",
      showDetails: true
    },
    {
      icon: Shield,
      title: "Centro de Operaciones de Seguridad (SOC)",
      description: "Monitoreo continuo y gestión de seguridad 24/7 para proteger su organización contra amenazas cibernéticas.",
      image: "Imagenes/SOC.png",
      features: [
        "Monitoreo en tiempo real",
        "Detección de amenazas",
        "Respuesta a incidentes",
        "Análisis forense"
      ],
      animation: "animate-pulse",
      showDetails: true
    },
    {
      icon: Network,
      title: "Centro de Operaciones de Red (NOC)",
      description: "Supervisión y gestión proactiva de su infraestructura de red para garantizar un rendimiento óptimo.",
      image: "Imagenes/NOC.webp",
      features: [
        "Monitoreo de red 24/7",
        "Gestión de rendimiento",
        "Resolución proactiva",
        "Optimización de ancho de banda"
      ],
      animation: "animate",
      showDetails: true
    },
    {
      icon: Terminal,
      title: "Ethical Hacking",
      description: "Evaluación exhaustiva de seguridad para identificar y corregir vulnerabilidades antes de que sean explotadas.",
      image: "Imagenes/EticalHacking.jpg",
      features: [
        "Pruebas de penetración",
        "Análisis de vulnerabilidades",
        "Auditorías de seguridad",
        "Simulación de ataques"
      ],
      animation: "animate-pulse",
      showDetails: true
    },
    {
      icon: Server,
      title: "Infraestructura Segura",
      description: "Diseño e implementación de arquitecturas de TI resistentes y seguras.",
      image: "Imagenes/Seguridad.webp",
      features: [
        "Arquitectura Zero Trust",
        "Seguridad perimetral",
        "Hardening de sistemas",
        "Protección de endpoints"
      ],
      animation: "animate-pulse",
      showDetails: true
    },
  ];

  const [selectedSolution, setSelectedSolution] = React.useState(null);

  const scrollToContact = () => {
    // Guardar la intención de ir a la sección de contacto
    sessionStorage.setItem('scrollToContact', 'true');
    // Navegar a la página principal
    window.location.href = "/";
  };

  const handleSolutionClick = (solution: React.SetStateAction<null>) => {
    setSelectedSolution(solution);
    window.scrollTo(0, 0);
  };

  const detailsContent = {
    "Consultoría IT": {
      features: [
        {
          icon: FileSearch,
          title: "Evaluación y Diagnóstico",
          description: "Realizamos un análisis profundo de su infraestructura tecnológica, identificando vulnerabilidades, oportunidades de optimización y áreas de mejora. Nuestro enfoque estratégico permite fortalecer la seguridad, mejorar la eficiencia operativa y garantizar la continuidad de su negocio en un entorno digital en constante evolución."
        },
        {
          icon: Target,
          title: "Planificación Estratégica",
          description: "Diseñamos roadmaps tecnológicos personalizados, alineados con sus objetivos empresariales y presupuesto, para garantizar una evolución segura, eficiente y escalable de su infraestructura tecnológica."
        },
        {
          icon: Workflow,
          title: "Optimización de Procesos",
          description: "Implementamos mejoras en los flujos de trabajo y automatización de procesos, permitiendo una mayor eficiencia operativa, reducción de costos y optimización de recursos tecnológicos."
        },
        {
          icon: LineChart,
          title: "Gestión del Cambio",
          description: "Brindamos acompañamiento integral en la adopción de nuevas tecnologías y procesos de transformación digital, asegurando una transición efectiva, minimizando riesgos y optimizando la adaptación de su equipo."
        }
      ],
      benefits: [
        {
          icon: Layers,
          title: "Eficiencia Operativa",
          description: "Optimización de recursos y procesos"
        },
        {
          icon: GitBranch,
          title: "Innovación Tecnológica",
          description: "Adopción de nuevas tecnologías"
        },
        {
          icon: CheckCircle,
          title: "Mejores Prácticas",
          description: "Implementación de estándares"
        }
      ]
    },
    "Centro de Operaciones de Red (NOC)": {
      features: [
        {
          icon: Router,
          title: "Monitoreo de Red 24/7",
          description: "Vigilancia constante de la infraestructura para asegurar alta disponibilidad, rendimiento óptimo y detección proactiva de incidentes."
        },
        {
          icon: Activity,
          title: "Análisis de Rendimiento",
          description: "Monitoreo continuo del desempeño de la red para optimizar su funcionamiento y detectar posibles fallos antes de que afecten las operaciones."
        },
        {
          icon: HardDrive,
          title: "Gestión de Infraestructura",
          description: "Administración proactiva de redes, servidores y sistemas críticos para garantizar estabilidad, seguridad y alto rendimiento."
        },
        {
          icon: Cpu,
          title: "Optimización de Recursos",
          description: "Mejora continua del rendimiento y eficiencia de la infraestructura para maximizar su capacidad y reducir costos."
        }
      ],
      benefits: [
        {
          icon: Clock,
          title: "Alta Disponibilidad",
          description: "Servicio ininterrumpido 24/7"
        },
        {
          icon: Zap,
          title: "Respuesta Rápida",
          description: "Resolución proactiva de incidentes"
        },
        {
          icon: LineChart,
          title: "Rendimiento Optimizado",
          description: "Máxima eficiencia operativa"
        }
      ]
    },
    "Ethical Hacking": {
      features: [
        {
          icon: Bug,
          title: "Pruebas de Penetración",
          description: "Evaluación profunda de vulnerabilidades utilizando técnicas avanzadas de hacking ético para identificar y mitigar riesgos de seguridad."
        },
        {
          icon: Shield,
          title: "Análisis de Seguridad",
          description: "Identificación y evaluación de riesgos en la infraestructura tecnológica para fortalecer la protección contra amenazas y vulnerabilidades."
        },
        {
          icon: FileSearch,
          title: "Auditorías de Seguridad",
          description: "Las Auditorías de Seguridad permiten evaluar de forma integral el estado actual de la ciberseguridad en tu organización, identificando brechas, malas configuraciones, y riesgos potenciales que podrían comprometer la confidencialidad, integridad y disponibilidad de tu información."
        },
        {
          icon: Laptop,
          title: "Simulación de Ataques",
          description: "Recreación de escenarios de ciberataques para evaluar la efectividad de las defensas y la respuesta ante posibles incidentes de seguridad."
        }
      ],
      benefits: [
        {
          icon: Shield,
          title: "Seguridad Proactiva",
          description: "Identificación temprana de riesgos"
        },
        {
          icon: CheckCircle,
          title: "Cumplimiento Normativo",
          description: "Alineación con estándares"
        },
        {
          icon: Lock,
          title: "Protección Reforzada",
          description: "Mejora continua de seguridad"
        }
      ]
    },
    "Infraestructura Segura": {
      features: [
        {
          icon: Cloud,
          title: "Arquitectura Zero Trust",
          description: "Implementación de un modelo de seguridad que se basa en la verificación continua, asegurando que cada usuario y dispositivo sea autenticado antes de acceder a los recursos."
        },
        {
          icon: Shield,
          title: "Seguridad Perimetral",
          description: "Protección avanzada que previene amenazas externas e internas, asegurando el acceso controlado y la defensa integral de la infraestructura."
        },
        {
          icon: Server,
          title: "Hardening de Sistemas",
          description: "Fortalecimiento integral de la seguridad en sistemas operativos y aplicaciones mediante la aplicación de configuraciones estrictas y controles que minimizan riesgos y vulnerabilidades."
        },
        {
          icon: Laptop,
          title: "Protección de Endpoints",
          description: "Seguridad integral para dispositivos finales y puntos de acceso, garantizando la protección de la información y la continuidad operativa frente a amenazas."
        }
      ],
      benefits: [
        {
          icon: Lock,
          title: "Defensa Integral",
          description: "Protección multinivel de toda la infraestructura."
        },
        {
          icon: Shield,
          title: "Resistencia a Ataques",
          description: "Mayor resiliencia ante amenazas."
        },
        {
          icon: CheckCircle,
          title: "Cumplimiento",
          description: "Estándares de seguridad"
        }
      ]
    },
    "Centro de Operaciones de Seguridad (SOC)": {
      features: [
        {
          icon: Eye,
          title: "Monitoreo 24/7",
          description: "Supervisión continua de su infraestructura tecnológica con análisis en tiempo real, detección proactiva de amenazas y respuesta inmediata para garantizar la seguridad y continuidad operativa de su negocio."
        },
        {
          icon: Shield,
          title: "Detección de Amenazas",
          description: "Identificación proactiva de amenazas y vulnerabilidades en su infraestructura, permitiendo una respuesta anticipada y eficaz para mitigar riesgos y fortalecer su ciberseguridad."
        },
        {
          icon: Activity,
          title: "Respuesta a Incidentes",
          description: "Implementamos protocolos de acción inmediata para gestionar y mitigar eventos de seguridad críticos, minimizando el impacto y asegurando la continuidad operativa de su negocio."
        },
        {
          icon: FileSearch,
          title: "Análisis Forense",
          description: "Realizamos investigaciones exhaustivas de incidentes de seguridad, identificando el origen y el impacto del ataque para fortalecer su infraestructura y prevenir futuras amenazas."
        }
      ],
      benefits: [
        {
          icon: Shield,
          title: "Protección Continua",
          description: "Seguridad ininterrumpida"
        },
        {
          icon: Clock,
          title: "Tiempo de Respuesta",
          description: "Reacción inmediata"
        },
        {
          icon: CheckCircle,
          title: "Cumplimiento",
          description: "Estándares de seguridad"
        }
      ]
    }
  };

  const renderSolutionDetails = () => {
    if (!selectedSolution) return null;

    const content = detailsContent[selectedSolution.title];

    if (!content) {
      return (
        <div className="pt-16">
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {selectedSolution.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {selectedSolution.description}
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => setSelectedSolution(null)}
                    className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Volver a Soluciones
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Pedir más información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-16">
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedSolution.title}
              </h1>
              <p className="text-xl text-gray-600">
                {selectedSolution.description}
              </p>
            </div>

            <div className="space-y-8">
              {content.features.map((feature: { icon: JSX.IntrinsicAttributes; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <benefit.icon className="h-8 w-8 text-green-700 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver a Soluciones
                </button>
                <button
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Pedir más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
              <button
                onClick={scrollToContact}
                className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition duration-300"
              >
                Contáctanos
              </button>
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

      <div className="pt-16">
        {selectedSolution ? (
          renderSolutionDetails()
        ) : (
          <>
            <section className="relative overflow-hidden py-32" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 animate-float">
                  <Lock className="h-16 w-16 text-white" />
                </div>
                <div className="absolute top-40 right-20 animate-float-delay">
                  <ShieldAlert className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-20 left-1/4 animate-float">
                  <Wifi className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-1/3 right-1/4 animate-float-delay">
                  <Terminal className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                <h1 className="text-5xl font-extrabold text-white mb-6 animate-fade-in">
                  Soluciones de Seguridad
                </h1>
                <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto animate-slide-up">
                  Protección integral y gestión proactiva para salvaguardar su infraestructura tecnológica
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                  <button
                    onClick={scrollToContact}
                    className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Contactar ahora
                  </button>
                  <Link
                    to="/services-brands"
                    className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    Nuestros servicios
                  </Link>
                </div>
              </div>
            </section>

            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex justify-center">
                      <Zap className="h-10 w-10 text-green-700 mb-4" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900">24/7</h3>
                    <p className="mt-2 text-gray-600">Monitoreo continuo</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex justify-center">
                      <Activity className="h-10 w-10 text-green-700 mb-4" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900">99.9%</h3>
                    <p className="mt-2 text-gray-600">Disponibilidad</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex justify-center">
                      <Eye className="h-10 w-10 text-green-700 mb-4" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900">360°</h3>
                    <p className="mt-2 text-gray-600">Visibilidad</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex justify-center">
                      <Shield className="h-10 w-10 text-green-700 mb-4" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900">100+</h3>
                    <p className="mt-2 text-gray-600">Amenazas bloqueadas diarias</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Portafolio de Soluciones</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Servicios diseñados para proteger su negocio en un entorno digital cada vez más complejo
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-green-100"
                    >
                      <div className="relative">
                        <img 
                          src={solution.image} 
                          alt={solution.title} 
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {index % 2 === 0 ? "Seguridad" : "Operaciones"}
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <solution.icon className={`h-10 w-10 text-green-700 ${solution.animation}`} />
                          <h2 className="text-2xl font-bold text-gray-900 ml-4">{solution.title}</h2>
                        </div>
                        <p className="text-gray-600 mb-6">{solution.description}</p>
                        <ul className="space-y-3 mb-8">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-700 group">
                              <ChevronRight className="h-4 w-4 text-green-700 mr-2 group-hover:translate-x-1 transition-transform" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => handleSolutionClick(solution)}
                          className="inline-flex items-center text-green-700 font-medium hover:text-green-800 group"
                        >
                          Más información
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 relative overflow-hidden" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h2 className="text-3xl font-bold text-white mb-6">¿Listo para fortalecer su seguridad IT?</h2>
                <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                  Nuestros expertos están listos para evaluar sus necesidades y recomendar la mejor solución
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={scrollToContact}
                    className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Solicitar consulta
                  </button>
                  <Link
                    to="/services-brands"
                    className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    Conocer nuestros servicios
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Soluciones;