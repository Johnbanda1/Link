import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Zap, Leaf } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ProjectsProps {
  language: 'en' | 'fr';
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Projects & Operations',
      subtitle: 'Active Operations in Zambia & DRC',
      description: 'Our strategic operations span two key African mining regions, where we focus on the sustainable and responsible extraction of precious metals and minerals. Leveraging advanced technology, skilled expertise, and best-in-class practices, we aim to maximize resource value while minimizing environmental impact. Our commitment extends beyond production, fostering community development, safety, and long-term economic growth in the regions where we operate.',
      locations: [
        {
          country: 'Zambia',
          city: 'Office',
          description: 'Main operational base with comprehensive mining consultancy services',
          icon: MapPin
        },
        {
          country: 'DRC',
          city: 'Office',
          description: 'Active mining operations focusing on Copper, Cobalt, Gold, and Coltan',
          icon: MapPin
        }
      ],
      statistics: {
        title: 'Annual Production Targets',
        data: [
          { name: 'Copper', value: 60000, unit: 'tons', color: '#B45309' },
          { name: 'Cobalt', value: 3600, unit: 'tons', color: '#1E40AF' },
          { name: 'Gold', value: 60, unit: 'tones', color: '#F59E0B' },
          { name: 'Coltan', value: 500, unit: 'tons', color: '#6B7280' }
        ]
      },
      highlights: [
        {
          icon: TrendingUp,
          title: 'Sustainable Growth',
          description: 'Achieving consistent year-over-year production growth while upholding the highest standards of environmental responsibility and sustainable practices.'
        },
        {
          icon: Zap,
          title: 'Advanced Technology',
          description: 'State-of-the-art extraction and processing equipment for optimal efficiency'
        },
        {
          icon: Leaf,
          title: 'Environmental Focus',
          description: 'Committed to responsible mining practices and ecosystem preservation'
        }
      ]
    },
    fr: {
      title: 'Projets & Opérations',
      subtitle: 'Opérations Actives en Zambie & RDC',
      description: 'Nos opérations stratégiques s’étendent sur deux régions minières clés d’Afrique, où nous nous concentrons sur l’extraction durable et responsable des métaux précieux et des minéraux. En tirant parti de technologies avancées, de l’expertise qualifiée et des meilleures pratiques, nous visons à maximiser la valeur des ressources tout en minimisant l’impact environnemental. Notre engagement va au-delà de la production, favorisant le développement des communautés, la sécurité et la croissance économique à long terme dans les régions où nous opérons.',
      locations: [
        {
          country: 'Zambie',
          city: 'Siège Social',
          description: 'Base opérationnelle principale avec des services de conseil minier complets',
          icon: MapPin
        },
        {
          country: 'RDC',
          city: 'Concession Luba',
          description: 'Opérations minières actives axées sur le Cuivre, Cobalt, Or et Coltan',
          icon: MapPin
        }
      ],
      statistics: {
        title: 'Objectifs de Production Annuels',
        data: [
          { name: 'Cuivre', value: 15000, unit: 'tonnes', color: '#B45309' },
          { name: 'Cobalt', value: 1800, unit: 'tonnes', color: '#1E40AF' },
          { name: 'Or', value: 720, unit: 'kg', color: '#F59E0B' },
          { name: 'Coltan', value: 500, unit: 'tonnes', color: '#6B7280' }
        ]
      },
      highlights: [
        {
          icon: TrendingUp,
          title: 'Croissance Durable',
          description: 'Atteindre une croissance constante de la production d’année en année tout en respectant les normes les plus élevées de responsabilité environnementale et de pratiques durables.'
        },
        {
          icon: Zap,
          title: 'Technologie Avancée',
          description: 'Équipement d\'extraction et de traitement de pointe pour une efficacité optimale'
        },
        {
          icon: Leaf,
          title: 'Focus Environnemental',
          description: 'Engagé dans des pratiques minières responsables et la préservation des écosystèmes'
        }
      ]
    }
  };

  const chartData = content[language].statistics.data.map(item => ({
    name: item.name,
    value: item.value,
    unit: item.unit
  }));

  const COLORS = content[language].statistics.data.map(item => item.color);

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
    <section id="projects" className="py-20 bg-gray-50">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 px-4 sm:px-0">
              {content[language].title}
            </h2>
            <p className="text-lg sm:text-xl text-amber-600 font-semibold px-4 sm:px-0">
              {content[language].subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-6 sm:px-4">
              {content[language].description}
            </p>
          </motion.div>

          {/* Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {content[language].locations.map((location, index) => (
              <motion.div
                key={location.country}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{location.country}</h3>
                    <p className="text-amber-600 font-semibold mb-3 text-sm sm:text-base">{location.city}</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{location.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
            {/* Mineral Showcase */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <motion.div 
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-amber-200 group-hover:border-amber-400 transition-colors">
                  <picture>
                    <source srcSet="/assets/images/gold.avif" type="image/avif" />
                    <source srcSet="/assets/images/gold.webp" type="image/webp" />
                    <img
                    src="/assets/images/gold.webp"
                    alt="Gold"
                    className="w-full h-full object-cover"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    />
                  </picture>
                </div>
                <div className="text-center mt-3">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{language === 'en' ? 'Gold' : 'Or'}</h4>
                  <p className="text-sm text-gray-600">Au</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-orange-200 group-hover:border-orange-400 transition-colors">
                  <picture>
                    <source srcSet="/assets/images/copper.avif" type="image/avif" />
                    <source srcSet="/assets/images/copper.webp" type="image/webp" />
                    <img
                    src="/assets/images/copper.webp"
                    alt="Copper"
                    className="w-full h-full object-cover"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    />
                  </picture>
                </div>
                <div className="text-center mt-3">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{language === 'en' ? 'Copper' : 'Cuivre'}</h4>
                  <p className="text-sm text-gray-600">Cu</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-blue-200 group-hover:border-blue-400 transition-colors">
                  <picture>
                    <source srcSet="/assets/images/cobalt.avif" type="image/avif" />
                    <source srcSet="/assets/images/cobalt.webp" type="image/webp" />
                    <img
                    src="/assets/images/cobalt.webp"
                    alt="Cobalt"
                    className="w-full h-full object-cover"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    />
                  </picture>
                </div>
                <div className="text-center mt-3">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Cobalt</h4>
                  <p className="text-sm text-gray-600">Co</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1, rotateY: 10 }}
                className="relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gray-200 group-hover:border-gray-400 transition-colors">
                  <picture>
                    <source srcSet="/assets/images/coltan.avif" type="image/avif" />
                    <source srcSet="/assets/images/coltan.webp" type="image/webp" />
                    <img
                    src="/assets/images/coltan.webp"
                    alt="Coltan"
                    className="w-full h-full object-cover"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    />
                  </picture>
                </div>
                <div className="text-center mt-3">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Coltan</h4>
                  <p className="text-sm text-gray-600">Ta</p>
                </div>
              </motion.div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4 sm:px-0">
              {content[language].statistics.title}
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
              {/* Bar Chart */}
              <div className="h-64 sm:h-80 order-2 xl:order-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => [
                        `${value.toLocaleString()} ${chartData.find(d => d.name === name)?.unit || ''}`,
                        name
                      ]}
                    />
                    <Bar dataKey="value" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Production Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 order-1 xl:order-2">
                {content[language].statistics.data.map((stat, index) => (
                  <motion.div
                    key={stat.name}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 sm:p-6 rounded-xl bg-gray-50 border border-gray-200"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.value.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">{stat.unit}</div>
                    <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">{stat.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content[language].highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 sm:col-span-1 lg:col-span-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;