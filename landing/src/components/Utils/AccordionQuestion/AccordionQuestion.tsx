import React, { useState } from 'react'
import style from '../AccordionQuestion/accordionquestion.module.css'

interface Props {
  question: string,
  answer: string,
  isActive: boolean
  key?: number
}

export const AccordionQuestion: React.FC<Props> = ({question, answer, isActive,}) => {
	const [active, setActive] = useState(isActive)
	const toggleAnswer = () => {setActive(prevState => !prevState)}

	return (
		<div className={style.container} onClick={toggleAnswer}>
			<div className={style.question}>
				<h4>{question}</h4>
				<span className={active === true ? `${style.active}` : ''}></span>
			</div>
			<div
				className={
					active === true
						? `${style.answer}`
						: `${style.answer} ${style.hidden}`
				}
			>
				<p className='light'>{answer}</p>
			</div>
		</div>
	);
};