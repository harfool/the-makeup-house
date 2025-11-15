// src/components/Footer.jsx - Premium Footer with Proper Contrast
import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-rose-400" />
              <span className="text-xl font-bold text-white">The Makeup House</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Where Beauty Meets Artistry. Professional makeup services for your special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Near Hdfc Bank, Gulabpura Bazar-311021
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="tel:+918955748498" className="text-white/70 hover:text-white transition-colors text-sm">
                  +91 8955748498
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:info@themakeuphouse.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@themakeuphouse.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the_makeup_house_gulabpura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/the_makeup_house_gulabpura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/the_makeup_house_gulabpura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center space-y-3">
          <p className="text-white/60 text-sm">&copy; {currentYear} The Makeup House. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
            <span>Built with <span className="text-rose-400">♥</span> by</span>
            <a 
              href="https://growifyindia.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="\src\assets\image.png" 
                alt="Growify India" 
                className="h-6 inline-block"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
