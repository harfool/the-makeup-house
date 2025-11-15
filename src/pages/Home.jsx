// src/pages/Home.jsx - Luxury Hero & Premium Experience
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Users, Calendar, Award, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const Home = () => {
  const featuredLooks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop',
      alt: 'Bridal makeup with elegant styling',
      category: 'Bridal Glam',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop',
      alt: 'Evening glamour makeup look',
      category: 'Party Look',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&h=800&fit=crop',
      alt: 'Natural beauty makeup',
      category: 'HD Makeup',
    },
  ]

  const uspBadges = [
    {
      icon: Calendar,
      value: '10+',
      label: 'Years Excellence',
      color: 'from-rose-400 to-rose-600',
    },
    {
      icon: Users,
      value: '15',
      label: 'Expert Artists',
      color: 'from-brand-500 to-brand-700',
    },
    {
      icon: Award,
      value: '5000+',
      label: 'Happy Clients',
      color: 'from-gold-400 to-gold-500',
    },
  ]

  return (
    <div id="home" className="pt-16">
      {/* Premium Hero Section with Luxury Typography */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background with Glam Lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush-50 to-rose-100" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 z-10 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full shadow-luxury">
                <Sparkles className="w-5 h-5 text-gold-500 animate-pulse" />
                <span className="text-sm font-semibold text-brand-700">
                  ⭐ 4.9/5 Rating • 1200+ Happy Clients
                </span>
              </div>
            </motion.div>

            {/* Hero Headline with Premium Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brand-800 mb-6 leading-tight">
                Where <span className="gradient-text">Beauty</span>
                <br />
                Meets <span className="gradient-text">Artistry</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-brand-600/80 font-light max-w-3xl mx-auto leading-relaxed mb-4"
              >
                Professional makeup services that transform your special moments into unforgettable memories
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base text-brand-500/70 italic"
              >
                Trusted by brides, celebrities, and beauty enthusiasts across the city
              </motion.p>
            </motion.div>
            
            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.a
                href="tel:+918955748498"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-full font-semibold text-lg shadow-luxury hover:shadow-glow transition-all duration-300 btn-glow"
              >
                <Phone className="w-5 h-5" />
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://wa.me/918955748498"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 glass text-brand-700 rounded-full font-semibold text-lg hover:shadow-luxury transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>

            {/* Quick Services Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-brand-600"
            >
              {['Bridal Makeup', 'Party Glam', 'HD Makeup', 'Engagement', 'Photoshoot'].map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass-dark rounded-full font-medium"
                >
                  {service}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-brand-600/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-brand-600/50 rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Premium USP Badges with Luxury Design */}
      <section className="py-24 bg-gradient-to-b from-white to-blush-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {uspBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="glass rounded-3xl p-10 text-center hover:shadow-luxury-lg transition-all duration-500 h-full">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-glow`}
                  >
                    <badge.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Value with Premium Typography */}
                  <h3 className="font-display text-6xl font-bold gradient-text mb-3">
                    {badge.value}
                  </h3>
                  
                  {/* Label */}
                  <p className="text-brand-600 font-medium text-lg tracking-wide">
                    {badge.label}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="mt-4 w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Featured Looks with Category Labels */}
      <section className="py-24 bg-gradient-to-b from-blush-50/30 to-cream relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header with Luxury Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 glass-dark rounded-full text-brand-600 font-semibold text-sm mb-4"
            >
              ✨ Our Portfolio
            </motion.span>
            
            <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-800 mb-6">
              Signature <span className="gradient-text">Looks</span>
            </h2>
            
            <p className="text-xl text-brand-600/70 max-w-2xl mx-auto font-light">
              Discover our stunning transformations that celebrate your unique beauty
            </p>
          </motion.div>

          {/* Featured Looks Grid with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {featuredLooks.map((look, index) => (
              <motion.div
                key={look.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-luxury-lg transition-all duration-500">
                  {/* Image with Zoom Effect */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={look.image}
                    alt={look.alt}
                    loading="lazy"
                    className="w-full h-[450px] object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-800/90 via-brand-800/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Category Label */}
                  <div className="absolute top-6 left-6">
                    <span className="glass px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                      {look.category}
                    </span>
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white">
                      <h3 className="font-display text-2xl font-bold mb-2">
                        {look.category}
                      </h3>
                      <p className="text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {look.alt}
                      </p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-rose-400 to-gold-400 mt-3 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-full font-semibold text-lg shadow-luxury hover:shadow-glow transition-all duration-300 btn-glow"
              >
                <span>Explore Full Gallery</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
