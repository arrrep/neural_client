import React from 'react' 
import { FeatureItem } from '../../Utils/FeatureItem/FeatureItem'
import style from '../MainpageFeatures/mainpagefeatures.module.css'
import rocketimg from '../../../img/main-rocket.png'
import appimg from '../../../img/main-app.png'

export const MainpageFeatures: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.items}>
        <FeatureItem 
          title='Быстродействие'
          description='Загрузи снимок - получи результат через несколько секун!'
          button={{
            text: 'Загрузить снимок',
            link: 'features',
            color: 'blue' 
          }}
          img={rocketimg}
          orientation='left'
        />
        
      </div>
    </section>
  )
}