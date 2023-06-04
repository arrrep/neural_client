import React from 'react'
import { Link } from 'react-router-dom'
import style from '../AssistCard/assistcard.module.css'

interface Props {
  title: string,
  description: string
  link?: {
    to: string,
    text: string
  }
}

export const AssistCard: React.FC<Props> = ({title, description, link}) => {
  return (
    <div className={style.card}>
      <h4>{title}</h4>
      <p className='light'>{description} <Link to={`/${link?.to}`}>{link?.text}</Link></p>
    </div>
  )
}