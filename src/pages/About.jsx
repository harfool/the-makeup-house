// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Target } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about beauty and dedicated to making every client feel confident and beautiful.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service, using premium products and advanced techniques.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build lasting relationships with our clients and celebrate their special moments together.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of trends and continuously improve our skills to deliver the best results.',
    },
  ]

  const team = [
    {
      name: 'Jessica Miller',
      role: 'Lead Makeup Artist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      experience: '12 years',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Stylist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      experience: '8 years',
    },
    {
      name: 'Aisha Patel',
      role: 'Bridal Specialist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      experience: '10 years',
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
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to The Makeup House, where artistry meets elegance. For over a decade, we've been transforming beauty dreams into reality.
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
                Founded in 2013, The Makeup House began with a simple vision: to make every person feel beautiful and confident. What started as a small studio has grown into a premier beauty destination.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of clients annually, from brides on their wedding day to professionals preparing for important events. Our team of expert artists brings creativity, skill, and passion to every appointment.
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
          <p className="text-xl text-gray-600 leading-relaxed">
            To enhance natural beauty through expert artistry, premium products, and personalized service. We believe that everyone deserves to look and feel their best, and we're committed to making that happen with professionalism, creativity, and care.
          </p>
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
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
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
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand mb-1">{member.name}</h3>
                    <p className="text-rose font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.experience} of experience</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
