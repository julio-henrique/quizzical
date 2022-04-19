import { useState } from 'react'
import { QuestionPage } from '../QuestionPage'

export const Organizer = () => {
    const [showAnswers, setShowAnswers] = useState(false)

    return (
        <>
            {
                showAnswers 
                ? <h1> UwU '-' \o </h1> 
                : <QuestionPage  />  
            }
        </>
    )
}