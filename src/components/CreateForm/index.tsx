import React, { ChangeEvent, FormEvent } from 'react'
import styles from './CreateForm.module.scss'
import { MyInput } from '../UI/MyInput'//ToDo: replace default input
import { useStore } from '../../store'

export const CreateForm: React.FC = () => {
  const [text, setText] = React.useState('')
  const {notesStore} = useStore();

  const addNewNote = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    notesStore.addNote(text)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => addNewNote(e)} className={styles.form}>
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