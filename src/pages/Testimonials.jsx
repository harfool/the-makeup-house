// src/pages/Testimonials.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardHeader, CardContent, CardDescription } from '@/components/ui/Card'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The Makeup House made my wedding day absolutely perfect! The team was professional, talented, and understood exactly what I wanted. I felt like a princess, and the makeup lasted all day and night. Highly recommend!',
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      role: 'Event Organizer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'We\'ve worked with The Makeup House for multiple corporate events and fashion shows. Their artists are always punctual, professional, and deliver stunning results. Our clients love them!',
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Regular Client',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      rating: 5,
      text: 'I\'ve been a loyal customer for over 2 years. Whether it\'s a special occasion or just a confidence boost, The Makeup House never disappoints. The quality, service, and artistry are exceptional!',
    },
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    )
  }

  return (
    <div id="testimonials" className="pt-24 pb-20 bg-gradient-to-br from-blush via-cream to-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand mb-4">
            What Our Clients Say
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-blush/30" />
                
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-rose/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <div className="flex justify-center mt-3">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-center italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-brand mb-2">5000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials
