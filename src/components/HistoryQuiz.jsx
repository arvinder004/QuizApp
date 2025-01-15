import React, { useState } from 'react'

const HistoryQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState (String || null)

    const questions = [
        {
            question: "In which year was the Declaration of Independence signed?",
            options: ["1774", "1775", "1776", "1777"],
            correctAnswer: "1776",
            explanation: "The Declaration of Independence was signed on July 4, 1776, marking the formal separation of the 13 American colonies from Great Britain."
        },
        {
            question: "Who was the first President of the United States?",
            options: ["John Adams", "Thomas Jefferson", "Benjamin Franklin", "George Washington"],
            correctAnswer: "George Washington",
            explanation: "George Washington served as the first President from 1789 to 1797 and is often called the 'Father of His Country'."
        },
        {
            question: "Which war was fought between the North and the South United States?",
            options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
            correctAnswer: "Civil War",
            explanation: "The Civil War (1861-1865) was fought between the Union (North) and the Confederacy (South) primarily over slavery and states' rights."
        },
        {
            question: "What was the name of the first successful English settlement in America?",
            options: ["Plymouth", "Jamestown", "Roanoke", "Massachusetts Bay"],
            correctAnswer: "Jamestown",
            explanation: "Jamestown, founded in 1607 in Virginia, was the first permanent English settlement in North America."
        },
        {
            question: "Which amendment to the Constitution abolished slavery?",
            options: ["13th", "14th", "15th", "16th"],
            correctAnswer: "13th",
            explanation: "The 13th Amendment, ratified in 1865, abolished slavery and involuntary servitude throughout the United States."
        }
    ]

    const handleAnswer = (selectedOption) => {
        setSelectedAnswer(selectedOption)
        setShowExplanation(true)

        if(selectedOption === questions[currentQuestion].correctAnswer){
            setScore(score + 1)
        }
    }

    const nextQuestion = () => {
        setSelectedAnswer(null)
        setShowExplanation(false)
        setCurrentQuestion(currentQuestion + 1)
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowExplanation(false)
        setSelectedAnswer(null)
    }

    if(currentQuestion >= questions.length){
        return(
            <>
            <p>Your Final Score: {score} out of {questions.length}</p>
            <div>
                <button onClick={resetQuiz}>
                    Try Again
                </button>
            </div>
            </>
        )
    }

    return (
        <>
            <p>Quiz</p>
            <p>Question {currentQuestion + 1} of {questions.length}</p>
            <p>{score}</p>
            
            <div>
                <h2>{questions[currentQuestion].question}</h2>
                <div>
                    {questions[currentQuestion].options.map((option)=>(
                        <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            variant={
                                showExplanation 
                                    ? option === questions[currentQuestion.correctAnswer]
                                        ? 'default'
                                        : option === selectedAnswer
                                        ? 'destructive'
                                        : 'outline'
                                    : 'outline'
                            }
                            disabled={showExplanation}
                            className='p-4 text-left'
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {showExplanation && (
                    <div>
                        <p>
                            {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                                <>
                                <div>
                                CORRECT
                                </div>
                                </>
                            ) : (
                                <>
                                <div>
                                    INCORRECT
                                </div>
                                </>
                            )}
                        </p>
                        <p>{questions[currentQuestion].explanation}</p>
                        <button onClick={nextQuestion}>
                            Next Question
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default HistoryQuiz