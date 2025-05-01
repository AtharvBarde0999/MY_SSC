// TopicQuiz1Test1.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Jupiter",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Australia", "Africa", "Europe"],
        correctAnswer: "Africa",
    },
    {
        question: "Which gas is most abundant in Earth’s atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "Who is the author of 'Wings of Fire'?",
        options: ["A.P.J. Abdul Kalam", "Chetan Bhagat", "R.K. Narayan", "Kiran Bedi"],
        correctAnswer: "A.P.J. Abdul Kalam",
    },
];

function TopicQuiz1Test3() {
    const [currentQn, setCurrentQn] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [skippedCount, setSkippedCount] = useState(0);

    const handleOptionClick = (option) => {
        setSelected(option);
    };

    const handleNext = () => {
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
export default TopicQuiz1Test3;


