import React from 'react';
import { motion } from 'framer-motion';
import { Search, TestTube, BarChart3, Leaf, Clock, Award, Globe, Users } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'fr';
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive Mining Solutions',
      services: [
        {
          icon: Search,
          title: 'Mining, Consultancy & Exploration',
          description: 'Expert mining solutions, geological surveys, feasibility studies, and exploration planning with cutting-edge technology and experienced professionals.',
          features: ['Mining', 'Geological surveys', 'Feasibility studies', 'Resource exploration', 'Site assessment']
        },
        {
          icon: TestTube,
          title: 'Testing & Quality Assurance',
          description: '24/7 laboratory operations ensuring the highest standards of mineral analysis and quality control for optimal production outcomes.',
          features: ['24/7 operations', 'Mineral analysis', 'Quality control', 'Assay services']
        },
        {
          icon: BarChart3,
          title: 'Resource Estimation & Data Analysis',
          description: 'Advanced data modeling and resource estimation using state-of-the-art software and statistical methods for accurate planning.',
          features: ['Resource modeling', 'Data analytics', 'Statistical analysis', 'Production planning']
        },
        {
          icon: Leaf,
          title: 'Environmental Responsibility & Sustainability',
          description: 'Comprehensive environmental impact assessments and sustainable mining practices to protect ecosystems and communities.',
          features: ['Impact assessments', 'Sustainability planning', 'Environmental monitoring', 'Compliance management']
        }
      ],
      features: {
        title: 'Why Choose Bridgelink?',
        items: [
          { icon: Clock, title: 'Fast Turnaround', description: 'Quick and efficient project delivery' },
          { icon: Award, title: '10+ Years Experience', description: 'Proven track record in mining industry' },
          { icon: Globe, title: 'Regional Expertise', description: 'Deep knowledge of Zambia & DRC markets' },
          { icon: Users, title: 'Expert Team', description: 'Highly qualified mining professionals' }
        ]
      }
    },
    fr: {
      title: 'Nos Services',
      subtitle: 'Solutions Minières Complètes',
      services: [
        {
          icon: Search,
          title: 'Conseil Minier & Exploration',
          description: 'Études géologiques expertes, études de faisabilité et planification d\'exploration avec une technologie de pointe et des professionnels expérimentés.',
          features: ['Études géologiques', 'Études de faisabilité', 'Exploration des ressources', 'Évaluation de site']
        },
        {
          icon: TestTube,
          title: 'Tests & Assurance Qualité',
          description: 'Opérations de laboratoire 24h/24 garantissant les plus hauts standards d\'analyse minérale et de contrôle qualité pour des résultats de production optimaux.',
          features: ['Opérations 24h/24', 'Analyse minérale', 'Contrôle qualité', 'Services d\'essai']
        },
        {
          icon: BarChart3,
          title: 'Estimation des Ressources & Analyse des Données',
          description: 'Modélisation avancée des données et estimation des ressources utilisant des logiciels de pointe et des méthodes statistiques pour une planification précise.',
          features: ['Modélisation des ressources', 'Analyse de données', 'Analyse statistique', 'Planification de production']
        },
        {
          icon: Leaf,
          title: 'Responsabilité Environnementale & Durabilité',
          description: 'Évaluations d\'impact environnemental complètes et pratiques minières durables pour protéger les écosystèmes et les communautés.',
          features: ['Évaluations d\'impact', 'Planification durable', 'Surveillance environnementale', 'Gestion de la conformité']
        }
      ],
      features: {
        title: 'Pourquoi Choisir Bridgelink?',
        items: [
          { icon: Clock, title: 'Délai Rapide', description: 'Livraison de projet rapide et efficace' },
          { icon: Award, title: '10+ Ans d\'Expérience', description: 'Historique prouvé dans l\'industrie minière' },
          { icon: Globe, title: 'Expertise Régionale', description: 'Connaissance approfondie des marchés de Zambie et RDC' },
          { icon: Users, title: 'Équipe d\'Experts', description: 'Professionnels miniers hautement qualifiés' }
        ]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {content[language].title}
            </h2>
            <p className="text-xl text-amber-600 font-semibold">
              {content[language].subtitle}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {content[language].services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-amber-200/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-orange-200/30 rounded-full"
              />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {content[language].features.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[language].features.items.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-4 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                    <feature.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;