import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Award, Clock, Zap } from 'lucide-react';

interface StatisticsProps {
  language: 'en' | 'fr';
}

const Statistics: React.FC<StatisticsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Impact in Numbers',
      subtitle: 'Measurable Excellence Across Operations',
      stats: [
        {
          icon: TrendingUp,
          number: '10+',
          label: 'Years of Excellence',
          description: 'Proven track record in mining industry',
          color: 'from-blue-500 to-cyan-600'
        },
        {
          icon: Users,
          number: '500+',
          label: 'Expert Professionals',
          description: 'Skilled workforce across operations',
          color: 'from-green-500 to-emerald-600'
        },
        {
          icon: MapPin,
          number: '2',
          label: 'Countries',
          description: 'Active operations in Zambia & DRC',
          color: 'from-purple-500 to-violet-600'
        },
        {
          icon: Award,
          number: '99%',
          label: 'Client Satisfaction',
          description: 'Consistently exceeding expectations',
          color: 'from-amber-500 to-orange-600'
        },
        {
          icon: Clock,
          number: '24/7',
          label: 'Operations',
          description: 'Round-the-clock mining activities',
          color: 'from-red-500 to-pink-600'
        },
        {
          icon: Zap,
          number: '95%',
          label: 'Efficiency Rate',
          description: 'Optimized extraction processes',
          color: 'from-indigo-500 to-blue-600'
        }
      ]
    },
    fr: {
      title: 'Notre Impact en Chiffres',
      subtitle: 'Excellence Mesurable à Travers les Opérations',
      stats: [
        {
          icon: TrendingUp,
          number: '10+',
          label: 'Années d\'Excellence',
          description: 'Historique prouvé dans l\'industrie minière',
          color: 'from-blue-500 to-cyan-600'
        },
        {
          icon: Users,
          number: '500+',
          label: 'Professionnels Experts',
          description: 'Main-d\'œuvre qualifiée à travers les opérations',
          color: 'from-green-500 to-emerald-600'
        },
        {
          icon: MapPin,
          number: '2',
          label: 'Pays',
          description: 'Opérations actives en Zambie et RDC',
          color: 'from-purple-500 to-violet-600'
        },
        {
          icon: Award,
          number: '99%',
          label: 'Satisfaction Client',
          description: 'Dépassant constamment les attentes',
          color: 'from-amber-500 to-orange-600'
        },
        {
          icon: Clock,
          number: '24/7',
          label: 'Opérations',
          description: 'Activités minières 24h/24',
          color: 'from-red-500 to-pink-600'
        },
        {
          icon: Zap,
          number: '95%',
          label: 'Taux d\'Efficacité',
          description: 'Processus d\'extraction optimisés',
          color: 'from-indigo-500 to-blue-600'
        }
      ]
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

  const countUpVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                <motion.div
                  variants={countUpVariants}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4 mx-auto`}
                />
              </motion.div>
            ))}
          </div>

          {/* Achievement Banner */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="max-w-4xl mx-auto text-white space-y-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold">
                {language === 'en' 
                  ? 'Leading the Future of Mining in Africa'
                  : 'Mener l\'Avenir de l\'Exploitation Minière en Afrique'
                }
              </h3>
              
              <p className="text-xl leading-relaxed opacity-90">
                {language === 'en'
                  ? 'With over a decade of excellence, we continue to set new standards in sustainable mining practices while delivering exceptional value to our stakeholders.'
                  : 'Avec plus d\'une décennie d\'excellence, nous continuons à établir de nouvelles normes dans les pratiques minières durables tout en offrant une valeur exceptionnelle à nos parties prenantes.'
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;