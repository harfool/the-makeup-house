// src/pages/Gallery.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '@/components/Lightbox'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop',
      alt: 'Bridal makeup with intricate details and elegant styling',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop',
      alt: 'Evening glamour makeup with bold colors',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&h=800&fit=crop',
      alt: 'Natural beauty makeup highlighting features',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=800&fit=crop',
      alt: 'Professional makeup application process',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1595476108010-b4d1f1b302fe?w=800&h=800&fit=crop',
      alt: 'Makeup brushes and beauty products',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=800&fit=crop',
      alt: 'Luxury makeup collection',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1571812349-e0b0e8c0f32d?w=800&h=800&fit=crop',
      alt: 'Perfect party makeup look',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1583001308104-eb6c43e1ec1a?w=800&h=800&fit=crop',
      alt: 'Elegant evening makeup style',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=800&fit=crop',
      alt: 'Professional bridal makeup transformation',
    },
  ]

  const handleImageClick = (index) => {
    setSelectedImage(index)
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div id="gallery" className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of stunning makeup transformations and beauty creations
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  )
}

export default Gallery
