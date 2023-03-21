import React, { useMemo } from 'react'
import { Note } from '../Note'
import styles from './Notes.module.scss'

import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

export const Notes: React.FC = observer(() => {
  const { notesStore } = useStore()

  return (
    <div className={styles.wrapper}>
      <h2>Notes List</h2>
      <div className={styles.list}>
        {!!notesStore.searchedNotes.length &&
          notesStore.searchedNotes.map((note, index) => (
            <Note key={note.id} id={note.id} text={note.text} tags={note.tags} index={index} />
          ))}
      </div>
    </div>
  )
})
