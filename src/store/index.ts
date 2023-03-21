import React from 'react'
import NotesStore from './notes/notes.store'

export class RootStore {
  notesStore: NotesStore
  constructor() {
    this.notesStore = new NotesStore(this)
  }
}

const storeContext = React.createContext(new RootStore())

export const useStore = () => React.useContext(storeContext)
