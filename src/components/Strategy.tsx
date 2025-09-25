import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Award } from 'lucide-react';

interface StrategyProps {
  language: 'en' | 'fr';
}

const Strategy: React.FC<StrategyProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Strategy & Goals',
      subtitle: 'Positioning for Sustainable Growth',
      description: 'Our strategic roadmap focuses on sustainable expansion, operational excellence, and establishing Bridgelink as the leading mining consolidation vehicle in Zambia.',
      strategies: [
        {
          icon: Target,
          period: 'Short-term (1-2 years)',
          title: 'Cost Reduction & Production Increase',
          goals: [
            'Optimize operational efficiency across all sites',
            'Implement advanced cost management systems',
            'Increase production capacity by 25%',
            'Streamline supply chain operations'
          ],
          color: 'from-red-500 to-pink-600'
        },
        {
          icon: TrendingUp,
          period: 'Medium-term (3-5 years)',
          title: 'Expand Exploration & New Mines',
          goals: [
            'Acquire new mineral concessions in target regions',
            'Develop 3-5 new mining sites',
            'Expand geological survey capabilities',
            'Establish regional processing centers'
          ],
          color: 'from-blue-500 to-cyan-600'
        },
        {
          icon: Globe,
          period: 'Long-term (5-10 years)',
          title: 'Leading Consolidation Vehicle',
          goals: [
            'Become the premier mining consolidator in Zambia',
            'Establish international partnerships',
            'Achieve carbon-neutral operations',
            'Lead industry sustainability initiatives'
          ],
          color: 'from-green-500 to-emerald-600'
        }
      ],
      focus: {
        title: 'Strategic Focus Areas',
        areas: [
          {
            icon: Award,
            title: 'Gold Operations',
            description: 'Expanding gold mining capabilities with advanced extraction technologies'
          },
          {
            icon: Target,
            title: 'Copper Production',
            description: 'Maximizing copper output through operational efficiency improvements'
          },
          {
            icon: TrendingUp,
            title: 'Coltan Development',
            description: 'Developing coltan resources to meet growing global demand'
          },
          {
            icon: Globe,
            title: 'Cobalt Innovation',
            description: 'Leading cobalt extraction innovation for electric vehicle markets'
          }
        ]
      }
    },
    fr: {
      title: 'Stratégie & Objectifs',
      subtitle: 'Positionnement pour une Croissance Durable',
      description: 'Notre feuille de route stratégique se concentre sur l\'expansion durable, l\'excellence opérationnelle et l\'établissement de Bridgelink comme le véhicule de consolidation minière leader en Zambie.',
      strategies: [
        {
          icon: Target,
          period: 'Court terme (1-2 ans)',
          title: 'Réduction des Coûts & Augmentation de la Production',
          goals: [
            'Optimiser l\'efficacité opérationnelle sur tous les sites',
            'Implémenter des systèmes avancés de gestion des coûts',
            'Augmenter la capacité de production de 25%',
            'Rationaliser les opérations de chaîne d\'approvisionnement'
          ],
          color: 'from-red-500 to-pink-600'
        },
        {
          icon: TrendingUp,
          period: 'Moyen terme (3-5 ans)',
          title: 'Expansion de l\'Exploration & Nouvelles Mines',
          goals: [
            'Acquérir de nouvelles concessions minérales dans les régions cibles',
            'Développer 3-5 nouveaux sites miniers',
            'Étendre les capacités d\'enquête géologique',
            'Établir des centres de traitement régionaux'
          ],
          color: 'from-blue-500 to-cyan-600'
        },
        {
          icon: Globe,
          period: 'Long terme (5-10 ans)',
          title: 'Véhicule de Consolidation Leader',
          goals: [
            'Devenir le consolidateur minier premier en Zambie',
            'Établir des partenariats internationaux',
            'Atteindre des opérations neutres en carbone',
            'Diriger les initiatives de durabilité de l\'industrie'
          ],
          color: 'from-green-500 to-emerald-600'
        }
      ],
      focus: {
        title: 'Domaines d\'Attention Stratégique',
        areas: [
          {
            icon: Award,
            title: 'Opérations d\'Or',
            description: 'Expansion des capacités d\'extraction d\'or avec des technologies d\'extraction avancées'
          },
          {
            icon: Target,
            title: 'Production de Cuivre',
            description: 'Maximisation de la production de cuivre grâce à des améliorations d\'efficacité opérationnelle'
          },
          {
            icon: TrendingUp,
            title: 'Développement du Coltan',
            description: 'Développement des ressources de coltan pour répondre à la demande mondiale croissante'
          },
          {
            icon: Globe,
            title: 'Innovation Cobalt',
            description: 'Innovation leader dans l\'extraction de cobalt pour les marchés de véhicules électriques'
          }
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
    <section id="strategy" className="py-20 bg-white">
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

          {/* Strategy Timeline */}
          <div className="space-y-8">
            {content[language].strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                  <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${strategy.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <strategy.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {strategy.period}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{strategy.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {strategy.goals.map((goal, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strategic Focus Areas */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {content[language].focus.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[language].focus.areas.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strategy;