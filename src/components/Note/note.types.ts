import { TagType } from '../Tag/tag.types'

export type NoteType = {
  id: string
  text: string
  tags: TagType[]
  index?: number
}
