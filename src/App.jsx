import { useEffect, useState } from 'react'
import { StartPage } from './components/StartPage'
import { QuestionPage } from './components/QuestionPage'

import { nanoid } from 'nanoid'

import './App.css'

function App() {
  const [startPageState, setStartPageState] = useState(true)
  const [quizQuestions, setQuizQuestions] = useState([])


  
  function startPageToFalse() {
    setStartPageState(prev => !prev)
  }

  // The API is encoded in base64, here I'm decoding.
  function b64_to_utf8( str ) {
    return decodeURIComponent((window.atob( str )));
  }  

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=31&type=multiple')
      .then(res => res.json())
      .then(data => setQuizQuestions(data.results))
  }, []) 

console.log(quizQuestions)
  return (
    <>
      {
        startPageState ?
          <StartPage />
          : <QuestionPage quizQuestions={quizQuestions} />
      }
    </>
  )
}

export default App
