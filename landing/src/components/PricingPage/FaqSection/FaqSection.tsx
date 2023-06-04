import React from 'react'
import styles from '../FaqSection/faqsection.module.css'
import { Accordion } from '../../Utils/Accordion/Accordion'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'

export const FaqSection: React.FC = () => {
  return (
		<motion.section
			className={styles.container}
			variants={opacityVariant}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<h1>Часто задаваемые вопросы</h1>
			<motion.div
				className={styles.faq}
				variants={opacityVariant}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				<Accordion />
			</motion.div>
		</motion.section>
	);
}