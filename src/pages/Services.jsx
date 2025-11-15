// src/pages/Services.jsx - Premium Service Cards with Luxury Pricing
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Sparkles, Star, Sun, Moon, Crown, Check, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Bridal Makeup',
      description: 'Look stunning on your special day with our signature bridal makeup. Flawless, long-lasting, and camera-perfect.',
      price: '250',
      features: ['Trial Session', 'Premium Products', 'Touch-up Kit'],
      gradient: 'from-rose-400 to-rose-600',
      popular: true,
    },
    {
      icon: Star,
      title: 'Party Makeup',
      description: 'Glamorous looks that turn heads at celebrations, galas, and special events.',
      price: '150',
      features: ['Bold & Glam', 'Long-wearing', 'Photo-ready'],
      gradient: 'from-brand-500 to-brand-700',
    },
    {
      icon: Sun,
      title: 'Natural/Day Makeup',
      description: 'Subtle elegance that enhances your natural beauty for daily confidence.',
      price: '80',
      features: ['Fresh Look', 'Light Coverage', 'Quick Service'],
      gradient: 'from-gold-400 to-gold-500',
    },
    {
      icon: Moon,
      title: 'Evening Makeup',
      description: 'Sophisticated and dramatic looks perfect for formal dinners and evening events.',
      price: '120',
      features: ['Elegant Style', 'Refined Finish', 'Premium Glow'],
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      icon: Heart,
      title: 'Engagement Makeup',
      description: 'Capture the romance and joy of your engagement with flawless makeup artistry.',
      price: '180',
      features: ['Romantic Look', 'Professional Finish', 'Complimentary Touch-ups'],
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      icon: Sparkles,
      title: 'HD Makeup',
      description: 'High-definition makeup that looks stunning in person and perfect on camera.',
      price: '200',
      features: ['HD Formula', 'Photoshoot Ready', 'Video Perfect'],
      gradient: 'from-blue-400 to-blue-600',
    },
  ]

  return (
    <div id="services" className="pt-24 pb-20 bg-gradient-to-b from-cream to-blush-50/30 min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 glass-dark rounded-full text-brand-600 font-semibold text-sm mb-6"
          >
            💄 Our Services
          </motion.span>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-brand-800 mb-6">
            Premium Makeup <span className="gradient-text">Services</span>
          </h1>
          
          <p className="text-xl text-brand-600/70 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your beauty vision into reality with our expertly crafted makeup services
          </p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 right-6 z-10">
                  <span className="px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-xs font-bold rounded-full shadow-glow">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}

              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl overflow-hidden h-full hover:shadow-luxury-lg transition-all duration-500"
              >
                {/* Icon Header with Gradient */}
                <div className={`bg-gradient-to-br ${service.gradient} p-8 relative overflow-hidden`}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4"
                  >
                    <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                  
                  <h3 className="font-display text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="w-16 h-1 bg-white/40 rounded-full" />
                </div>

                {/* Service Details */}
                <div className="p-8">
                  <p className="text-brand-600/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-brand-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-brand-200/30">
                    <span className="font-display text-5xl font-bold gradient-text">
                      ${service.price}
                    </span>
                    <span className="text-brand-500 text-sm font-light">starting</span>
                  </div>

                  {/* CTA Button */}
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-2xl font-semibold shadow-luxury hover:shadow-glow transition-all duration-300 btn-glow"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto shadow-luxury-lg relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-300/20 to-gold-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-300/20 to-rose-300/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block p-4 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl mb-6"
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-800 mb-4">
                Not Sure Which Service?
              </h2>
              
              <p className="text-xl text-brand-600/70 mb-8 max-w-2xl mx-auto">
                Book a free consultation and let our expert artists recommend the perfect look for your occasion
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-full font-semibold text-lg shadow-luxury hover:shadow-glow transition-all duration-300 btn-glow"
                  >
                    Schedule Free Consultation
                  </motion.button>
                </Link>

                <motion.a
                  href="tel:+918955748498"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 glass text-brand-700 rounded-full font-semibold text-lg hover:shadow-luxury transition-all duration-300"
                >
                  Call Us: +91 8955748498
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
