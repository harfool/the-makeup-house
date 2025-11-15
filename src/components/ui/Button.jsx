// src/components/ui/Button.jsx
import React from 'react'

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    default: 'bg-brand text-white hover:bg-brand/90 focus:ring-brand shadow-md hover:shadow-lg',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white focus:ring-brand',
    ghost: 'text-brand hover:bg-blush/50 focus:ring-rose',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export { Button }
