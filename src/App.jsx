import { useState } from 'react'
import { StartPage } from './components/StartPage'
import { QuestionPage } from './components/QuestionPage'

import './App.css'

function App() {
  const [startPageState, setStartPageState] = useState(true)

  function startPageToFalse() {
    setStartPageState(prev => !prev)
  }

  return (
    <>
      {
        startPageState
          ? <StartPage pageToFalse={startPageToFalse} />
          : <QuestionPage />
      }
    </>
  )
}

export default App
