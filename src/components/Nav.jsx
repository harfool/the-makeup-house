// src/components/Nav.jsx - Premium Glassmorphism Navigation
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Phone } from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    closeMenu()
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Reviews' },
    { path: '/about', label: 'About' },
  ]

  return (
    <>
      {/* Luxury Navigation Bar with Glassmorphism */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-luxury py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Premium Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Sparkles className="w-8 h-8 text-rose-500 drop-shadow-glow" />
                <div className="absolute inset-0 blur-xl bg-rose-500/30 group-hover:bg-rose-500/50 transition-all" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-display font-bold tracking-tight gradient-text">
                  The Makeup House
                </span>
                <span className="text-xs text-brand-600/60 font-light tracking-widest uppercase">
                  Beauty Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`relative px-5 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-white bg-gradient-to-r from-brand-600 to-rose-500 shadow-glow'
                        : 'text-brand-700 hover:text-brand-600 hover:bg-blush-50/50'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-brand-600 to-rose-500 rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="tel:+918955748498"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-full font-semibold shadow-luxury hover:shadow-glow transition-all duration-300 btn-glow"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-brand-700 hover:bg-blush-100/50 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Progress Indicator on Scroll */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-600 via-rose-500 to-gold-400"
            style={{ transformOrigin: 'left' }}
          />
        )}
      </motion.nav>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-800/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              className="fixed top-24 left-4 right-4 glass rounded-3xl shadow-luxury-lg z-50 lg:hidden overflow-hidden"
            >
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'text-white bg-gradient-to-r from-brand-600 to-rose-500 shadow-glow'
                          : 'text-brand-700 hover:bg-blush-50/70 hover:text-brand-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="tel:+918955748498"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center space-x-2 w-full mt-4 px-6 py-4 bg-gradient-to-r from-brand-600 to-rose-500 text-white rounded-2xl font-semibold shadow-glow"
                >
                  <Phone className="w-5 h-5" />
                  <span>Book Appointment</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
