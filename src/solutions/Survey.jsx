import React from "react"
import Questions from "./SurveyQuestions"
import "../css/survey.css"

function Response() {
    const questions = Questions.map(quest => (
        <div className="survey-question" key={quest.id}>
            <label htmlFor={quest.id}>{quest.question}</label>
            <input type="text" id={quest.id} name={quest.id} placeholder={quest.placeholder} onChange={handleChange} />
        </div>
    ))
    const [response, setResponse] = React.useState({})

    function handleChange(event) {
        const {name, value} = event.target
        
        setResponse(prevResponse => (
            {...prevResponse, [name]:value}
        ))
    }
    return (
        <div className="survey-container">
            <h2>Real-Time Survey</h2>
            
            <form id="survey-form">
                {questions}
            </form>

            <div className="response-preview">
                <h3>Live Responses:</h3>
                <pre id="responseOutput">{JSON.stringify(response, null, 2)}</pre>
            </div>
        </div>
    )
}

export default Response