import React, { ChangeEvent } from 'react'
import { useStore } from '../../store'
import { MyInput } from '../UI/MyInput'

import styles from './Search.module.scss'

export const Search: React.FC = () => {
  const {notesStore} = useStore()

  const clearSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    notesStore.setSearchValue('')
  }

  const onSearchChange = (value: string) => {
    notesStore.setSearchValue(value)
    
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Search:</label>
      <input type="text" 
             //value={notesStore.searchValue} 
             placeholder='Search by tag...' 
             className={styles.search}
             onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
      />
      <div className={styles.cross} onClick={(e)=> clearSearch(e)}/>
    </div>
    
  )
}
