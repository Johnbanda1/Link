import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'fr';
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const content = {
    en: {
      title: 'Visual Gallery',
      subtitle: 'Capturing Excellence in Mining Operations',
      description: 'Explore our state-of-the-art facilities, advanced equipment, and the precious minerals we extract across our operations in Zambia and DRC.',
      categories: [
        { name: 'All', filter: 'all' },
        { name: 'Operations', filter: 'operations' },
        { name: 'Minerals', filter: 'minerals' },
        { name: 'Equipment', filter: 'equipment' },
        { name: 'Team', filter: 'team' }
      ]
    },
    fr: {
      title: 'Galerie Visuelle',
      subtitle: 'Capturer l\'Excellence dans les Opérations Minières',
      description: 'Explorez nos installations de pointe, équipements avancés et les minéraux précieux que nous extrayons à travers nos opérations en Zambie et en RDC.',
      categories: [
        { name: 'Tout', filter: 'all' },
        { name: 'Opérations', filter: 'operations' },
        { name: 'Minéraux', filter: 'minerals' },
        { name: 'Équipement', filter: 'equipment' },
        { name: 'Équipe', filter: 'team' }
      ]
    }
  };

  const images = [
    {
      id: 1,
      src: '/assets/images/op3.webp',
      title: language === 'en' ? 'Mining Operations' : 'Opérations Minières',
      category: 'operations',
      description: language === 'en' ? 'Large-scale mining operations in DRC' : 'Opérations minières à grande échelle en RDC'
    },
    {
      id: 2,
      src: '/assets/images/gd1.webp',
      title: language === 'en' ? 'Gold Extraction' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 3,
      src: '/assets/images/gold.webp',
      title: language === 'en' ? 'Gold Nuggets' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 4,
      src: '/assets/images/gd5.webp',
      title: language === 'en' ? 'Gold Nuggets' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 5,
      src: '/assets/images/mn2.webp',
      title: language === 'en' ? 'Copper' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 6,
      src: '/assets/images/mn3.webp',
      title: language === 'en' ? 'Copper' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 7,
      src: '/assets/images/cb1.webp',
      title: language === 'en' ? 'Cobalt' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 8,
      src: '/assets/images/ct1.webp',
      title: language === 'en' ? 'Coltan' : 'Extraction d\'Or',
      category: 'minerals',
      description: language === 'en' ? 'Pure gold extracted from our mines' : 'Or pur extrait de nos mines'
    },
    {
      id: 9,
      src: '/assets/images/op1.webp',
      title: language === 'en' ? 'Heavy Machinery' : 'Machinerie Lourde',
      category: 'equipment',
      description: language === 'en' ? 'State-of-the-art mining equipment' : 'Équipement minier de pointe'
    },
    {
      id: 10,
      src: '/assets/images/gd2.webp',
      title: language === 'en' ? 'Heavy Machinery' : 'Machinerie Lourde',
      category: 'equipment',
      description: language === 'en' ? 'State-of-the-art mining equipment' : 'Équipement minier de pointe'
    },
    {
      id: 11,
      src: '/assets/images/tm.webp',
      title: language === 'en' ? 'Expert Team' : 'Équipe d\'Experts',
      category: 'team',
      description: language === 'en' ? 'Our skilled mining professionals' : 'Nos professionnels miniers qualifiés'
    },
    {
      id: 12,
      src: '/assets/images/sf3.webp',
      title: language === 'en' ? 'Safety First' : 'Sécurité d\'Abord',
      category: 'operations',
      description: language === 'en' ? 'Maintaining highest safety standards' : 'Maintenir les plus hauts standards de sécurité'
    },
    {
      id: 13,
      src: '/assets/images/op4.webp',
      title: language === 'en' ? 'Precision Tools' : 'Outils de Précision',
      category: 'equipment',
      description: language === 'en' ? 'Advanced tools for mineral extraction' : 'Outils avancés pour l\'extraction minérale'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay && selectedImage !== null) {
      interval = setInterval(() => {
        setSelectedImage(prev => 
          prev === null ? 0 : (prev + 1) % filteredImages.length
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, selectedImage, filteredImages.length]);

  const nextImage = () => {
    setSelectedImage(prev => 
      prev === null ? 0 : (prev + 1) % filteredImages.length
    );
  };

  const prevImage = () => {
    setSelectedImage(prev => 
      prev === null ? filteredImages.length - 1 : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #F59E0B 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #EA580C 0%, transparent 50%)`
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
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {content[language].title}
            </h2>
            <p className="text-xl text-amber-400 font-semibold">
              {content[language].subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {content[language].description}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {content[language].categories.map((category) => (
              <motion.button
                key={category.filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.filter
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Controls */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  {isAutoPlay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Navigation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {filteredImages[selectedImage]?.title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage]?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;