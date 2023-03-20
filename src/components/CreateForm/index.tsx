import React, { ChangeEvent, FormEvent } from 'react'
import styles from './CreateForm.module.scss'
import { MyInput } from '../UI/MyInput'

export const CreateForm: React.FC = () => {
  const [text, setText] = React.useState('')

  const sendForm = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    
  }


  return (
    <div className={styles.container}>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)} className={styles.form}>
          <div className={styles.fieldWrap}>
              <label className={styles.label}>Add Note: </label>
              <input
                value={text} 
                className={styles.input}
                type="text" 
                onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)} 
                placeholder='Add tags using # symbol'
              />
          </div>
          <input type="submit" value="Add" className={styles.submit}/>
      </form>
    </div>
  )
}