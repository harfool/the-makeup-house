// src/pages/Services.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Sparkles, Star, Sun, Moon, Crown } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Bridal Makeup',
      description: 'Look stunning on your special day with our expert bridal makeup services. We create timeless looks that photograph beautifully.',
      price: '$250',
      color: 'text-rose',
    },
    {
      icon: Star,
      title: 'Party Makeup',
      description: 'Turn heads at any event with glamorous party makeup. Perfect for celebrations, galas, and special occasions.',
      price: '$150',
      color: 'text-brand',
    },
    {
      icon: Sun,
      title: 'Natural/Day Makeup',
      description: 'Enhance your natural beauty with subtle, elegant makeup perfect for everyday wear or professional settings.',
      price: '$80',
      color: 'text-yellow-500',
    },
    {
      icon: Moon,
      title: 'Evening Makeup',
      description: 'Dramatic and sophisticated looks for evening events, dinners, and formal occasions.',
      price: '$120',
      color: 'text-purple-500',
    },
    {
      icon: Heart,
      title: 'Engagement Makeup',
      description: 'Celebrate your engagement with flawless makeup that captures the joy and romance of this special milestone.',
      price: '$180',
      color: 'text-pink-500',
    },
    {
      icon: Sparkles,
      title: 'HD Makeup',
      description: 'Camera-ready makeup that looks perfect in person and in photos. Ideal for photoshoots and video productions.',
      price: '$200',
      color: 'text-blue-500',
    },
  ]

  return (
    <div id="services" className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our range of professional makeup services designed to make you look and feel beautiful for any occasion
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-brand">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm">Starting from</span>
                  </div>
                  <Link to="/contact" className="block mt-4">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-12 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-brand mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-gray-600 mb-8">
            Let our expert makeup artists create the perfect look for you. Contact us today!
          </p>
          <Link to="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
