import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, FileText, Award, CheckCircle, AlertTriangle } from 'lucide-react';

interface GovernanceProps {
  language: 'en' | 'fr';
}

const Governance: React.FC<GovernanceProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Corporate Governance',
      subtitle: 'Integrity, Transparency & Accountability',
      description: 'Our commitment to the highest standards of corporate governance ensures sustainable growth while maintaining trust with all stakeholders.',
      principles: [
        {
          icon: Shield,
          title: 'Integrity & Ethics',
          description: 'Unwavering commitment to ethical business practices and moral principles in all operations.',
          features: [
            'Code of Ethics for all employees',
            'Regular ethics training programs',
            'Whistleblower protection policies',
            'Zero tolerance for corruption'
          ]
        },
        {
          icon: FileText,
          title: 'Transparency & Disclosure',
          description: 'Open and transparent communication with shareholders, regulators, and stakeholders.',
          features: [
            'Regular financial reporting',
            'Public disclosure of material information',
            'Accessible shareholder communications',
            'Transparent decision-making processes'
          ]
        },
        {
          icon: Users,
          title: 'Independent Board',
          description: 'Strong independent board oversight ensuring effective governance and strategic direction.',
          features: [
            'Majority independent directors',
            'Diverse board composition',
            'Regular board evaluations',
            'Clear committee structures'
          ]
        },
        {
          icon: Award,
          title: 'Shareholder Value',
          description: 'Focused on creating long-term sustainable value for all shareholders and stakeholders.',
          features: [
            'Performance-based compensation',
            'Long-term value creation strategy',
            'Regular stakeholder engagement',
            'Sustainable business practices'
          ]
        }
      ],
      policies: {
        title: 'Key Policies & Frameworks',
        items: [
          { icon: CheckCircle, title: 'Anti-Corruption Policy', status: 'Implemented' },
          { icon: CheckCircle, title: 'Risk Management Framework', status: 'Active' },
          { icon: CheckCircle, title: 'Environmental Compliance', status: 'Monitored' },
          { icon: AlertTriangle, title: 'Safety Management System', status: 'Priority' }
        ]
      }
    },
    fr: {
      title: 'Gouvernance d\'Entreprise',
      subtitle: 'Intégrité, Transparence & Responsabilité',
      description: 'Notre engagement envers les plus hauts standards de gouvernance d\'entreprise assure une croissance durable tout en maintenant la confiance avec toutes les parties prenantes.',
      principles: [
        {
          icon: Shield,
          title: 'Intégrité & Éthique',
          description: 'Engagement inébranlable envers les pratiques commerciales éthiques et les principes moraux dans toutes les opérations.',
          features: [
            'Code d\'éthique pour tous les employés',
            'Programmes de formation éthique réguliers',
            'Politiques de protection des lanceurs d\'alerte',
            'Tolérance zéro pour la corruption'
          ]
        },
        {
          icon: FileText,
          title: 'Transparence & Divulgation',
          description: 'Communication ouverte et transparente avec les actionnaires, régulateurs et parties prenantes.',
          features: [
            'Rapports financiers réguliers',
            'Divulgation publique d\'informations matérielles',
            'Communications d\'actionnaires accessibles',
            'Processus de prise de décision transparents'
          ]
        },
        {
          icon: Users,
          title: 'Conseil Indépendant',
          description: 'Supervision forte du conseil indépendant assurant une gouvernance efficace et une direction stratégique.',
          features: [
            'Majorité de directeurs indépendants',
            'Composition diverse du conseil',
            'Évaluations régulières du conseil',
            'Structures de comités claires'
          ]
        },
        {
          icon: Award,
          title: 'Valeur Actionnariale',
          description: 'Axé sur la création de valeur durable à long terme pour tous les actionnaires et parties prenantes.',
          features: [
            'Rémunération basée sur la performance',
            'Stratégie de création de valeur à long terme',
            'Engagement régulier des parties prenantes',
            'Pratiques commerciales durables'
          ]
        }
      ],
      policies: {
        title: 'Politiques & Cadres Clés',
        items: [
          { icon: CheckCircle, title: 'Politique Anti-Corruption', status: 'Implémentée' },
          { icon: CheckCircle, title: 'Cadre de Gestion des Risques', status: 'Active' },
          { icon: CheckCircle, title: 'Conformité Environnementale', status: 'Surveillée' },
          { icon: AlertTriangle, title: 'Système de Gestion de la Sécurité', status: 'Priorité' }
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
    <section id="governance" className="py-20 bg-gray-50">
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
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </motion.div>

          {/* Governance Principles */}
          <div className="grid md:grid-cols-2 gap-8">
            {content[language].principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {principle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Policies & Frameworks */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {content[language].policies.title}
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[language].policies.items.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 group hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                    policy.icon === CheckCircle ? 'bg-green-100' : 'bg-amber-100'
                  }`}>
                    <policy.icon className={`w-8 h-8 ${
                      policy.icon === CheckCircle ? 'text-green-600' : 'text-amber-600'
                    }`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{policy.title}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    policy.status === 'Implemented' || policy.status === 'Implémentée' ? 'bg-green-100 text-green-800' :
                    policy.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                    policy.status === 'Monitored' || policy.status === 'Surveillée' ? 'bg-gray-100 text-gray-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {policy.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commitment Statement */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="max-w-4xl mx-auto text-white space-y-6">
              <h3 className="text-3xl font-bold">
                {language === 'en' ? 'Our Commitment to Excellence' : 'Notre Engagement envers l\'Excellence'}
              </h3>
              <p className="text-xl leading-relaxed opacity-90">
                {language === 'en' 
                  ? 'We pledge to maintain the highest standards of corporate governance, ensuring transparency, accountability, and sustainable value creation for all stakeholders.'
                  : 'Nous nous engageons à maintenir les plus hauts standards de gouvernance d\'entreprise, assurant transparence, responsabilité et création de valeur durable pour toutes les parties prenantes.'
                }
              </p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {language === 'en' ? 'Learn More' : 'En Savoir Plus'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Governance;