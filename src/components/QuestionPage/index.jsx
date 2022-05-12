export function QuestionPage({ quizQuestions }) {
    const showQuestions = quizQuestions.map((item, index) => {
        // Destructuring item
        const { question, alternatives, id  } = item
        
        // maping and showing the alternitves
        // const showAlternatives = alternatives.map((itemAlternatives, ) => {
        //     console.log(itemAlternatives)
        //     return (    
        //         <div key={itemAlternatives.id}
        //             className="answers" 
        //         >
        //             {itemAlternatives.answer}
        //         </div>
        //     )
        // })
        return (
            <>
            <div key={id} />
                <h2  >{question}</h2>
                    <div className="answers--section" >

                            {/* {showAlternatives} */}
                    </div>
                <div className="separator" />
            </>
        )
    })

    return (
        <section className="container">
            <div className="questions--card">
                {showQuestions}
            </div>

            {
                true
                    ? <button  >Check answers</button> 
                    : <button>Play Again</button>
            }
        </section>
        
    )
}