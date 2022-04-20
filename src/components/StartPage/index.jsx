import './styles.css'

export const StartPage = (props) => {

    return (
        <section className="StartPage">
            <div className="startPageContainer">
                <h1>Quizzical</h1>
                <p>Teste os seus conhecimentos nesse incrível aplicativo</p>
                <button onClick={props.pageToFalse} >Começar quiz</button>
            </div>
        </section>
    )
}