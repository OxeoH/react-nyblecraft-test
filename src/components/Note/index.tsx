import React from 'react'
import Tag from '../Tag'
import MyButton from '../UI/MyButton'
import styles from './Note.module.scss'
import { NoteType } from './note.types'

export const Note: React.FC<NoteType> = ({id, text, tags}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.note}>
        <div className={styles.text}>{text}</div>
        <MyButton>Edit</MyButton>
        <MyButton>Delete</MyButton>
      </div>
      <div className={styles.tags}>
        {tags.map(tag => <Tag id={tag.id} text={tag.text} />)}
        <MyButton>Add</MyButton>
      </div>
    </div>
  )
}
