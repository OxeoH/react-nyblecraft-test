import { NoteType } from "../components/Note/note.types"
import { TagType } from "../components/Tag/tag.types"
import {v4 as uuidv4} from 'uuid'


export const template = /#\b[a-z-0-9]+\b/gi

// \b - граница слова
// /a+/ соответствует 'a' в "candy" и всем символам 'a' в "caaaaaaandy"
// /gi глобальный поиск и игнор регистра

export const findTagsInStroke = (noteText: string) => {

    const result = noteText.match(template)

    if(result){
        let newTags: TagType[] = result.map(item => {
            return {id: uuidv4(), text: item}
        })

        return newTags
    }

    return []
}
