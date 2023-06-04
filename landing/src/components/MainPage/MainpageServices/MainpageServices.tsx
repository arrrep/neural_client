import React from 'react' 
import style from '../MainpageServices/mainpageservices.module.css'
import { FeatureItem } from '../../Utils/FeatureItem/FeatureItem'
import githubimg from '../../../img/main-github.png'

export const MainpageServices: React.FC = () => {
  return (
		<section className={style.container}>
			<FeatureItem
				title='Опен сурс решение'
				description='Исходный код нашеего проекта доступен на гитхабе, любой может присоедениться к работе над нашим приложением.'
				orientation='center'
			/>
			<img src={githubimg} alt='GitHub Integration' />
			<FeatureItem
				title='Простота в использовании'
				description='Абсолютно любой человек может загрузить сюда снимок своих лёгких в один клик, чтобы проверить его на наличие ковида или пневмонии'
				orientation='center'
			/>
		</section>
	);
}