import { TagType } from "../Tag/tag.types"

export type NoteType = {
    id: number,
    text: string,
    tags: TagType[]
}