    // src/pages/Gallery.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '@/components/Lightbox'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: 'https://images.jdmagicbox.com/comp/gulabpura/i5/9999p1482.1482.230904193654.x3i5/catalogue/the-makeup-house-gulabpura-beauty-parlours-udfrqirwdp.jpg',
      alt: 'The Makeup House - Bridal Makeup',
      category: 'Bridal',
    },
    {
      id: 2,
      src: 'https://images.jdmagicbox.com/comp/gulabpura/i5/9999p1482.1482.230904193654.x3i5/catalogue/the-makeup-house-gulabpura-beauty-parlours-yj4680ad63.jpg',
      alt: 'The Makeup House - Bridal Look',
      category: 'Bridal',
    },
    {
      id: 3,
      src: 'https://images.jdmagicbox.com/comp/gulabpura/i5/9999p1482.1482.230904193654.x3i5/catalogue/the-makeup-house-gulabpura-beauty-parlours-voaznlsljg.jpg',
      alt: 'The Makeup House - Makeup Artistry',
      category: 'Bridal',
    },
    {
      id: 4,
      src: 'https://images.jdmagicbox.com/comp/gulabpura/i5/9999p1482.1482.230904193654.x3i5/catalogue/the-makeup-house-gulabpura-beauty-parlours-bmip8x4qql.jpg',
      alt: 'The Makeup House - Bridal Makeup',
      category: 'Bridal',
    },
    {
      id: 5,
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-gk-OsikH7wylmMylhKqeNf9IdbxpGvkKk1Xi68ySZBVc9MB9Nex00oX525yyIReca47GfffWetMgZBlP3KCXwnZhIkmSD8HeJGuwZ28ROGYhotu9AzVxIsVqlkQ3DDLiJeL-=s1360-w1360-h1020-rw',
      alt: 'The Makeup House - Party Makeup',
      category: 'Party',
    },
    {
      id: 6,
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxo42WoHwdlN9sBpDX7AEybLeWGsXvWhi9d31sVPEgQLDoOckyIU0tgymkQRMvOfj4e0WHZkS5ByweaABjw9V8czWQKBTUf4Ghcj02ruYAx-MlW37VB1GsKYsFGO1vX849gOHNHCA=s1360-w1360-h1020-rw',
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => {
            // Varied heights for bento effect
            const getHeightClass = (idx) => {
              const heights = [
                'h-[400px]', // Tall
                'h-[320px]', // Medium
                'h-[400px]', // Tall
                'h-[280px]', // Short
                'h-[350px]', // Medium-tall
                'h-[320px]', // Medium
                'h-[400px]', // Tall
                'h-[300px]', // Medium
              ]
              return heights[idx % heights.length]
            }

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl shadow-luxury cursor-pointer group ${getHeightClass(index)}`}
                onClick={() => handleImageClick(index)}
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'block'
                    e.target.style.backgroundColor = '#f3f4f6'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/90 via-brand-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full mb-2 w-fit">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            )
          })}
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
