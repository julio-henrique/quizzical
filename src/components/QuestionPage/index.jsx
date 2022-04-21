import { nanoid } from 'nanoid'

export function QuestionPage({ questionsData }) {
    const showQuestions = questionsData.map((item, index) => {
        const { question, incorrect_answers, correct_answer } = item

        const id = nanoid()

        // The API is encoded, base64, here I'm decoding.
        function b64_to_utf8( str ) {
            return decodeURIComponent((window.atob( str )));
        }

        return (
            <>
            <div key={id}>
                <h2 className="">{b64_to_utf8(question)}</h2>
                    <div className="answers--section" >
                    <p className="answers" >{b64_to_utf8(incorrect_answers[2])}</p>
                    <p className="answers" >{b64_to_utf8(incorrect_answers[0])}</p>
                    <p className="answers" >{b64_to_utf8(incorrect_answers[1])}</p>
                    <p className="answers" >{b64_to_utf8(correct_answer)}</p>
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

            {
                true 
                    ? <button>Check answers</button> 
                    : <button>Play Again</button>
            }
        </section>
        
    )
}