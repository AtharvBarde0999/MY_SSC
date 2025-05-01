

// SubjectQuiz1Test4.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "What is the chemical formula of water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: "Ampere"
    },
    {
        question: "What is the main gas found in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: "Nitrogen"
    },
    {
        question: "Which vitamin is known as the 'Sunshine Vitamin'?",
        options: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin C"],
        answer: "Vitamin D"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "95°C", "100°C", "110°C"],
        answer: "100°C"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Au", "Ag", "Pt", "Pb"],
        answer: "Au"
    },
    {
        question: "Which organ in the human body is responsible for filtering blood?",
        options: ["Heart", "Liver", "Kidneys", "Lungs"],
        answer: "Kidneys"
    },
    {
        question: "What is the process by which plants make food using sunlight?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
        answer: "Photosynthesis"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
    },
    {
        question: "What is the primary component of natural gas?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        answer: "Methane"
    },
    {
        question: "Which part of the cell is known as the 'Powerhouse of the Cell'?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
        answer: "Mitochondria"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Aluminum", "Lead"],
        answer: "Mercury"
    },
    {
        question: "What is the pH of pure water?",
        options: ["5", "7", "9", "11"],
        answer: "7"
    },
    {
        question: "Which organ in the human body is responsible for producing insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Heart"],
        answer: "Pancreas"
    },
    {
        question: "What is the unit of force in the SI system?",
        options: ["Joule", "Pascal", "Newton", "Watt"],
        answer: "Newton"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s", "3 × 10^12 m/s"],
        answer: "3 × 10^8 m/s"
    },
    {
        question: "What is the chemical name of common salt?",
        options: ["Sodium Bicarbonate", "Sodium Chloride", "Calcium Carbonate", "Magnesium Sulfate"],
        answer: "Sodium Chloride"
    },
    {
        question: "Which organelle is responsible for protein synthesis in cells?",
        options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi Apparatus"],
        answer: "Ribosome"
    },
    {
        question: "Which element has the highest atomic number?",
        options: ["Uranium", "Plutonium", "Oganesson", "Radium"],
        answer: "Oganesson"
    },
    {
        question: "What is the scientific name of the human species?",
        options: ["Homo habilis", "Homo erectus", "Homo sapiens", "Homo neanderthalensis"],
        answer: "Homo sapiens"
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Transport Oxygen", "Fight Infections", "Produce Hormones", "Generate Energy"],
        answer: "Transport Oxygen"
    },
    {
        question: "What is the process by which water changes from liquid to gas?",
        options: ["Condensation", "Evaporation", "Freezing", "Precipitation"],
        answer: "Evaporation"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Saturn"
    },
    {
        question: "Which gas is used in the preparation of soda water?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which layer of the Earth is made of solid iron and nickel?",
        options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
        answer: "Inner Core"
    },
    {
        question: "Which device is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hydrometer", "Ammeter"],
        answer: "Barometer"
    },
    {
        question: "What is the main constituent of the Sun?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
        answer: "Hydrogen"
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Tissue", "Organ", "Cell", "Molecule"],
        answer: "Cell"
    },
    {
        question: "Which acid is found in lemon juice?",
        options: ["Hydrochloric Acid", "Citric Acid", "Acetic Acid", "Formic Acid"],
        answer: "Citric Acid"
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












