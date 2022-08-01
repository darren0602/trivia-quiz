import React from 'react'

export default function Question(props) {

    return (
        <div className="question-container">
            <h2 className='question'>{props.question}</h2>
            <div className="answer-section">
                <input 
                    type="radio"
                    name={props.name}   //Q0
                    id={`Q${props.id}A1`} 
                    value={props.answers[0]}
                    onChange={props.handleChange}
                />
                <label htmlFor={`Q${props.id}A1`}>{props.answers[0]}</label>
                <input 
                    type="radio" 
                    name={props.name} 
                    id={`Q${props.id}A2`} 
                    value={props.answers[1]}
                    onChange={props.handleChange}
                />
                <label htmlFor={`Q${props.id}A2`}>{props.answers[1]}</label>
                <input 
                    type="radio" 
                    name={props.name} 
                    id={`Q${props.id}A3`} 
                    value={props.answers[2]}
                    onChange={props.handleChange}
                />
                <label htmlFor={`Q${props.id}A3`}>{props.answers[2]}</label>
                <input 
                    type="radio" 
                    name={props.name} 
                    id={`Q${props.id}A4`} 
                    value={props.answers[3]}
                    onChange={props.handleChange}
                />
                <label htmlFor={`Q${props.id}A4`}>{props.answers[3]}</label>
            </div>
            <hr />
        </div>
    )
}