// src/components/SEO.jsx - Simple SEO component using document.title
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  canonicalUrl 
}) => {
  const location = useLocation()

  useEffect(() => {
    // Update document title
    document.title = title || 'The Makeup House Gulabpura - Best Bridal Makeup & Beauty Salon'

    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Description
    if (description) {
      updateMetaTag('description', description)
      updateMetaTag('og:description', description, true)
      updateMetaTag('twitter:description', description)
    }

    // Keywords
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // OG Image
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true)
      updateMetaTag('twitter:image', ogImage)
    }

    // OG Title
    updateMetaTag('og:title', title, true)
    updateMetaTag('twitter:title', title)

    // Canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]')
      if (!linkElement) {
        linkElement = document.createElement('link')
        linkElement.setAttribute('rel', 'canonical')
        document.head.appendChild(linkElement)
      }
      linkElement.setAttribute('href', canonicalUrl)
    }

    // OG URL
    updateMetaTag('og:url', window.location.href, true)

  }, [title, description, keywords, ogImage, canonicalUrl, location])

  return null
}

export default SEO
