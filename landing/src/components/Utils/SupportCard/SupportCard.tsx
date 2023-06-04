import React from 'react'
import { Link } from 'react-router-dom'
import style from '../SupportCard/supportcard.module.css'

interface Props {
  title: string,
  description: string
  link?: {
    to: string,
    text: string
  }
}

export const SupportCard: React.FC<Props> = ({title, description, link}) => {
  return (
    <div className={style.card}>
      <h4>{title}</h4>
      <p className='light'>{description}</p>
      <div className={style.linkblock}>
        <Link to={`/${link?.to}`}><span></span> {link?.text}</Link>
      </div>
    </div>
  )
}