

// SubjectQuiz1Test4.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Which dance form is native to Kerala and known for its elaborate costumes and makeup?",
        options: ["Kathakali", "Bharatanatyam", "Odissi", "Manipuri"],
        answer: "Kathakali"
    },
    {
        question: "Who wrote the famous Indian epic 'Ramayana'?",
        options: ["Valmiki", "Ved Vyasa", "Kalidasa", "Tulsidas"],
        answer: "Valmiki"
    },
    {
        question: "What is the primary instrument used in Carnatic music concerts?",
        options: ["Sitar", "Veena", "Tabla", "Sarod"],
        answer: "Veena"
    },
    {
        question: "Which temple is famously known as the 'Black Pagoda'?",
        options: ["Konark Sun Temple", "Meenakshi Temple", "Brihadeshwara Temple", "Jagannath Temple"],
        answer: "Konark Sun Temple"
    },
    {
        question: "Which festival celebrates the harvest season in Tamil Nadu?",
        options: ["Pongal", "Onam", "Baisakhi", "Makar Sankranti"],
        answer: "Pongal"
    },
    {
        question: "Which Mughal emperor commissioned the Taj Mahal?",
        options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        answer: "Shah Jahan"
    },
    {
        question: "Who is considered the 'Father of Indian Cinema'?",
        options: ["Raja Harishchandra", "Dadasaheb Phalke", "Guru Dutt", "Satyajit Ray"],
        answer: "Dadasaheb Phalke"
    },
    {
        question: "What is the traditional folk dance of Rajasthan?",
        options: ["Garba", "Ghoomar", "Bhangra", "Lavani"],
        answer: "Ghoomar"
    },
    {
        question: "Which Indian painting style is characterized by intricate designs and religious themes?",
        options: ["Madhubani", "Pattachitra", "Tanjore", "Warli"],
        answer: "Madhubani"
    },
    {
        question: "Which Indian festival is known as the 'Festival of Lights'?",
        options: ["Holi", "Diwali", "Eid", "Raksha Bandhan"],
        answer: "Diwali"
    },
    {
        question: "Who composed the classical text on Natya (Dance and Drama) called 'Natya Shastra'?",
        options: ["Kalidasa", "Bharata", "Ved Vyasa", "Valmiki"],
        answer: "Bharata"
    },
    {
        question: "Which Indian classical dance form originated in Odisha?",
        options: ["Kathak", "Odissi", "Mohiniyattam", "Kuchipudi"],
        answer: "Odissi"
    },
    {
        question: "Who is the creator of the Bharat Mata painting?",
        options: ["Rabindranath Tagore", "Abanindranath Tagore", "Nandalal Bose", "Jamini Roy"],
        answer: "Abanindranath Tagore"
    },
    {
        question: "Which ancient Indian text is known as the 'Science of Architecture'?",
        options: ["Arthashastra", "Manasara", "Vastu Shastra", "Natya Shastra"],
        answer: "Vastu Shastra"
    },
    {
        question: "Which Indian folk art involves painting on cloth or paper using natural dyes?",
        options: ["Madhubani", "Pattachitra", "Phad", "Warli"],
        answer: "Pattachitra"
    },
    {
        question: "Which UNESCO World Heritage site is known for rock-cut caves with Buddhist art?",
        options: ["Ajanta Caves", "Ellora Caves", "Elephanta Caves", "Badami Caves"],
        answer: "Ajanta Caves"
    },
    {
        question: "Which city is considered the 'Cultural Capital of India'?",
        options: ["Mumbai", "Chennai", "Kolkata", "Delhi"],
        answer: "Kolkata"
    },
    {
        question: "Which traditional Indian martial art originated in Kerala?",
        options: ["Kalaripayattu", "Silambam", "Thang-Ta", "Gatka"],
        answer: "Kalaripayattu"
    },
    {
        question: "Which Indian artist is internationally known for abstract paintings?",
        options: ["M.F. Husain", "Amrita Sher-Gil", "Raja Ravi Varma", "Jamini Roy"],
        answer: "M.F. Husain"
    },
    {
        question: "Which Indian monument is known for its intricate marble inlays and carvings?",
        options: ["Taj Mahal", "Red Fort", "Lotus Temple", "Victoria Memorial"],
        answer: "Taj Mahal"
    },
    {
        question: "Which Indian festival celebrates the bond between siblings?",
        options: ["Raksha Bandhan", "Karva Chauth", "Eid", "Holi"],
        answer: "Raksha Bandhan"
    },
    {
        question: "What is the name of the Buddhist stupa built by Emperor Ashoka in Bihar?",
        options: ["Sanchi Stupa", "Mahabodhi Stupa", "Nalanda Stupa", "Kesariya Stupa"],
        answer: "Sanchi Stupa"
    },
    {
        question: "Which Indian musical instrument is played with a bow?",
        options: ["Veena", "Sarod", "Sarangi", "Sitar"],
        answer: "Sarangi"
    },
    {
        question: "Which classical dance form of India uses storytelling through hand gestures and expressions?",
        options: ["Kathak", "Bharatanatyam", "Manipuri", "Mohiniyattam"],
        answer: "Bharatanatyam"
    },
    {
        question: "Which Indian festival is celebrated to mark the arrival of spring?",
        options: ["Diwali", "Holi", "Makar Sankranti", "Raksha Bandhan"],
        answer: "Holi"
    },
    {
        question: "Who is known as the 'Prince of Indian Music'?",
        options: ["Tansen", "Bismillah Khan", "Ravi Shankar", "Zakir Hussain"],
        answer: "Tansen"
    },
    {
        question: "Which Mughal emperor was a patron of miniature painting?",
        options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        answer: "Akbar"
    },
    {
        question: "What is the name of the famous Indian tabla player?",
        options: ["Zakir Hussain", "Ravi Shankar", "Bismillah Khan", "Amjad Ali Khan"],
        answer: "Zakir Hussain"
    },
    {
        question: "Which Indian festival is known as 'Durga Puja' in West Bengal?",
        options: ["Navratri", "Diwali", "Holi", "Eid"],
        answer: "Navratri"
    },
    {
        question: "Which Indian city is known for its textile art called 'Bandhani'?",
        options: ["Jaipur", "Ahmedabad", "Kolkata", "Varanasi"],
        answer: "Ahmedabad"
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



















