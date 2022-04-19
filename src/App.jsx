import { useState } from 'react'
import { StartPage } from './components/StartPage'
import { Organizer } from './components/Organizer'

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
          : <Organizer />
      }
    </>
  )
}

export default App
