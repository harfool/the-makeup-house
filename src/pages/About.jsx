// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Target } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Hair Care',
      description: 'Bridal Hair Do, Volume Explosion Hair Treatment - Expert styling for every occasion with long-lasting results.',
    },
    {
      icon: Award,
      title: 'Premium Makeup',
      description: 'Kryolan Waterproof Makeup, Bridal Makeup With Hair Styling And Saree Draping - Professional artistry for your special moments.',
    },
    {
      icon: Users,
      title: 'Customer Service',
      description: 'Exceptional service and attention to detail making us a popular destination rated 4.8 by our valued clients.',
    },
    {
      icon: Target,
      title: 'Complete Beauty',
      description: 'From haircuts to complete makeovers - we offer skin care, nails, hair removal, and makeup services under one roof.',
    },
  ]

  const specialties = [
    {
      title: 'Bridal Expertise',
      service: 'Complete Bridal Package',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop',
      features: 'Hair Styling + Makeup + Saree Draping',
    },
    {
      title: 'Premium Products',
      service: 'Kryolan Waterproof',
      image: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=400&h=400&fit=crop',
      features: 'Professional Grade Makeup',
    },
    {
      title: 'Hair Treatments',
      service: 'Volume Explosion',
      image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=400&h=400&fit=crop',
      features: 'Expert Hair Care Solutions',
    },
  ]

  return (
    <div id="about" className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand mb-6">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <span className="text-3xl">⭐</span>
              <span className="text-2xl font-bold text-brand-700">4.8</span>
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-gray-600 font-medium">20 Customer Reviews</span>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The Makeup House in Gulabpura Bazar is a top-rated salon that provides high-quality services. This salon is known for its exceptional customer service and attention to detail, making it a popular destination for people who want to look and feel their best.
          </p>
        </motion.div>

        {/* Brand Story */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Makeup House in Gulabpura Bazar, Gulabpura is a leading name in the Beauty Parlours industry, offering a wide range of services to cater to the needs of its clients. With a team of skilled professionals, we are dedicated to providing the best experience for every customer.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Whether you're looking for a simple haircut or a complete makeover, The Makeup House has everything you need to enhance your natural beauty. We offer a comprehensive range of services, including hair care, skin care, nails, hair removal, and makeup.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located near Hdfc Bank in Gulabpura Bazar, we are easily accessible for clients seeking top-notch services in the area. From the moment you step into our salon, you'll be greeted by a friendly and professional staff dedicated to making your experience as enjoyable as possible.
              </p>
            </div>
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop"
                alt="The Makeup House studio interior"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-brand mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            With exceptional customer service, skilled professionals, and a comprehensive array of services, The Makeup House is the best salon in Gulabpura. Whether you're a regular client or a first-time visitor, you'll be treated to the finest care and attention at our top-rated salon.
          </p>
          <div className="bg-gradient-to-r from-rose-50 to-blush-50 rounded-2xl p-8 border border-rose-200/50">
            <h3 className="text-2xl font-bold text-brand mb-4">Operating Hours</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Monday - Friday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Saturday:</span>
                <span className="text-rose-600 font-bold">Open 24 Hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Sunday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow h-full">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-rose" />
                  <h3 className="text-xl font-bold text-brand mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand text-center mb-12"
          >
            Our Specialties
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand mb-1">{specialty.title}</h3>
                    <p className="text-rose font-medium mb-2">{specialty.service}</p>
                    <p className="text-gray-600 text-sm">{specialty.features}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-brand text-center mb-8">
            Visit Our Salon
          </h2>
          <Card className="overflow-hidden shadow-luxury">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7891234567!2d74.6592313!3d25.9069547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f736deecccf%3A0x5a1147e7f3dac9e9!2sThe%20Makeup%20House!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Makeup House Location"
              className="w-full"
            ></iframe>
            <div className="p-6 bg-gradient-to-r from-rose-50 to-blush-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">The Makeup House</h3>
                  <p className="text-gray-600">Near Hdfc Bank, Gulabpura Bazar-311021</p>
                </div>
                <a
                  href="https://www.google.com/maps/place/The+Makeup+House/@25.9069547,74.6592313,17z/data=!4m14!1m7!3m6!1s0x39693f736deecccf:0x5a1147e7f3dac9e9!2sThe+Makeup+House!8m2!3d25.9069547!4d74.6592313!16s%2Fg%2F11t1g4wgcq!3m5!1s0x39693f736deecccf:0x5a1147e7f3dac9e9!8m2!3d25.9069547!4d74.6592313!16s%2Fg%2F11t1g4wgcq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-xl font-semibold shadow-luxury hover:shadow-glow transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default About
