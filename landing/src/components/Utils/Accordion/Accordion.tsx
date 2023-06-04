import React from 'react'
import style from '../Accordion/accordion.module.css'
import { Questions } from '../../../utils/FaqQuestions';
import { AccordionQuestion } from '../AccordionQuestion/AccordionQuestion';

export const Accordion: React.FC = () => {
	return (
		<div className={style.container}>
			{Questions.map((question, index) => {
				return (
					<AccordionQuestion
						key={index}
						isActive={index === 0 ? true : false}
						question={question.question}
						answer={question.answer}
					/>
				);
			})}
		</div>
	);
};