export function Question(props) {

    const correctAnswer = props.data.correct_answer
    const alternatives = props.data.answers

    const optionsAnswers = alternatives.map(answer =>
        <span key={answer} className={(correctAnswer == answer && props.playAgain) ? 'correctAnswer' : ''}>
            <input type="radio" disabled={props.playAgain ? true : false} checked={props.data.select_answer === answer} onChange={(e) => props.handleChange(e, correctAnswer, props.data.id)} value={answer} id={props.data.id + answer} name={props.data.id} />
            <label htmlFor={props.data.id + answer}>{answer}</label>
        </span>)

    return (
        <div className="questionDiv">
            <h2>{props.data.question}</h2>
            <div className={`questionSelect ${props.playAgain && "playAgain"}`}>
                {optionsAnswers}
            </div>
        </div>
    )
}