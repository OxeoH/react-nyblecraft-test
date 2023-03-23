import { observer } from 'mobx-react-lite'
import React, { ChangeEvent } from 'react'
import HighlightWithinTextarea from 'react-highlight-within-textarea'
import { useStore } from '../../store'
import { template } from '../../utils/findTagsInStroke'
import SwitchTools from '../SwitchTools'
import Tag from '../Tag'
import MyButton from '../UI/MyButton'
import styles from './Note.module.scss'
import { NoteType } from './note.types'

export const Note: React.FC<NoteType> = observer(({ index, id, text, tags }) => {
  const { notesStore } = useStore()

  const [showEditArea, setShowEditArea] = React.useState(false)
  const [addTagArea, setAddTagArea] = React.useState(false)

  const [noteText, setNoteText] = React.useState(text)
  const [tagInput, setTagInput] = React.useState('')

  const [showWarning, setShowWarning] = React.useState(false)

  const onChange = (value: string) => setNoteText(value)

  const removeNoteFromList = (id: string) => {
    notesStore.deleteNote(id)
  }

  const editNote = () => {
    setShowEditArea(false)

    if (noteText.length) {
      notesStore.editNote(id, noteText)
    }
  }

  const addTagToNote = () => {
    if(!tagInput.includes('#') || tagInput.length < 2 || tagInput.includes(' ')){
      setShowWarning(true)
      setTimeout(() => {
        setShowWarning(false)
      }, 1500)
      return
    }
    notesStore.addTagToNote(tagInput, id)
    setAddTagArea(false)
    setTagInput('')
  }

  const counter = notesStore.getCounter(id)

  return (
    <div className={styles.wrapper}>
      <div className={styles.note}>
        {showEditArea ? (
          <div className={styles.edit}>
            <HighlightWithinTextarea value={noteText} onChange={onChange} highlight={template} />
          </div>
        ) : (
          <div className={styles.text}>
            <strong>{counter + 1}. </strong>
            {text}
          </div>
        )}

        <div className={styles.buttons}>
          <SwitchTools 
            saveCallBack={editNote} 
            showSetter={setShowEditArea} 
            show={showEditArea} 
            removeCallBack={removeNoteFromList} 
            id={id}
          />
        </div>
      </div>

      <div className={styles.tags}>
        {!addTagArea ? (
          <div className={styles.list}>
            {tags.map((tag) => (
              <Tag key={tag.id} id={tag.id} text={tag.text} noteId={id} />
            ))}
          </div>
        ) : (
          <input
            placeholder="Use # symbol to add new tag"
            className={styles.edit}
            value={tagInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setTagInput(event.target.value)}
          ></input>
        )}

        <div className={styles.buttons}>
          {!addTagArea ? (
            <MyButton onClick={() => setAddTagArea(true)}>Add</MyButton>
          ) : (
            <>
              <MyButton onClick={() => addTagToNote()}>Save</MyButton>
              <MyButton onClick={() => setAddTagArea(false)}>Cancel</MyButton>
            </>
          )}
          {!!showWarning && 
            <label className={styles.warning}>Tag length can't be equal 0. Should include '#'</label>
          }
        </div>
      </div>
    </div>
  )
})
