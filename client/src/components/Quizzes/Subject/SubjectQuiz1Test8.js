






// SubjectQuiz1Test4.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Who was the first Indian to win a Nobel Prize?",
        options: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
        answer: "Rabindranath Tagore"
    },
    {
        question: "Which river is known as the 'Sorrow of Bengal'?",
        options: ["Ganga", "Kosi", "Damodar", "Brahmaputra"],
        answer: "Damodar"
    },
    {
        question: "What is the name of India's longest dam?",
        options: ["Hirakud Dam", "Bhakra Nangal Dam", "Sardar Sarovar Dam", "Tehri Dam"],
        answer: "Hirakud Dam"
    },
    {
        question: "Who wrote the book 'Independence and After'?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Which Indian state has the largest forest cover?",
        options: ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Maharashtra"],
        answer: "Madhya Pradesh"
    },
    {
        question: "Which part of the plant is responsible for photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        answer: "Leaf"
    },
    {
        question: "Which Indian monument is called the 'Epitome of Love'?",
        options: ["Red Fort", "Taj Mahal", "Charminar", "Qutub Minar"],
        answer: "Taj Mahal"
    },
    {
        question: "Who is known as the 'Nightingale of India'?",
        options: ["Sarojini Naidu", "Lata Mangeshkar", "Indira Gandhi", "Rani Lakshmibai"],
        answer: "Sarojini Naidu"
    },
    {
        question: "Which metal is known as 'Quicksilver'?",
        options: ["Mercury", "Silver", "Platinum", "Iron"],
        answer: "Mercury"
    },
    {
        question: "What is the name of the Indian Parliament's lower house?",
        options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Gram Sabha"],
        answer: "Lok Sabha"
    },
    {
        question: "Which Mughal ruler introduced 'Din-i-Ilahi'?",
        options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        answer: "Akbar"
    },
    {
        question: "What is the national bird of India?",
        options: ["Peacock", "Eagle", "Kingfisher", "Parrot"],
        answer: "Peacock"
    },
    {
        question: "Who is regarded as the 'Father of Indian Constitution'?",
        options: ["B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        answer: "B.R. Ambedkar"
    },
    {
        question: "Which city is known as the 'Silicon Valley of India'?",
        options: ["Hyderabad", "Bangalore", "Chennai", "Pune"],
        answer: "Bangalore"
    },
    {
        question: "Which year did India achieve independence?",
        options: ["1945", "1946", "1947", "1950"],
        answer: "1947"
    },
    {
        question: "Which ancient text is an Indian treatise on statecraft and economy?",
        options: ["Vedas", "Arthashastra", "Upanishads", "Bhagavad Gita"],
        answer: "Arthashastra"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "Which Indian scientist invented the Raman Effect?",
        options: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
        answer: "C.V. Raman"
    },
    {
        question: "Who was the first President of India?",
        options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
        answer: "Dr. Rajendra Prasad"
    },
    {
        question: "What is the capital of Arunachal Pradesh?",
        options: ["Itanagar", "Guwahati", "Shillong", "Dispur"],
        answer: "Itanagar"
    },
    {
        question: "Which animal is featured on the emblem of the Indian Government?",
        options: ["Tiger", "Lion", "Elephant", "Peacock"],
        answer: "Lion"
    },
    {
        question: "Which Indian leader is known as the 'Iron Man of India'?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose"],
        answer: "Sardar Patel"
    },
    {
        question: "Which layer of the atmosphere contains the ozone layer?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
        answer: "Stratosphere"
    },
    {
        question: "Which city hosts the famous Rann Utsav festival?",
        options: ["Jaipur", "Kutch", "Udaipur", "Jodhpur"],
        answer: "Kutch"
    },
    {
        question: "Which temple is known as the 'Golden Temple'?",
        options: ["Meenakshi Temple", "Sri Harmandir Sahib", "Konark Temple", "Brihadeshwara Temple"],
        answer: "Sri Harmandir Sahib"
    },
    {
        question: "Which is the smallest state in India by area?",
        options: ["Sikkim", "Goa", "Tripura", "Nagaland"],
        answer: "Goa"
    },
    {
        question: "What is India's national tree?",
        options: ["Neem", "Peepal", "Banyan", "Mango"],
        answer: "Banyan"
    },
    {
        question: "What is the official language of Jammu and Kashmir?",
        options: ["Kashmiri", "Urdu", "Hindi", "English"],
        answer: "Urdu"
    },
    {
        question: "Which famous Indian monument is an example of Dravidian architecture?",
        options: ["Hampi", "Taj Mahal", "Qutub Minar", "Lotus Temple"],
        answer: "Hampi"
    }
];

function SubjectQuiz1Test5() {
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

export default SubjectQuiz1Test5;








