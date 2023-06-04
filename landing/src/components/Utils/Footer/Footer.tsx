import React from 'react'
import styles from '../Footer/footer.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../../img/logo.png'
 

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <Link to="/">
          <img src={Logo} alt=" AI Checker" />
        </Link>
        <nav className={styles.nav}>
          <Link className='menulink' to="/pricing">Ссылка на репозиторий</Link>
          <Link className='menulink' to="/features">О проекте</Link>
          <Link className='menulink' to="/services">Загрузить фото</Link>
        </nav>
        </div>
      </div>
    </div>
  )
}