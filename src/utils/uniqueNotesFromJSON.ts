import { NoteType } from '../components/Note/note.types'
import data from '../data/notes.json'
import { v4 as uuidv4} from 'uuid'
import { uniqueTagsInStroke } from './uniqueTagsInStroke'


export const uniqueNotesFromJSON = () => {
    let notes: NoteType[] = data.notes.map(note => {
        note =  {
            ...note, 
            id: uuidv4(), 
            tags: uniqueTagsInStroke(note.text)}
        return note
    })
    return notes
}