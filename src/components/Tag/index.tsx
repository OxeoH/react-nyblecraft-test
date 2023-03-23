import React from 'react'
import { ITagProps } from './tag.types'
import styles from './Tag.module.scss'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

const Tag: React.FC<ITagProps> = ({ id, text, noteId }) => {
  const { notesStore } = useStore()
  return (
    <span onDoubleClick={() => notesStore.deleteTag(id, noteId)} className={styles.tag}>
      {text}
    </span>
  )
}
export default observer(Tag)
