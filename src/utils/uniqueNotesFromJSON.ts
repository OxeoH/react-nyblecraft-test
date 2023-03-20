import { NoteType } from '../components/Note/note.types'
import data from '../data/notes.json'
import { v4 as uuidv4} from 'uuid'


export const uniqueNotesFromJSON = () => {
    let notes: NoteType[] = data.notes.map(note => {
        note =  {...note, id: uuidv4()}
        return note
    })
    return notes
}