export function QuestionPage({ questionsData }) {
    const showQuestions = questionsData.map((item, index) => {
        const { question, incorrect_answers, correct_answer } = item
    
        /* 
        category: "Entertainment: Video Games"
correct_answer: "GLaDOS"
difficulty: "easy"
incorrect_answers: (3) ['Chell', 'Wheatley', 'Rick']
question: "Who is the main antagonist in the Portal franchise?"
        */
        return (
            <>
            <div key={index}>
                <h2 className="">{question}</h2>
                    <div className="answers--section" >
                    <p className="answers answer--selected" >{incorrect_answers[2]}</p>
                    <p className="answers" >{incorrect_answers[0]}</p>
                    <p className="answers" >{incorrect_answers[1]}</p>
                    <p className="answers" >{correct_answer}</p>
                    </div>
                <div className="separator" />
            </div>

            </>
        )
    })
    console.log(questionsData)

    return (
        <section className="container">
            <div className="questions--card">
                {showQuestions}
            </div>

            {true ? <button>Check answers</button> : <button>Play Again</button>}
        </section>
        
    )
}