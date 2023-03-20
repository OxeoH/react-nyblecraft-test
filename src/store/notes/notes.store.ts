import { makeAutoObservable } from "mobx";
import { RootStore } from "..";
import { NoteType } from "../../components/Note/note.types";
import { findTagsInStroke } from "../../utils/findTagsInStroke";
import { uniqueNotesFromJSON } from "../../utils/uniqueNotesFromJSON";
import { v4 as uuidv4} from 'uuid'

class NotesStore{
    notes: NoteType[]
    rootStore: RootStore

    constructor(rootStore: RootStore){
        this.rootStore = rootStore
        this.notes = uniqueNotesFromJSON()
        makeAutoObservable(this)
    }

    

    findNoteIndex(id: string){
        const index = this.notes.findIndex(note => note.id === id)
        if(index < 0) {
            console.log("Error: cannot find note with that id: ", id);
            return -1
        }
        return index
    }

    getNotes(){
        return this.notes
    }

    setGroups(notes: NoteType[]){
        this.notes = notes
    }

    addNote(noteText: string){
        const tagsList = findTagsInStroke(noteText)

        const notesLength = this.notes.length

        const newNote: NoteType = {
            id: uuidv4(),
            text: noteText,
            tags: []
        }
            //tagsList
        
        this.notes.push(newNote)
    }

    editNote(id: string, newText: string){
        const index = this.findNoteIndex(id)

        if(index < 0) {
            alert("Error: Cannot find this note")
        }else{
            const tags = findTagsInStroke(newText)

            this.notes[index] = {
                 ...this.notes[index],
                 text: newText,
                 tags: [] //tags
            }
        }
    }

    deleteNote(id: string){
        const index = this.findNoteIndex(id)
        if(index < 0) alert("Error: Cannot find this note")
        this.notes = this.notes.filter((note) => note.id !== this.notes[index].id)
    }

    removeAll(){
        this.notes = []
    }

    getCounter(id: string){
        const index = this.findNoteIndex(id)
        if(index < 0) alert("Error: Cannot find this note")
        return index
    }
}

export default NotesStore


