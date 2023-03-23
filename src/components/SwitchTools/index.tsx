import React from 'react'
import MyButton from '../UI/MyButton'
import { ISwitchTools } from './switchTools.types'

const SwitchTools: React.FC<ISwitchTools> = ({saveCallBack, showSetter, show, removeCallBack, id}) => {
  if(show){
    return (
        <>
            <MyButton onClick={() => saveCallBack()}>Save</MyButton>
            <MyButton onClick={() => showSetter(false)}>Cancel</MyButton>
        </>
    )
  }


  return (
        <>
            <MyButton onClick={() => showSetter(true)}>Edit</MyButton>
            <MyButton onClick={() => removeCallBack(id)}>X</MyButton>
        </>
    )
}

export default SwitchTools