import React from 'react' 
import { Button } from '../Button/Button'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'
import styles from '../FeatureItem/featureitem.module.css'

interface Props {
  title: string,
  description: string,
  button?: {
    text: string,
    link: string,
    color: 'blue' | 'yellow'
  },
  img?: string,
  orientation: 'left' | 'right' | 'center'
}

export const FeatureItem: React.FC<Props> = (props) => {
  return (
		<motion.div
			className={
				props.orientation === 'left'
					? styles.card
					: props.orientation === 'right'
					? `${styles.card} ${styles.reversed}`
					: `${styles.card} ${styles.centered}`
			}
			variants={opacityVariant}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			{props.img ? (
				<div className={styles.image}>
					<img src={props.img} alt={props.title} />
				</div>
			) : null}
			<div className={styles.info}>
				<h2>{props.title}</h2>
				<p className='light'>{props.description}</p>
				{props.button ? (
					<Button
						text={props.button.text}
						color={props.button.color}
						link={props.button.link}
					/>
				) : null}
			</div>
		</motion.div>
	);
}