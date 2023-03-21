import React from 'react'
import styles from './MyButton.module.scss'

const MyButton: React.FC<any> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default MyButton
