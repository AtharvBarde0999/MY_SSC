

// SubjectQuiz1Test2.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Who was the founder of the Chola dynasty?",
        options: ["Vijayalaya", "Rajaraja I", "Karikala", "Aditya I"],
        answer: "Vijayalaya"
    },
    {
        question: "Which Gupta ruler is known as the 'Napoleon of India'?",
        options: ["Chandragupta I", "Samudragupta", "Skandagupta", "Chandragupta II"],
        answer: "Samudragupta"
    },
    {
        question: "What is the SI unit of luminous intensity?",
        options: ["Candela", "Lumen", "Lux", "Watt"],
        answer: "Candela"
    },
    {
        question: "Which Article of the Indian Constitution deals with the abolition of untouchability?",
        options: ["Article 15", "Article 17", "Article 19", "Article 21"],
        answer: "Article 17"
    },
    {
        question: "Who discovered the neutron?",
        options: ["J.J. Thomson", "James Chadwick", "Ernest Rutherford", "Niels Bohr"],
        answer: "James Chadwick"
    },
    {
        question: "Which is the oldest mountain range in India?",
        options: ["Himalayas", "Aravalli Range", "Vindhya Range", "Satpura Range"],
        answer: "Aravalli Range"
    },
    {
        question: "Who was the first Indian Governor-General of independent India?",
        options: ["C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
        answer: "C. Rajagopalachari"
    },
    {
        question: "Which is the largest gland in the human body?",
        options: ["Pancreas", "Liver", "Thyroid", "Adrenal"],
        answer: "Liver"
    },
    {
        question: "Who was the first woman to preside over the Indian National Congress?",
        options: ["Annie Besant", "Sarojini Naidu", "Vijaya Lakshmi Pandit", "Indira Gandhi"],
        answer: "Annie Besant"
    },
    {
        question: "Which Mughal emperor introduced the Mansabdari system?",
        options: ["Akbar", "Babur", "Humayun", "Jahangir"],
        answer: "Akbar"
    },
    {
        question: "What is the chemical name of baking soda?",
        options: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate", "Potassium Carbonate"],
        answer: "Sodium Bicarbonate"
    },
    {
        question: "Who was the first Indian to win an Oscar?",
        options: ["Bhanu Athaiya", "Satyajit Ray", "A.R. Rahman", "Resul Pookutty"],
        answer: "Bhanu Athaiya"
    },
    {
        question: "Which river is known as the 'Dakshina Ganga'?",
        options: ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
        answer: "Godavari"
    },
    {
        question: "Who is known as the 'Saint of the Gutters'?",
        options: ["Mother Teresa", "Florence Nightingale", "Sarojini Naidu", "Annie Besant"],
        answer: "Mother Teresa"
    },
    {
        question: "Which is the hardest natural substance on Earth?",
        options: ["Graphite", "Diamond", "Quartz", "Corundum"],
        answer: "Diamond"
    },
    {
        question: "Who was the first Indian to go to space?",
        options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Vikram Sarabhai"],
        answer: "Rakesh Sharma"
    },
    {
        question: "Which is the largest coral reef system in the world?",
        options: ["Great Barrier Reef", "Red Sea Coral Reef", "New Caledonia Barrier Reef", "Mesoamerican Barrier Reef"],
        answer: "Great Barrier Reef"
    },
    {
        question: "Who is known as the 'Father of Economics'?",
        options: ["Adam Smith", "John Maynard Keynes", "Karl Marx", "David Ricardo"],
        answer: "Adam Smith"
    },
    {
        question: "Which Indian state has the highest literacy rate?",
        options: ["Kerala", "Tamil Nadu", "Himachal Pradesh", "Goa"],
        answer: "Kerala"
    },
    {
        question: "What is the full form of DNA?",
        options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Dioxyribonucleic Acid", "Dioxyribose Nucleic Acid"],
        answer: "Deoxyribonucleic Acid"
    },
    {
        question: "Who was the first Indian to receive the Bharat Ratna?",
        options: ["Dr. Sarvepalli Radhakrishnan", "C.V. Raman", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        answer: "C.V. Raman"
    },
    {
        question: "Which is the largest freshwater lake in the world?",
        options: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Caspian Sea"],
        answer: "Lake Superior"
    },
    {
        question: "Who is known as the 'Father of the Green Revolution in India'?",
        options: ["M.S. Swaminathan", "Norman Borlaug", "Verghese Kurien", "C. Subramaniam"],
        answer: "M.S. Swaminathan"
    },
    {
        question: "Which is the smallest planet in the solar system?",
        options: ["Mercury", "Venus", "Mars", "Pluto"],
        answer: "Mercury"
    },
    {
        question: "Who was the first woman Chief Minister of India?",
        options: ["Sucheta Kripalani", "Indira Gandhi", "Sarojini Naidu", "Vijayalakshmi Pandit"],
        answer: "Sucheta Kripalani"
    },
    {
        question: "Which is the largest delta in the world?",
        options: ["Ganges-Brahmaputra Delta", "Amazon Delta", "Mekong Delta", "Mississippi Delta"],
        answer: "Ganges-Brahmaputra Delta"
    },
    {
        question: "Who is the author of 'Arthashastra'?",
        options: ["Kalidasa", "Chanakya", "Banabhatta", "Valmiki"],
        answer: "Chanakya"
    },
    {
        question: "Which is the national aquatic animal of India?",
        options: ["Gangetic Dolphin", "Olive Ridley Turtle", "Blue Whale", "Dugong"],
        answer: "Gangetic Dolphin"
    },
    {
        question: "Who was the first Indian to win the Booker Prize?",
        options: ["Arundhati Roy", "Salman Rushdie", "Kiran Desai", "V.S. Naipaul"],
        answer: "Arundhati Roy"
    },
    {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        answer: "Greenland"
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


















