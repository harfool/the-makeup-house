// src/components/ui/Textarea.jsx
import React from 'react'

const Textarea = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors resize-none ${className}`}
      {...props}
    />
  )
}

export { Textarea }
