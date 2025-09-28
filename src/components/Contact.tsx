import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CircleCheck as CheckCircle } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'fr';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in Touch with Our Expert Team',
      description: 'Ready to discuss your mining project? Our experienced consultants are here to help you achieve your goals.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! We\'ll get back to you within 24 hours.',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'Enter your email address',
        subjectPlaceholder: 'What is this regarding?',
        messagePlaceholder: 'Tell us about your project or inquiry...',
        required: 'This field is required',
        emailInvalid: 'Please enter a valid email address'
      },
      offices: [
        {
          title: 'Zambia',
          address: 'Plot 1234, New Avondale, Off Airport Road \nLusaka, Zambia',
          phone: '+260-955-88893 / +260-779143769',
          email: 'info@bridgelinkconsultants.info'
        },
        {
          title: 'DRC Operations',
          address: 'Office Address: \nNo 930 Av: Biayi Prolonge Golf,\nLubumbashi, Democratic Republic of Congo \n \n Mining Address: \nBridgeLink Minerals SPRL, \n200 km East of Haut Uele Province, Isiro DRC ',
          phone: '+243-991-143257 / +260-955-88893 / +260-779143769',
          email: 'info@bridgelinkconsultants.info'
        }
      ],
      contacts: [
        { title: 'Director', phone: '+260-955-88893', department: 'Executive Leadership' },
        { title: 'Operations', phone: '+260-779143769', department: 'Daily Operations' },
        { title: 'Mining', phone: '+243-991-143257', department: 'Technical Mining' },
        { title: 'Marketing', phone: '+260-952-794870', department: 'Business Development' }
      ]
    },
    fr: {
      title: 'Contactez-Nous',
      subtitle: 'Entrez en Contact avec Notre Équipe d\'Experts',
      description: 'Prêt à discuter de votre projet minier? Nos consultants expérimentés sont là pour vous aider à atteindre vos objectifs.',
      form: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès! Nous vous répondrons dans les 24 heures.',
        namePlaceholder: 'Entrez votre nom complet',
        emailPlaceholder: 'Entrez votre adresse email',
        subjectPlaceholder: 'De quoi s\'agit-il?',
        messagePlaceholder: 'Parlez-nous de votre projet ou de votre demande...',
        required: 'Ce champ est requis',
        emailInvalid: 'Veuillez entrer une adresse email valide'
      },
      offices: [
        {
          title: 'Siège Social Zambie',
          address: 'Parcelle 1234, District Minier\nLusaka, Zambie',
          phone: '+260-955-88893 / +260-779143769',
          email: 'info@bridgelinkconsultants.info'
        },
        {
          title: 'Opérations RDC',
          address: 'Adresse du bureau: \nN° 930 Av. Biayi Prolongé Golf,\nLubumbashi, République Démocratique du Congo \n \nAdresse de la mine: \n200 km à l’est de la province du Haut-Uele, Isiro RDC',
          phone: '+260-955-88893 / +260-779143769',
          email: 'info@bridgelinkconsultants.info'
        }
      ],
      contacts: [
        { title: 'Directeur', phone: '+260-955-888931', department: 'Direction Exécutive' },
        { title: 'Opérations', phone: '+260-779143769', department: 'Opérations Quotidiennes' },
        { title: 'Exploitation Minière', phone: '+243-991-143257', department: 'Technique Minière' },
        { title: 'Marketing', phone: '+260-952-794870', department: 'Développement Commercial' }
      ]
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
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
    <section id="contact" className="py-20 bg-white">
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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Send us a Message' : 'Envoyez-nous un Message'}
                </h3>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800">{content[language].form.success}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {content[language].form.name}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('name', { required: content[language].form.required })}
                        type="text"
                        placeholder={content[language].form.namePlaceholder}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base min-h-[48px]"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {content[language].form.email}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('email', {
                          required: content[language].form.required,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: content[language].form.emailInvalid
                          }
                        })}
                        type="email"
                        placeholder={content[language].form.emailPlaceholder}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base min-h-[48px]"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {content[language].form.subject}
                  </label>
                  <input
                    {...register('subject', { required: content[language].form.required })}
                    type="text"
                    placeholder={content[language].form.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base min-h-[48px]"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {content[language].form.message}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      {...register('message', { required: content[language].form.required })}
                      rows={6}
                      placeholder={content[language].form.messagePlaceholder}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-base"
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-amber-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px]"
                >
                  <Send className="w-5 h-5" />
                  <span>
                    {isSubmitting 
                      ? content[language].form.sending 
                      : content[language].form.send
                    }
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Offices */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Our Offices' : 'Nos Bureaux'}
                </h3>
                {content[language].offices.map((office, index) => (
                  <div key={office.title} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{office.title}</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">{office.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contacts */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Direct Contacts' : 'Contacts Directs'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content[language].contacts.map((contact, index) => (
                    <div key={contact.title} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{contact.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{contact.department}</p>
                      <a href={`tel:${contact.phone}`} className="text-amber-600 hover:text-amber-700 font-medium text-sm sm:text-base">
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;