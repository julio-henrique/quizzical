import { useEffect, useState } from 'react'
import { StartPage } from './components/StartPage'
import { QuestionPage } from './components/QuestionPage'

import { nanoid } from 'nanoid'

import './App.css'
// const url = "https://opentdb.com/api.php?amount=5&type=multiple"

function App() {
  const [startPageState, setStartPageState] = useState(true)
  const [apiData, setApiData] = useState([])
  
  function startPageToFalse() {
    setStartPageState(prev => !prev)
  }

  // The API is encoded, base64, here I'm decoding.
  function b64_to_utf8( str ) {
    return decodeURIComponent((window.atob( str )));
  }
  fetch('https://opentdb.com/api.php?amount=5&category=31&type=multiple&encode=base64')
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=31&type=multiple&encode=base64')
    .then(res => res.json())
      .then(data => {
        setApiData(() => {
          let newArray = []

          for (let i = 0; i < data.results.length; i++) {
            newArray.push({
              id: nanoid(),
              question: b64_to_utf8(data.results[i].question),
              correct_answer: b64_to_utf8(data.results[i].correct_answer),
              
              alternatives: [
                ...data.results[i].incorrect_answers.map(incorrect => b64_to_utf8(incorrect)),
                b64_to_utf8(data.results[i].correct_answer)
              ].sort(() => Math.random() - 0.5),
              
              select_answer: '',
              isCorrect: false
            })
          }

          return newArray
        })
      })
  }, []) 

  // console.log(apiData) 

  return (
    <>
      {
        startPageState
          ? <StartPage pageToFalse={startPageToFalse} />
          : <QuestionPage apiData={apiData} />
      }
    </>
  )
}

export default App
