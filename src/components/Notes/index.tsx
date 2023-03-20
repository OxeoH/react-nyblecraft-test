import React from 'react'
import { Note } from '../Note'
import styles from './Notes.module.scss'

import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

export const Notes: React.FC = observer(() => {
  const {notesStore} = useStore()
  
  return (
    <div className={styles.wrapper}>
        <h2>Notes List</h2>
        <div className={styles.list}>
          {notesStore.notes.map((note, index) => (
            <Note 
              key={index}
              id={note.id}
              text={note.text} 
              tags={note.tags} 
              />
            ))}
        </div>
    </div>
  )
})