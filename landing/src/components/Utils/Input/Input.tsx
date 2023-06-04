import React from 'react'

interface Props {
  placeholder?: string
  type: 'text' | 'email'
  color: 'gray' | 'white'
}

export const Input: React.FC<Props> = ({placeholder, color, type}) => {
  return (
      <input type={type} placeholder={placeholder} className={color}/>
  )
}