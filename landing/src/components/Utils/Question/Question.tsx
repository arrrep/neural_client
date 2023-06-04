import React from 'react'
import { motion } from 'framer-motion'


interface Props {
  text: {
    first: string,
    last?: string,
  },
  options: {text: string, value: number}[]
  fn?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Question: React.FC<Props> = ({text, options, fn}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<p className='light'>
				{text.first}{' '}
				<select onChange={fn} name='first'>
					<option disabled selected></option>
					{options.map((option) => (
						<option value={option.value}>{option.text}</option>
					))}
				</select>{' '}
				{text.last}
			</p>
		</motion.div>
	);
};