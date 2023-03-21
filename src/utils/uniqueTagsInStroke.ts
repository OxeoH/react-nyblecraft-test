import { TagType } from "../components/Tag/tag.types"
import {v4 as uuidv4} from 'uuid'
import { findTagsInStroke } from "./findTagsInStroke"

export const uniqueTagsInStroke = (noteText: string) => {

    const result = findTagsInStroke(noteText)

    if(result){
        let newTags: TagType[] = result.map(item => {
            return {id: uuidv4(), text: item}
        })

        return newTags
    }

    return []
}
