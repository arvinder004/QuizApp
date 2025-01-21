import React, { useState } from 'react'
import Button from './ui/Button';

const HistoryQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(String || null)
    const [disabled, setDisabled] = useState(false)

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
        setDisabled(true)


        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
    }

    const nextQuestion = () => {
        setDisabled(false)
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

    if (currentQuestion >= questions.length) {
        return (
            <>
                <div className='flex flex-col items-center justify-center min-h-screen w-100 bg-emerald-500'>
                    <p className='text-8xl my-12'>Your Final Score: {score} out of {questions.length}</p>
                    <div>
                        <Button onClick={resetQuiz} className={'text-8xl bg-red-600 text-white outline-none hover:bg-red-100 hover:text-black'}>
                            Try Again
                        </Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='flex flex-col items-center min-h-screen w-100 bg-emerald-500'>
                <p className='text-8xl font-bold my-5'>Quiz</p>
                <p className='text-4xl font-semibold my-10'>Question {currentQuestion + 1} of {questions.length}</p>
                <p className='text-2xl mt-5'>Score : {score}</p>

                <div className='border rounded-xl bg-emerald-300 p-10 mt-12 mx-12 flex flex-col items-center'>
                    <h2 className='text-center text-3xl mb-3'>{questions[currentQuestion].question}</h2>
                    <div>
                        {questions[currentQuestion].options.map((option) => (
                            <Button
                                key={option}
                                onClick={() => handleAnswer(option)}
                                className={`bg-red-400 hover:bg-red-200`}
                                Disabled={disabled}
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
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                    {showExplanation && (
                        <div>
                            <p>
                                {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                                    <>
                                        <div className='text-4xl text-red-700'>
                                            CORRECT
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='text-4xl text-red-700'>
                                            INCORRECT
                                        </div>
                                    </>
                                )}
                            </p>
                            <p className='text-2xl my-6'>{questions[currentQuestion].explanation}</p>
                            <Button onClick={nextQuestion} className={'bg-red-600 text-white outline-none text-xl'}>
                                Next Question
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default HistoryQuiz