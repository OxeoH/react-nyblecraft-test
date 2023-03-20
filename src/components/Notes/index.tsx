import React from 'react'
import { Note } from '../Note'
import styles from './Notes.module.scss'

import data from '../../data/notes.json'

export const Notes: React.FC = () => {
  const [notesList, setNotesList] = React.useState(data.notes)

  return (
    <div>
        NotesList
        <div>
          {notesList.map(note => (<Note id={note.id} text={note.text} tags={note.tags}/>))}
        </div>
    </div>
  )
}