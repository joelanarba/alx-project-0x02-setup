import React from 'react'
import { type ButtonProps } from '@/interfaces'


const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
}

export default function Button({
  text,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white hover:bg-blue-700 ${sizeClasses[size]} ${shape} ${className}`}
    >
      {text}
    </button>
  )
}
