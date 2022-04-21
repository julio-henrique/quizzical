import { useEffect, useState } from 'react'
import { StartPage } from './components/StartPage'
import { QuestionPage } from './components/QuestionPage'

import './App.css'
// const url = "https://opentdb.com/api.php?amount=5&type=multiple"

function App() {
  const [startPageState, setStartPageState] = useState(true)
  const [questionsData, setQuestionsData] = useState([])
  
  function startPageToFalse() {
    setStartPageState(prev => !prev)
  }
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=31&type=multiple&encode=base64')
    // https://opentdb.com/api.php?amount=5&category=31
      .then(res => res.json())
      .then(data => setQuestionsData(data.results))
  }, [])
  
  console.log(questionsData)

  return (
    <>
      {
        startPageState
          ? <StartPage pageToFalse={startPageToFalse} />
          : <QuestionPage questionsData={questionsData} />
      }
    </>
  )
}

export default App
