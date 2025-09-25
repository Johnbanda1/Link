import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface AboutProps {
  language: 'en' | 'fr';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      title: 'About Bridgelink',
      subtitle: 'Excellence in Mining Consultancy Since 2010',
      history: 'Bridgelink Minerals Consultants Ltd is a proudly African BEE company with over 10 years of experience providing high-quality mining services. From humble beginnings, our growth has been driven by dedication, innovation, and customer satisfaction. We offer tailored, value-added solutions with skilled professionals, advanced equipment, and 24/7 operations to ensure efficiency, timely results, and adherence to international quality standards. Committed to sustainable development, we invest in local communities through health, education, sports, and income-generating projects, including sustainable livelihoods programs that provide livestock and reduce dependence on mining activities. By combining expertise, professionalism, and social responsibility, Bridgelink Minerals Consultants continues to be a trusted partner in the mining industry.',
      mission: {
        title: 'Our Mission',
        text: 'To remain committed to delivering uncompromised, professional, and high-quality results with the best possible turnaround time, while consistently meeting and exceeding client expectations.'
      },
      vision: {
        title: 'Our Vision',
        text: 'To become an internationally recognized leading mining and consultancy firm, renowned for delivering sustainable solutions, fostering innovation, and upholding the highest standards of integrity and professionalism in the global mining industry.'
      },
      values: {
        title: 'Our Values',
        items: [
          { icon: Shield, title: 'Safety', description: 'We prioritize the safety of our personnel and operations above all else.' },
          { icon: Target, title: 'Integrity', description: 'We conduct business with the highest ethical standards and transparency.' },
          { icon: Eye, title: 'Environmental Responsibility', description: 'We are committed to sustainable mining practices and environmental stewardship.' },
          { icon: Users, title: 'Governance', description: 'We maintain strong corporate governance and stakeholder accountability.' }
        ]
      }
    },
    fr: {
      title: 'À Propos de Bridgelink',
      subtitle: 'Excellence en Conseil Minier Depuis 2010',
      history: 'Avec plus de 10 ans d\'expérience dans les services miniers, Bridgelink Mineral Consultants Ltd s\'est établi comme un partenaire de confiance dans l\'industrie minière en Zambie et en République Démocratique du Congo.',
      mission: {
        title: 'Notre Mission',
        text: 'S\'engager à fournir des résultats professionnels et de qualité sans compromis dans les meilleurs délais.'
      },
      vision: {
        title: 'Notre Vision',
        text: 'Devenir reconnu internationalement comme une société de conseil minier de premier plan.'
      },
      values: {
        title: 'Nos Valeurs',
        items: [
          { icon: Shield, title: 'Sécurité', description: 'Nous priorisons la sécurité de notre personnel et de nos opérations avant tout.' },
          { icon: Target, title: 'Intégrité', description: 'Nous menons nos affaires avec les plus hauts standards éthiques et transparence.' },
          { icon: Eye, title: 'Responsabilité Environnementale', description: 'Nous nous engageons dans des pratiques minières durables et la gestion environnementale.' },
          { icon: Users, title: 'Gouvernance', description: 'Nous maintenons une gouvernance d\'entreprise forte et une responsabilité envers les parties prenantes.' }
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
    <section id="about" className="py-20 bg-gray-50">
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
              {content[language].history}
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{content[language].mission.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{content[language].mission.text}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{content[language].vision.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{content[language].vision.text}</p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center">
              {content[language].values.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[language].values.items.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Gallery */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <OptimizedImage
                src="/assets/images/op2.webp"
                alt="Mining operations"
                className="w-full h-32 object-cover"
                width={200}
                height={128}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {language === 'en' ? 'Operations' : 'Opérations'}
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <OptimizedImage
                src="/assets/images/op1.webp"
                alt="Mining equipment"
                className="w-full h-32 object-cover"
                width={200}
                height={128}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {language === 'en' ? 'Equipment' : 'Équipement'}
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <OptimizedImage
                src="/assets/images/tm.webp"
                alt="Team collaboration"
                className="w-full h-32 object-cover"
                width={200}
                height={128}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {language === 'en' ? 'Team' : 'Équipe'}
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <OptimizedImage
                src="/assets/images/sf3.webp"
                alt="Safety standards"
                className="w-full h-32 object-cover"
                width={200}
                height={128}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {language === 'en' ? 'Safety' : 'Sécurité'}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;