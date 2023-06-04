import React, { useState } from 'react' 
import styles from '../TariffHelper/tariffhelper.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'
import dog from '../../../img/main-dog.png'
import { Button } from '../../Utils/Button/Button'
import { useDispatch } from 'react-redux';
import { updateTariff } from '../../../store/tariffsSlice';
import { Question } from '../../Utils/Question/Question'

interface Props {
  props: {
    name: 'Custom',
    price: number,
    members: {
      quant: number,
    },
    traffic: {
      quant: number,
    },
    space: {
      quant: number
    },
    isOnline: boolean
  }
}


export const TarifHelper: React.FC = () => {

  const [members, setMembers] = useState(1);
  const [traffic, setTraffic] = useState(0);
  const [space, setSpace] = useState(0);

  const [completeFirst, setCompleteFirst] = useState(false);
  const [completeSecond, setCompleteSecond] = useState(false);
  const [completeLast, setCompleteLast] = useState(false);

  const dispatch = useDispatch();
	const createProps = () => {
    const props: Props ={
        props: {
        name: 'Custom',
        price: Math.ceil((traffic * 0.05) + (space * 0.01) + members),
        members: {
          quant: members,
        },
        traffic: {
          quant: traffic,
        },
        space: {
          quant: space,
        },
        isOnline: space >= 300 || traffic >= 50 ? true : false,
        }
    };
    dispatch(updateTariff(props));
  };

  return (
		<motion.section
			className={styles.container}
			variants={opacityVariant}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<h1>Обычный человек, врач? Наш сервис подойдёт для тебя</h1>
			<p>
				.
			</p>
			<div className={styles.card}>
			
				<div className={styles.form}>
					<h4>Нужна помощь в определении типа пневмонии?</h4>
					<div className={styles.questions}>
            <Question 
              text={{first: 'Мне', last: '.'}}
              options={[
                {
                  text: 'от 0 до 16 лет',
                  value: 1
                },
                {
                  text: 'от 18 до 40 лет',
                  value: 4
                },
                {
                  text: 'страше 40',
                  value: 10 }]}
              fn={(e) => {setMembers(parseInt(e.target.value)); setCompleteFirst(true);}}
            />
            {completeFirst
              ?
              <Question 
                text={{first: 'Я болею', last: '.'}}
                options={[
                  {
                    text: 'более чем два дня',
                    value: 10
                  },
                  {
                    text: 'более недели',
                    value: 50
                  },
                  {
                    text: 'более месяца',
                    value: 120 }]}
                fn={(e) => {setTraffic(parseInt(e.target.value)); setCompleteSecond(true);}}
              />             
              : null
            }
            {completeSecond
              ?
              <Question 
                text={{first: 'Мой предварительный диагноз:'}}
                options={[
                  {
                    text: 'Ковид',
                    value: 250
                  },
                  {
                    text: 'Пневмония',
                    value: 350
                  },
                  {
                    text: 'Другое',
                    value: 1024 }]}
                fn={(e) => {setSpace(parseInt(e.target.value)); setCompleteLast(true);}}
              />             
              : null
            }
          {completeLast
            ?
              <motion.div
              className={styles.buttons}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              >
                {/* Указываем ссылку на DragDropper, где оно висит у вас */}
                <Button link='' type='submit' color='blue' text='Загрузить снимок ' fn={createProps} />
                <Button link='pricing' type='button' color='yellow' text='Это поможет мне?' />
              </motion.div>
            : null
          }
					</div>
				</div>
			</div>
		</motion.section>
	);
}
