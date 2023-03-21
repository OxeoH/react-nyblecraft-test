import React from 'react'
import { TagType } from './tag.types'
import styles from './Tag.module.scss'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

interface ITagProps {
  id: string
  text: string
  noteId: string
}

const Tag: React.FC<ITagProps> = ({ id, text, noteId }) => {
  const { notesStore } = useStore()
  return (
    <span onDoubleClick={() => notesStore.deleteTag(id, noteId)} className={styles.tag}>
      {text}
    </span>
  )
}
export default observer(Tag)
