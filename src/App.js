import React from 'react'
import Blob from './components/Blob'
import Intro from './components/Intro'
import Question from './components/Question'
import Result from './components/Result'
import Check from "./components/Check"
import { nanoid } from 'nanoid'
import './style.css'

export default function App() {
    const [startScreen, setStartScreen] = React.useState(true)
    const [isLoading, setIsLoading] = React.useState(false)
    const [checkScreen, setCheckScreen] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [correctCount, setCorrectCount] = React.useState(0)
    const [APISettings, setAPISettings] = React.useState(
        {
            difficultySetting: '',
            categorySetting: '',
            questionNumber: '5'
        }
    )
    // console.log(quizData)

    function handleFetchAPI() {
        setIsLoading(true)
        // Make sure fetching api includes &encode=url3986 to be able to decode HTML entities
        fetch(`https://opentdb.com/api.php?amount=${APISettings.questionNumber}&difficulty=${APISettings.difficultySetting}&category=${APISettings.categorySetting}&type=multiple&encode=url3986`)
            .then(res => res.json())
            .then(data => setQuizData(
                            data.results.map((data, index) => {
                                const question = decodeURIComponent(data.question)
                                const correctAnswer = decodeURIComponent(data.correct_answer)
                                const correctAnswerArray = [correctAnswer]
                                const incorrectAnswers = data.incorrect_answers
                                const incorrectAnswersArray = incorrectAnswers.map(answer => decodeURIComponent(answer))
                                // Randomize the order of answers so that correct answer will not always be at 4th column.
                                const answerArray = incorrectAnswersArray.concat(correctAnswerArray)
                                let temp, random;
                                for(let i = 0; i < answerArray.length; i++) {
                                    temp = answerArray[i]
                                    random = Math.floor(Math.random()*3)
                                    answerArray[i] = answerArray[random]
                                    answerArray[random] = temp
                                }
                                
                                return {
                                        id: index,
                                        name: `Q${index}`,
                                        question: question,
                                        correct: correctAnswer,
                                        answers: answerArray,
                                        chosen: null,
                                        key: nanoid()
                                }
                            }))
                )
            .catch(error => console.log(error))
            .finally(()=>setIsLoading(false));
    }

    function handleSettings(event) {
        const {name, value} = event.target
        setAPISettings(prevAPISettings => {
            return {
                ...prevAPISettings,
                [name]: value
            }
        })
    }

    function startGame() {
        setStartScreen(false);
        handleFetchAPI();
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setQuizData(prevQuizData => prevQuizData.map(data => {
            return data.name === name ?     // Q0 === Q0 ?
            {...data, chosen: value}:
            data
        }))
    }

    function handleCheck() {
        for(let i = 0; i < quizData.length; i++){
            if (quizData[i].correct===quizData[i].chosen) {
                setCorrectCount(prevCorrectCount => prevCorrectCount+1)
            }
        }
        setCheckScreen(true)
    }

    function handleReset() {
        setStartScreen(true)
        setCheckScreen(false)
        setCorrectCount(0)
    }

    // Map data for question, correct answer & incorrect answers etc.
    const questionElements = quizData.map(data => (
        <Question 
            key={data.key}
            id={data.id}
            name={data.name}
            question={data.question}
            answers={data.answers}
            correct={data.correct}
            chosen={data.chosen}
            handleChange={handleChange}
            checkScreen={checkScreen}
        />
    ))

    const resultElements = quizData.map(data => (
        <Result
            key={data.key}
            question={data.question}
            answers={data.answers}
            correct={data.correct}
            chosen={data.chosen}
        />
    ))

    if (isLoading) {
        return (
            <>
                <Blob />
                <div className='loading-screen'>
                    <div className="loader"></div>
                </div> 
            </>
            )
    }

    return (
        <main>
            <Blob />
            
            {startScreen ? 
                <Intro startGame={startGame} handleSettings={handleSettings} APISettings={APISettings}/> :
                    checkScreen ? 
                        resultElements: 
                        questionElements
            }
            
            {!startScreen && <Check 
                                questionCount={quizData.length}
                                handleCheck={handleCheck} 
                                handleReset={handleReset}
                                checkScreen={checkScreen} 
                                correctCount={correctCount}
                            />}
            
        </main>
    )
}