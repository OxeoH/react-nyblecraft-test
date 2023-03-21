import React from 'react'
import { TagType } from './tag.types'
import styles from './Tag.module.scss'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

export const Tag: React.FC<any> = observer(({id, text, noteId}) => {//ToDo: type this by TagType
  const {notesStore} = useStore()
  return (
    <span onDoubleClick={() => notesStore.deleteTag(id, noteId)} className={styles.tag}>{text}</span>
  )
})