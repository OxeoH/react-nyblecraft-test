import { observer } from 'mobx-react-lite'
import React from 'react'
import { Main } from './pages/Main'

const App: React.FC = observer(() => {
  return (
    <div className="App">
      <Main />
    </div>
  )
})

export default App
