import { observer } from 'mobx-react-lite'
import React, { ChangeEvent } from 'react'
import HighlightWithinTextarea from 'react-highlight-within-textarea'
import { useStore } from '../../store'
import { template } from '../../utils/findTagsInStroke'
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
    setAddTagArea(false)

    if (!tagInput.includes('#') || tagInput.length < 2 || tagInput.includes(' ')) {
      setTagInput('')
      return
    }

    notesStore.addTagToNote(tagInput, id)
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
          {!showEditArea ? (
            <>
              <MyButton onClick={() => setShowEditArea(true)}>Edit</MyButton>
              <MyButton onClick={() => removeNoteFromList(id)}>X</MyButton>
            </>
          ) : (
            <>
              <MyButton onClick={() => editNote()}>Save</MyButton>
              <MyButton onClick={() => setShowEditArea(false)}>Cancel</MyButton>
            </>
          )}
        </div>
      </div>

      <div className={styles.tags}>
        {!addTagArea ? (
          <div className={styles.list}>
            {tags.map((tag, index) => (
              <Tag key={index} id={tag.id} text={tag.text} noteId={id} />
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
        </div>
      </div>
    </div>
  )
})
