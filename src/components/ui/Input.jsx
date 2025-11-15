// src/components/ui/Input.jsx
import React from 'react'

const Input = ({ className = '', type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors ${className}`}
      {...props}
    />
  )
}

export { Input }
