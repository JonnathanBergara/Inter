import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const partners = [
    { name: 'ManageEngine', logo: 'https://www.manageengine.com/images/me-logo.svg' },
    { name: 'TrendMicro', logo: 'https://www.trendmicro.com/content/dam/trendmicro/global/en/core/images/trend-micro-logo-red-white.svg' },
    { name: 'Kaspersky', logo: 'https://www.kaspersky.com/content/en-global/images/repository/pr/kaspersky-logo.png' },
    { name: 'Sophos', logo: 'https://www.sophos.com/sites/default/files/2021-06/sophos-logo-rgb.png' },
    { name: 'Cato Networks', logo: 'https://www.catonetworks.com/wp-content/themes/cato/assets/images/logo.svg' },
    { name: 'Secpod', logo: 'https://www.f5.com/content/dam/f5-com/global/logo.svg' },
    { name: 'Lumu', logo: 'https://lumu.io/wp-content/uploads/2020/03/lumu-logo.svg' },
    { name: 'Wazuh', logo: 'https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/wazuh_logo.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-green-800 hover:text-green-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-green-800 hover:text-green-900">Home</Link>
              <Link to="/soluciones" className="text-green-800 hover:text-green-900">Services</Link>
              <Link to="/about" className="text-green-800 hover:text-green-900">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white text-center animate-fade-in">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-xl text-green-100 text-center max-w-3xl mx-auto animate-slide-up">
            Expertos en seguridad y soluciones tecnológicas para América Latina
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed">
             Intelector Ecuador es una empresa líder en soluciones de seguridad y tecnología, 
            con presencia en toda América Latina. Nos especializamos en proporcionar servicios 
            integrales de ciberseguridad, consultoría IT y soluciones empresariales adaptadas 
            a las necesidades específicas de cada cliente.
          </p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Partners Tecnológicos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Map */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cobertura Regional
          </h2>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&w=1200&q=80"
              alt="Latin America Map"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;