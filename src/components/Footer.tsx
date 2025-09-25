import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'fr';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      company: {
        name: 'Bridgelink Mineral Consultants Ltd',
        tagline: 'Exploring the Future',
        description: 'Leading mining consultancy with 10+ years of excellence in Zambia and DRC.'
      },
      links: {
        title: 'Quick Links',
        items: [
          { name: 'About Us', href: '#about' },
          { name: 'Services', href: '#services' },
          { name: 'Projects', href: '#projects' },
          { name: 'Gallery', href: '#gallery' },
          { name: 'Strategy', href: '#strategy' },
          { name: 'Governance', href: '#governance' },
          { name: 'Contact', href: '#contact' }
        ]
      },
      services: {
        title: 'Services',
        items: [
          'Mining Consultancy',
          'Exploration Services',
          'Quality Assurance',
          'Resource Estimation',
          'Environmental Assessment',
          'Data Analysis'
        ]
      },
      contact: {
        title: 'Contact Information',
        zambia: 'Lusaka, Zambia',
        drc: 'Kinshasa, DRC',
        email: 'info@bridgelinkconsultants.com',
        website: 'www.bridgelinkconsultants.info'
      },
      legal: {
        copyright: '2024 Bridgelink Mineral Consultants Ltd. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
      }
    },
    fr: {
      company: {
        name: 'Bridgelink Mineral Consultants Ltd',
        tagline: 'Explorer l\'Avenir',
        description: 'Conseil minier de premier plan avec plus de 10 ans d\'excellence en Zambie et en RDC.'
      },
      links: {
        title: 'Liens Rapides',
        items: [
          { name: 'À Propos', href: '#about' },
          { name: 'Services', href: '#services' },
          { name: 'Projets', href: '#projects' },
          { name: 'Galerie', href: '#gallery' },
          { name: 'Stratégie', href: '#strategy' },
          { name: 'Gouvernance', href: '#governance' },
          { name: 'Contact', href: '#contact' }
        ]
      },
      services: {
        title: 'Services',
        items: [
          'Conseil Minier',
          'Services d\'Exploration',
          'Assurance Qualité',
          'Estimation des Ressources',
          'Évaluation Environnementale',
          'Analyse de Données'
        ]
      },
      contact: {
        title: 'Informations de Contact',
        zambia: 'Lusaka, Zambie',
        drc: 'Kinshasa, RDC',
        email: 'info@bridgelinkconsaltants.com',
        website: 'www.bridgelinkconsaltants.com'
      },
      legal: {
        copyright: '2024 Bridgelink Mineral Consultants Ltd. Tous droits réservés.',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions de Service',
        cookies: 'Politique des Cookies'
      }
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BM</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bridgelink</h3>
                  <p className="text-amber-400 text-sm">Mineral Consultants</p>
                </div>
              </div>
              <p className="text-amber-400 font-semibold">{content[language].company.tagline}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {content[language].company.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 text-amber-400">{content[language].links.title}</h4>
              <ul className="space-y-3">
                {content[language].links.items.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 text-amber-400">{content[language].services.title}</h4>
              <ul className="space-y-3">
                {content[language].services.items.map((service) => (
                  <li key={service} className="text-gray-300 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 text-amber-400">{content[language].contact.title}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">{content[language].contact.zambia}</p>
                    <p className="text-gray-300 text-sm">{content[language].contact.drc}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a 
                    href={`mailto:${content[language].contact.email}`}
                    className="text-gray-300 hover:text-amber-400 text-sm transition-colors"
                  >
                    {content[language].contact.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{content[language].contact.website}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">{content[language].legal.copyright}</p>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                {content[language].legal.privacy}
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                {content[language].legal.terms}
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                {content[language].legal.cookies}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;