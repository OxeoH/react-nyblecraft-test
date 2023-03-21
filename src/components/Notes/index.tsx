import React, { useMemo } from 'react'
import { Note } from '../Note'
import styles from './Notes.module.scss'

import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { NoteType } from '../Note/note.types'
import { findTagsInStroke } from '../../utils/findTagsInStroke'

export const Notes: React.FC = observer(() => {
  const {notesStore} = useStore()

  const currentNotes = useMemo(() => {
    let searchArray: NoteType[] = []
      const tags = findTagsInStroke(notesStore.searchValue)
      
      if (tags) {
          searchArray = notesStore.notes.filter(note => {
              let noteTags = note.tags.map(tag => tag.text).join('')
              
              return noteTags.includes(tags.join(''))
          })
      }
      return searchArray
  }, [notesStore.notes, notesStore.searchValue])
      


  return (
    <div className={styles.wrapper}>
        <h2>Notes List</h2>
        <div className={styles.list}>
          {currentNotes.map((note, index) => (
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