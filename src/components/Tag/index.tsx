import React from 'react'
import { TagType } from './tag.types'
import styles from './Tag.module.scss'

const Tag: React.FC<TagType> = ({id, text}) => {
  return (
    <span className={styles.tag}>{text}</span>
  )
}

export default Tag