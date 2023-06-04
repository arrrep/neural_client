import React from 'react'
import { Header } from '../../Utils/Header/Header'
import styles from '../PricingpageHeader/pricingpageheader.module.css'


export const PricingpageHeader: React.FC = () => {

  return (
    <div className={styles.container}>
      <Header
        title='Определяем различные заболевания.'
        accent={{
          color: 'yellow',
          text: 'Абсолютно бесплатно.'
        }}
      />
      
    </div>
  )
}