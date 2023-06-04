import React from 'react'
import { Header } from '../../Utils/Header/Header'
import { motion } from 'framer-motion'
import styles from '../MainpageHeader/mainpageheader.module.css'
import pyramid from '../../../img/main-pyramid.png'



export const MainpageHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header
        title='Мы верим, что нейросети помогут спасти не одну человеческую жизнь'
        accent={{
          color: 'blue',
          text: 'AI Checker'
        }}
      />
      <div className={styles.images}>
       
        <motion.img 
          className={styles.pyramid} src={pyramid} alt="Pyramid"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.6, 
            duration: 0.8,
            opacity: { duration: 1.3 },
            y: { duration: 1 }}}/>
       
      </div>
    </div>
  )
}