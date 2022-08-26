import React from 'react'

export default function Intro(props) {
    // Intro page with start button
    // The start button also functions as the API call to get 
    // newly generated questions, depending on desired 
    // question settings (i.e. number of questions, difficulty & category)
    return (
        <div className="intro">
            <h1 className="intro-title">Quizzical</h1>
            <p className="intro-description">Trivia Quiz</p>
            <div className="API-settings">
                <div className="API-setting">
                    <label htmlFor='questionNumber'>No. of Questions:</label>
                    <br/>
                    <input
                        id="questionNumber" 
                        name="questionNumber" 
                        type="number"
                        min="1"
                        max="50"
                        step="1"
                        placeholder='5'
                        value={props.APISettings.questionNumber} 
                        onChange={props.handleSettings}
                    /> 
                </div>
                <div className="API-setting">
                    <label htmlFor='difficultySetting'>Select difficulty:</label>
                    <br/>
                    <select 
                        id="difficultySetting" 
                        name="difficultySetting" 
                        value={props.APISettings.difficultySetting} 
                        onChange={props.handleSettings}
                    > 
                        <option value=''>Any Difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>
                <div className="API-setting">
                    <label htmlFor='categorySetting'>Select category:</label>
                    <br/>
                    <select 
                        id="categorySetting" 
                        name="categorySetting" 
                        value={props.APISettings.categorySetting} 
                        onChange={props.handleSettings}
                    > 
                        <option value=''>Any Category</option>
                        <option value='9'>General Knowledge</option>
                        <option value='10'>Entertainment: Books</option>
                        <option value='29'>Entertainment: Comics</option>
                        <option value='31'>Entertainment: Japanese Anime &amp; Manga</option>
                        <option value='32'>Entertainment: Cartoon &amp; Animations</option>
                        <option value='11'>Entertainment: Film</option>
                        <option value='12'>Entertainment: Music</option>
                        <option value='13'>Entertainment: Musicals &amp; Theatres</option>
                        <option value='14'>Entertainment: Television</option>
                        <option value='15'>Entertainment: Video Games</option>
                        <option value='16'>Entertainment: Board Games</option>
                        <option value='17'>Science &amp; Nature</option>
                        <option value='18'>Science: Computers</option>
                        <option value='30'>Science: Gadgets</option>
                        <option value='19'>Science: Mathematics</option>
                        <option value='20'>Mythology</option>
                        <option value='21'>Sports</option>
                        <option value='22'>Geography</option>
                        <option value='23'>History</option>
                        <option value='24'>Politics</option>
                        <option value='25'>Art</option>
                        <option value='26'>Celebrities</option>
                        <option value='27'>Animals</option>
                        <option value='28'>Vehicles</option>
                    </select>
                </div>
            </div>
            <button onClick={props.startGame} className='intro-button'>Start Quiz</button>
        </div>
    )
}