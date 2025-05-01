// SubjectQuiz1Test2.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Which organ purifies our blood?",
        options: ["Heart", "Liver", "Kidney", "Lungs"],
        correctAnswer: "Kidney",
    },
];

function SubjectQuiz1Test2() {
    const [currentQn, setCurrentQn] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [skippedCount, setSkippedCount] = useState(0);

    const handleOptionClick = (option) => {
        setSelected(option);
    };

    const handleNext = () => {
        if (selected === null) return;
        if (selected === questions[currentQn].correctAnswer) {
            setScore(score + 1);
        }
        goToNextQuestion();
    };

    const handleSkip = () => {
        setSkippedCount(skippedCount + 1);
        goToNextQuestion();
    };

    const goToNextQuestion = () => {
        if (currentQn + 1 < questions.length) {
            setCurrentQn(currentQn + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    };

    const getCompliment = () => {
        const percent = (score / questions.length) * 100;
        if (percent === 100) return "🌟 Perfect! You're a star!";
        if (percent >= 80) return "🎉 Great job! You're doing amazing!";
        if (percent >= 50) return "👍 Good effort! Keep practicing!";
        return "📚 Don't worry, try again and you'll get better!";
    };

    // 👇 this sets the button label based on position and selection
    const getButtonLabel = () => {
        if (currentQn === questions.length - 1 && selected !== null) {
            return "Submit";
        }
        return "Next";
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                    <h2 className="quiz-question">
                        {currentQn + 1}. {questions[currentQn].question}
                    </h2>
                    <div className="quiz-options">
                        {questions[currentQn].options.map((opt, idx) => (
                            <div
                                key={idx}
                                className={`quiz-option ${selected === opt ? "selected" : ""}`}
                                onClick={() => handleOptionClick(opt)}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                    <div className="button-group">
                        <button
                            className="next-button"
                            onClick={handleNext}
                            disabled={selected === null}
                        >
                            {getButtonLabel()}
                        </button>
                        <button className="skip-button" onClick={handleSkip}>
                            Skip
                        </button>
                    </div>
                </>
            ) : (
                <div className="quiz-result">
                    <h2>🎯 Quiz Completed!</h2>
                    <p>Total Questions: {questions.length}</p>
                    <p>Correct Answers: {score}</p>
                    <p>Incorrect Answers: {questions.length - score - skippedCount}</p>
                    <p>Skipped Questions: {skippedCount}</p>
                    <p>Total Marks: {score} / {questions.length}</p>
                    <p className="compliment">{getCompliment()}</p>
                </div>
            )}
        </div>
    );
}

export default SubjectQuiz1Test2;

