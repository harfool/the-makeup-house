// src/pages/Gallery.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '@/components/Lightbox'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: 'https://www.justdial.com/photos/the-makeup-house-gulabpura-beauty-parlours-yj4680ad63-pc-325243949-sco-99vctmm75zy',
      alt: 'The Makeup House - Bridal Makeup',
      category: 'Bridal',
    },
    {
      id: 2,
      src: 'https://www.justdial.com/photos/the-makeup-house-gulabpura-beauty-parlours-udfrqirwdp-pc-325243951-sco-99vctmm75zy',
      alt: 'The Makeup House - Bridal Look',
      category: 'Bridal',
    },
    {
      id: 3,
      src: 'https://www.justdial.com/photos/the-makeup-house-gulabpura-beauty-parlours-bmip8x4qql-pc-325243956-sco-99vctmm75zy',
      alt: 'The Makeup House - Makeup Artistry',
      category: 'Bridal',
    },
    {
      id: 4,
      src: 'https://www.justdial.com/photos/the-makeup-house-gulabpura-beauty-parlours-5ovh1aikje-pc-325244019-sco-99vctmm75zy',
      alt: 'The Makeup House - Bridal Makeup',
      category: 'Bridal',
    },
    {
      id: 5,
      src: 'https://www.justdial.com/photos/the-makeup-house-gulabpura-beauty-parlours-voaznlsljg-pc-346077695-sco-99vctmm75zy',
      alt: 'The Makeup House - Party Makeup',
      category: 'Party',
    },
    {
      id: 6,
      src: 'https://www.justdial.com/photos/the-makeup-house-gulabpura-bazar-gulabpura-beauty-parlours-01yx2auobl-pc-362644328-sco-99vctmm75zy',
      alt: 'The Makeup House - Professional Makeup',
      category: 'Professional',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop',
      alt: 'Bridal makeup with intricate details',
      category: 'Bridal',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop',
      alt: 'Evening glamour makeup',
      category: 'Party',
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
