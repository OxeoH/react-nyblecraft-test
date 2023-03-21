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

    deleteTag(tagId: string, noteId: string){
        const index = this.findNoteIndex(noteId)

        if(index < 0) {
            alert("Error: Cannot find this note")
        }else{
            this.notes[index].tags = this.notes[index].tags.filter( tag => tag.id !== tagId)
        }
        
    }

    setNotes(notes: NoteType[]){
        this.notes = notes
    }

    addTagToNote(tag: string, id: string){
        const index = this.findNoteIndex(id)

        if(index < 0) {
            alert("Error: Cannot find this note")
        }else{
            this.notes[index].tags.push({id: uuidv4(), text: tag})
        }
    }

    addNote(noteText: string){
        const tagsList = findTagsInStroke(noteText)

        const newNote: NoteType = {
            id: uuidv4(),
            text: noteText,
            tags: tagsList
        }
        
        this.notes.push(newNote)
    }

    editNote(id: string, newText: string){
        const index = this.findNoteIndex(id)

        if(index < 0) {
            alert("Error: Cannot find this note")
        }else{
            const newTags = findTagsInStroke(newText)
            console.log("New tags", newTags);
            
            if(newTags.length) {
                this.notes[index].tags = []
                this.notes[index] = {
                    id: this.notes[index].id,
                    text: newText,
                    tags: newTags
               }
            }

            this.notes[index] = {
                 id: this.notes[index].id,
                 text: newText,
                 tags: []
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


