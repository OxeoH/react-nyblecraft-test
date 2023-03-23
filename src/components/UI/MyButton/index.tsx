import React from 'react'
import styles from './MyButton.module.scss'
import { IMyButton } from './mybutton.types'



const MyButton: React.FC<IMyButton> = ({ children, className='', ...props }) => {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      {children}
    </button>
  )
}

export default MyButton
