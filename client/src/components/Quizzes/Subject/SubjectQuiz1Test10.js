






// SubjectQuiz1Test4.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Who was the founder of the Maurya Empire?",
        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Kanishka"],
        answer: "Chandragupta Maurya"
    },
    {
        question: "Which battle marked the beginning of Mughal rule in India?",
        options: ["Battle of Plassey", "Battle of Panipat", "Battle of Haldighati", "Battle of Talikota"],
        answer: "Battle of Panipat"
    },
    {
        question: "Who composed the national song 'Vande Mataram'?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subhas Chandra Bose", "Mahatma Gandhi"],
        answer: "Bankim Chandra Chatterjee"
    },
    {
        question: "Which Gupta ruler adopted the title 'Vikramaditya'?",
        options: ["Samudragupta", "Chandragupta I", "Chandragupta II", "Skandagupta"],
        answer: "Chandragupta II"
    },
    {
        question: "During which movement did Mahatma Gandhi give the call for 'Quit India'?",
        options: ["Dandi March", "Civil Disobedience Movement", "Quit India Movement", "Non-Cooperation Movement"],
        answer: "Quit India Movement"
    },
    {
        question: "Who is known as the 'Father of Indian Renaissance'?",
        options: ["Bal Gangadhar Tilak", "Raja Ram Mohan Roy", "Swami Vivekananda", "Rabindranath Tagore"],
        answer: "Raja Ram Mohan Roy"
    },
    {
        question: "Which treaty ended the First Carnatic War?",
        options: ["Treaty of Salbai", "Treaty of Paris", "Treaty of Madras", "Treaty of Aix-la-Chapelle"],
        answer: "Treaty of Aix-la-Chapelle"
    },
    {
        question: "In which year was the Jallianwala Bagh massacre carried out?",
        options: ["1919", "1920", "1930", "1942"],
        answer: "1919"
    },
    {
        question: "Who was the last ruler of the Mughal Empire?",
        options: ["Bahadur Shah Zafar", "Aurangzeb", "Shah Jahan", "Akbar II"],
        answer: "Bahadur Shah Zafar"
    },
    {
        question: "Who founded the Arya Samaj?",
        options: ["Swami Dayananda Saraswati", "Swami Vivekananda", "Raja Ram Mohan Roy", "Mahatma Gandhi"],
        answer: "Swami Dayananda Saraswati"
    },
    {
        question: "Which dynasty built the Brihadeshwara Temple in Tamil Nadu?",
        options: ["Chola", "Pandya", "Cheras", "Maurya"],
        answer: "Chola"
    },
    {
        question: "Who was the first woman ruler of India?",
        options: ["Rani Lakshmibai", "Indira Gandhi", "Razia Sultana", "Sarojini Naidu"],
        answer: "Razia Sultana"
    },
    {
        question: "Which Indian leader is associated with the Home Rule Movement?",
        options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        answer: "Bal Gangadhar Tilak"
    },
    {
        question: "Which dynasty built the famous Sun Temple at Konark?",
        options: ["Maurya", "Gupta", "Chola", "Ganga"],
        answer: "Ganga"
    },
    {
        question: "Who was the first governor-general of independent India?",
        options: ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Dr. Rajendra Prasad"],
        answer: "Lord Mountbatten"
    },
    {
        question: "Who among the following was the ruler during the Kalinga War?",
        options: ["Bindusara", "Ashoka", "Chandragupta Maurya", "Rudradaman"],
        answer: "Ashoka"
    },
    {
        question: "Who was the founder of the Mughal Empire?",
        options: ["Babur", "Akbar", "Humayun", "Shah Jahan"],
        answer: "Babur"
    },
    {
        question: "Which movement was started by the British against Indians in 1905?",
        options: ["Partition of Bengal", "Swadeshi Movement", "Quit India Movement", "Civil Disobedience Movement"],
        answer: "Partition of Bengal"
    },
    {
        question: "Who founded the Brahmo Samaj?",
        options: ["Raja Ram Mohan Roy", "Swami Dayananda Saraswati", "Jyotiba Phule", "Bal Gangadhar Tilak"],
        answer: "Raja Ram Mohan Roy"
    },
    {
        question: "What was the primary goal of the Dandi March?",
        options: ["Civil Rights", "Oppose the Salt Tax", "Demand Independence", "Protest Against Rowlatt Act"],
        answer: "Oppose the Salt Tax"
    },
    {
        question: "Who wrote the book 'Discovery of India'?",
        options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Rabindranath Tagore", "Bal Gangadhar Tilak"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Which Mughal Emperor built the Jama Masjid in Delhi?",
        options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        answer: "Shah Jahan"
    },
    {
        question: "During which period did the Gupta Empire flourish?",
        options: ["200-300 AD", "300-500 AD", "400-600 AD", "500-700 AD"],
        answer: "300-500 AD"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Who started the 'Civil Disobedience Movement'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Bhagat Singh"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which Indian king defeated Alexander the Great?",
        options: ["Porus", "Bindusara", "Chandragupta Maurya", "Samudragupta"],
        answer: "Porus"
    },
    {
        question: "Who was the ruler during the Delhi Sultanate when the Iltutmish dynasty was established?",
        options: ["Qutb al-Din Aibak", "Razia Sultana", "Iltutmish", "Ghiyasuddin Balban"],
        answer: "Iltutmish"
    },
    {
        question: "Which revolution led to the formation of the Indian National Congress?",
        options: ["Indigo Revolt", "Swadeshi Movement", "National Movement", "Sepoy Mutiny"],
        answer: "Sepoy Mutiny"
    },
    {
        question: "Who is known as the 'Architect of Modern India'?",
        options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Which Sultan introduced the token currency in India?",
        options: ["Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Balban"],
        answer: "Muhammad bin Tughlaq"
    }
]

    ;

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
















