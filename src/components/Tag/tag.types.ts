export type TagType = {
  id: string
  text: string
}

export interface ITagProps extends TagType{
  noteId: string
}
