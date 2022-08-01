Trivia quiz app made from React.

The app utilizes the Open Trivia Database which provides 
a completely free JSON API for use in programming projects.
Randomly generate 5 questions of different topics in easy difficulty.

Created by: Darren Teoh

Bugs:
1.  When playing again, prev questions would sometimes be displayed for a moment before updating new questions.
    Possibly due to loading time in fetching new API in each new run.
->  Set a new 'loading' state to know when API is successfully fetched. [SOLVED]