import React from 'react'
import { Note } from '../Note'
import styles from './Notes.module.scss'


export const Notes: React.FC = () => {
  return (
    <div>
        NotesList
        <div>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
        </div>
    </div>
  )
}