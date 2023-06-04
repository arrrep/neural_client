import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string,
  color: 'blue' | 'yellow',
  type?: 'button' | 'submit'
  link: string,
  disabled?: boolean,
  fn?: () => void
}

export const Button: React.FC<Props> = ({text, color, link, disabled, type = 'button', fn}) => {
	return (
		<Link to={`/${link}`}>
      <button onClick={fn} type={type} disabled={disabled} className={color === 'blue' ? 'btn' : 'btn-alt'}>{text}</button>
    </Link>
	);
};