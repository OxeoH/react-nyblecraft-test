import { observer } from 'mobx-react-lite'
import React, { ChangeEvent } from 'react'
import { useStore } from '../../store'
import useDebounce from '../../utils/hooks/useDebounce'
import { MyInput } from '../UI/MyInput'

import styles from './Search.module.scss'

export const Search: React.FC = observer(() => {
  const { notesStore } = useStore()
  const [value, setValue] = React.useState(notesStore.searchValue);

  const clearSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    notesStore.setSearchValue('')
    setValue('')
  }

  const debouncedValue = useDebounce<string>(value, 500)

  React.useEffect(() => {
    notesStore.setSearchValue(value)
  }, [debouncedValue])

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Search:</label>
      <input
        type="text"
        value={value}
        placeholder="Search by tag..."
        className={styles.search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <div className={styles.cross} onClick={e => clearSearch(e)} />
    </div>
  )
})
