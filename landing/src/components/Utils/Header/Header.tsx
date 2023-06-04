import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../Header/headermenu.module.css'
import Logo from '../../../img/logo.png'

interface Props {
  title: string,
  accent?: {
    color?: 'yellow' | 'blue'
    text: string
  }
}

export const Header: React.FC<Props> = (props) => {
  let accent: string = props.accent?.color === 'blue' ? 'blue' : 'yellow';
  
  return (
		<div className='app-wrapper'>
			<motion.div
				className={styles.container}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.3, duration: 1 }}
			>
				<Link to='/'>
					<img src={Logo} alt='AI Checker' />
				</Link>
				<nav className={styles.nav}>
					<Link className='menulink' to='/pricing'>О проекте</Link>
					<Link className='menulink' to='https://github'>Ссылка на репозиторий</Link>
					<Link className='menulink' to=''>Загрузить фото</Link>
				</nav>
			</motion.div>
			<motion.h1
				initial={{ opacity: 0, y: 80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 1,
					opacity: { duration: 1.8 },
					y: { type: 'spring', duration: 1.4 },
				}}
			>
				{props.title}
				{accent && accent === 'blue' ? (
					<span className={styles.blue}> {props.accent?.text}</span>
				) : (
					<span className={styles.yellow}> {props.accent?.text}</span>
				)}
			</motion.h1>
		</div>
	);
}