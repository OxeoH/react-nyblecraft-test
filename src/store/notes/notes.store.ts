import { makeAutoObservable, toJS } from 'mobx'
import { RootStore } from '..'
import { NoteType } from '../../components/Note/note.types'
import { uniqueTagsInStroke } from '../../utils/uniqueTagsInStroke'
import { uniqueNotesFromJSON } from '../../utils/uniqueNotesFromJSON'
import { v4 as uuidv4 } from 'uuid'

class NotesStore {
  notes: NoteType[]
  searchValue: string
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.notes = uniqueNotesFromJSON()
    this.searchValue = ''
    makeAutoObservable(this)
  }

  get searchedNotes() {
    return this.notes.filter(note => {
      return note.tags
        .map(tag => tag.text)
        .join('')
        .includes(this.searchValue)
    })
  }
  findNoteIndex(id: string) {
    const index = this.notes.findIndex(note => note.id === id)
    if (index < 0) {
      console.log('Error: cannot find note with that id: ', id)
      return -1
    }
    return index
  }

  deleteTag(tagId: string, noteId: string) {
    const index = this.findNoteIndex(noteId)

    if (index < 0) {
      console.log('Error: Cannot find this note')
    } else {
      this.notes[index].tags = this.notes[index].tags.filter(tag => tag.id !== tagId)
    }
  }

  setNotes(notes: NoteType[]) {
    this.notes = notes
  }

  addTagToNote(tag: string, id: string) {
    const index = this.findNoteIndex(id)

    if (index < 0) {
      alert('Error: Cannot find this note')
    } else {
      this.notes[index].tags.push({ id: uuidv4(), text: tag })
    }
  }

  addNote(noteText: string) {
    const tagsList = uniqueTagsInStroke(noteText)

    const newNote: NoteType = {
      id: uuidv4(),
      text: noteText,
      tags: tagsList,
    }

    this.notes.push(newNote)
  }

  editNote(id: string, newText: string) {
    const index = this.findNoteIndex(id)
    console.log('Notes before func:', toJS(this.notes[index]))

    if (index < 0) {
      alert('Error: Cannot find this note')
    } else {
      const newTags = uniqueTagsInStroke(newText)

      this.notes[index] = {
        id: this.notes[index].id,
        text: newText,
        tags: newTags,
      }

      console.log('Notes after func:', toJS(this.notes[index]))
    }
  }

  deleteNote(id: string) {
    const index = this.findNoteIndex(id)
    if (index < 0) alert('Error: Cannot find this note')
    this.notes = this.notes.filter(note => note.id !== this.notes[index].id)
  }

  removeAll() {
    this.notes = []
  }

  getCounter(id: string) {
    const index = this.findNoteIndex(id)
    if (index < 0) alert('Error: Cannot find this note')
    return index
  }

  setSearchValue(search: string) {
    this.searchValue = search
  }
}

export default NotesStore
