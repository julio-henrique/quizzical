import { nanoid } from 'nanoid'

export function QuestionPage({ apiData }) {

    const showQuestions = apiData.map((item) => {
        // Destructuring item
        const { question, alternatives, id  } = item
        
        
        // maping and showing the alternitves
        const showAlternatives = alternatives.map((itemAlternatives, ) => {
            
            // console.log(id)
            return (    
                <div 
                    className="answers" 
                >
                    {itemAlternatives}
                </div>
            )
        })

        return (
            <>
                <h2 key={id} >{question}</h2>
                    <div className="answers--section" >

                            {showAlternatives}
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