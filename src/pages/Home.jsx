// src/pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const Home = () => {
  const featuredLooks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop',
      alt: 'Bridal makeup with elegant styling',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop',
      alt: 'Evening glamour makeup look',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&h=800&fit=crop',
      alt: 'Natural beauty makeup',
    },
  ]

  const uspBadges = [
    {
      icon: Calendar,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: Users,
      value: '15',
      label: 'Expert Artists',
    },
    {
      icon: Sparkles,
      value: '5000+',
      label: 'Events Completed',
    },
  ]

  return (
    <div id="home" className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush via-cream to-rose">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-brand mb-6"
            >
              Welcome to <span className="text-rose">The Makeup House</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Where Beauty Meets Artistry. Professional makeup services for your special moments.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {uspBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-shadow">
                  <badge.icon className="w-12 h-12 mx-auto mb-4 text-rose" />
                  <h3 className="text-4xl font-bold text-brand mb-2">{badge.value}</h3>
                  <p className="text-gray-600">{badge.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Looks Carousel */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand mb-4">
              Featured Looks
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our stunning transformations and signature styles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredLooks.map((look, index) => (
              <motion.div
                key={look.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <img
                  src={look.image}
                  alt={look.alt}
                  loading="lazy"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <Button size="lg">View Full Gallery</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
