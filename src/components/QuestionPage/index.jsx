export function QuestionPage({ questionsData }) {
    const showQuestions = questionsData.map(item => {
        // const { question,  }
        /* 
        category: "Entertainment: Video Games"
correct_answer: "GLaDOS"
difficulty: "easy"
incorrect_answers: (3) ['Chell', 'Wheatley', 'Rick']
question: "Who is the main antagonist in the Portal franchise?"
        */
        return (
            <>
            <h2 className="" >How would one say goodbye in Spanish?</h2>
                <div className="answers--section" >
                <p className="answers answer--selected" >Adiós</p>
                <p className="answers" >Hola</p>
                <p className="answers" >Au Revoir</p>
                <p className="answers" >Salir</p>
                </div>
            </>
        )
    })
    console.log(questionsData)

    return (
        <section className="container">
            <div className="questions--card">
                <h2 className="" >How would one say goodbye in Spanish?</h2>
                <div className="answers--section" >
                    <p className="answers answer--selected" >Adiós</p>
                    <p className="answers" >Hola</p>
                    <p className="answers" >Au Revoir</p>
                    <p className="answers" >Salir</p>
                </div>
            </div>            
            <div className="separator" />
            <div className="questions--card">
                <h2 className="" >Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
                <div className="answers--section" >
                    <p className="answers" >Cabbage Patch Kids</p>
                    <p className="answers answer--wrong" >Transformers</p>
                    <p className="answers answer--right " >Care Bears</p>
                    <p className="answers" >Rubik’s Cube</p>
                </div>
            </div>
            
            <div className="separator" />

            {true ? <button>Check answers</button> : <button>Play Again</button>}
        </section>
        
    )
}