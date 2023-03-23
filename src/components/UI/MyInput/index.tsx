import React from 'react'
import styles from './MyInput.module.scss'
import { IMyInput } from './myinput.types'

export const MyInput: React.FC<IMyInput> = ({ className='', ...props }) => {
  return <input {...props} className={[styles.input, className].join(' ')} />
}
