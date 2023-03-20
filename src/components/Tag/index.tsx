import React from 'react'
import { TagType } from './tag.types'

const Tag: React.FC<TagType> = ({id, text}) => {
  return (
    <div>{text}</div>
  )
}

export default Tag