import React from 'react'

export default function Check(props) {
    // Check button component
    // Also acts as the reset button component & display score after initial checking of answers
    return (
        <div>
            {props.checkScreen ? 
                <h3 className="final-score">You scored {props.correctCount}/{props.questionCount} correct answers
                    <button className="check-button" onClick={props.handleReset}>Play again</button> 
                </h3>:
                <button className="check-button" onClick={props.handleCheck}>Check answers</button>    
            }
        </div>
    )
}