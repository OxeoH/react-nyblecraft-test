import React from 'react'
import Tag from '../Tag'
import MyButton from '../UI/MyButton'
import styles from './Note.module.scss'
import { NoteType } from './note.types'

export const Note: React.FC<NoteType> = ({id, text, tags}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.note}>
        <div className={styles.text}><strong>{id}.</strong> {text}</div>
        <div className={styles.buttons}>
          <MyButton>Edit</MyButton>
          <MyButton>X</MyButton>
        </div>
      </div>
      <div className={styles.tags}>
        <div className={styles.list}>
          {tags.map(tag => <Tag id={tag.id} text={tag.text} />)}
        </div>
        <MyButton>Add</MyButton>
      </div>
    </div>
  )
}
