// src/pages/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      setIsSubmitting(false)
      return
    }

    // Create WhatsApp message
    const whatsappMessage = `*New Booking Request*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}${formData.service ? `%0A*Service:* ${encodeURIComponent(formData.service)}` : ''}${formData.message ? `%0A*Message:* ${encodeURIComponent(formData.message)}` : ''}`
    
    // Open WhatsApp
    window.open(`https://wa.me/918955748498?text=${whatsappMessage}`, '_blank')
    
    // Show success message
    setStatus({
      type: 'success',
      message: 'Redirecting to WhatsApp... Please send the message to complete your booking request.',
    })
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Near Hdfc Bank, Gulabpura Bazar-311021',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 8955748498',
      link: 'tel:+918955748498',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@themakeuphouse.com',
      link: 'mailto:info@themakeuphouse.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon-Fri: 10:00 AM - 8:00 PM | Sat: Open 24 Hrs | Sun: 10:00 AM - 8:00 PM',
    },
  ]

  return (
    <div id="contact" className="pt-24 pb-20 bg-gradient-to-br from-cream to-blush/30 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to book an appointment or have questions? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <CardHeader className="px-0">
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8955748498"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                      aria-label="Select service"
                    >
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Makeup</option>
                      <option value="party">Party Makeup</option>
                      <option value="natural">Natural/Day Makeup</option>
                      <option value="evening">Evening Makeup</option>
                      <option value="engagement">Engagement Makeup</option>
                      <option value="hd">HD Makeup</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      aria-label="Your message"
                    />
                  </div>

                  {status.message && (
                    <div
                      className={`p-4 rounded-lg ${
                        status.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                      role="alert"
                    >
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose/10 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-brand transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* WhatsApp Button */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-brand mb-1">
                    WhatsApp Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Quick response via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/918955748498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-green-500 hover:bg-green-600">
                      Chat Now
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Google Maps */}
            <Card className="p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7891234567!2d74.6592313!3d25.9069547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f736deecccf%3A0x5a1147e7f3dac9e9!2sThe%20Makeup%20House!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Makeup House Location"
              ></iframe>
              <div className="p-4 bg-white">
                <a
                  href="https://www.google.com/maps/place/The+Makeup+House/@25.9069547,74.6592313,17z/data=!4m14!1m7!3m6!1s0x39693f736deecccf:0x5a1147e7f3dac9e9!2sThe+Makeup+House!8m2!3d25.9069547!4d74.6592313!16s%2Fg%2F11t1g4wgcq!3m5!1s0x39693f736deecccf:0x5a1147e7f3dac9e9!8m2!3d25.9069547!4d74.6592313!16s%2Fg%2F11t1g4wgcq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-brand hover:text-rose-600 transition-colors font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
