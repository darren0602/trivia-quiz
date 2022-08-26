import React from 'react'

export default function Result(props) {
    // The page that displays the results of the quiz after clicking the "Check" button.
    // Give chosen option green background
    // If chosen option is not correct, give correct option red background
    // The other remaining options stays the same
    const styles=[]
    for(let i = 0; i<props.answers.length; i++) {
        styles[i] = {
            background: props.chosen === props.answers[i] ?     // Chosen answer Option
                           "#94D7A2" :      // Green
                           props.correct === props.answers[i] ? // If chosen is wrong, highlight correct with Red
                           "#F8BCBC" :      // Red
                           "none"
        }
    }

    return (
        <div className="question-container">
            <h2 className='question'>{props.question}</h2>
            <div className="answer-section">
                <div className="answer-option" style={styles[0]}>
                    {props.answers[0]}
                </div>
                <div className="answer-option" style={styles[1]}>
                    {props.answers[1]}
                </div>
                <div className="answer-option" style={styles[2]}>
                    {props.answers[2]}
                </div>
                <div className="answer-option" style={styles[3]}>
                    {props.answers[3]}
                </div>
            </div>
            <hr />
        </div>
    )
}
