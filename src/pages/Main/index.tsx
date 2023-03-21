import React from 'react'
import { CreateForm } from '../../components/CreateForm'
import { Notes } from '../../components/Notes'
import { Search } from '../../components/Search'
import MyButton from '../../components/UI/MyButton'
import { useStore } from '../../store'
import styles from './Main.module.scss'

export const Main = () => {
  const { notesStore } = useStore()

  return (
    <div className={styles.window}>
      <div className={styles.tools}>
        <Search />
        <CreateForm />
        <MyButton onClick={() => notesStore.removeAll()}>Delete all notes</MyButton>
      </div>
      <div className={styles.notes}>
        <Notes />
      </div>
    </div>
  )
}
