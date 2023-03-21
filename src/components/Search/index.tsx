import React, { ChangeEvent } from 'react'
import { useStore } from '../../store'
import { MyInput } from '../UI/MyInput'

import styles from './Search.module.scss'

export const Search: React.FC = () => {
  const {notesStore} = useStore()
  const [searchValue, setSearchValue] = React.useState(notesStore.searchValue)

  const clearSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    setSearchValue('')
    
    notesStore.setSearchValue('')
  }

  const onSearchChange = (value: string) => {

    setSearchValue(value)
    notesStore.setSearchValue(value)
    
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Search:</label>
      <input type="text" 
             value={searchValue} 
             placeholder='Search by tag...' 
             className={styles.search}
             onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
      />
      <div className={styles.cross} onClick={(e)=> clearSearch(e)}/>
    </div>
    
  )
}
