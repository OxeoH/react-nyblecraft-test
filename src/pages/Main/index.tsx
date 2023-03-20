import React from 'react'
import { CreateForm } from '../../components/CreateForm'
import { Notes } from '../../components/Notes'
import { Search } from '../../components/Search'

import styles from './Main.module.scss'

export const Main = () => {
  return (
    <div className={styles.window}>
        <div className={styles.tools}>
            <Search/>
            <CreateForm/>
        </div>
        <div className={styles.notes}>
            <Notes/>
        </div>
    </div>
  )
}