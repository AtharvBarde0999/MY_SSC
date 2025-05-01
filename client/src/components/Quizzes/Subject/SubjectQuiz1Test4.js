

// SubjectQuiz1Test4.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Complete the series: 2, 6, 12, 20, ?",
        options: ["30", "28", "40", "24"],
        answer: "30"
    },
    {
        question: "Which word does not belong to the group: Apple, Banana, Carrot, Mango?",
        options: ["Apple", "Banana", "Carrot", "Mango"],
        answer: "Carrot"
    },
    {
        question: "What comes next in the sequence: AZ, BY, CX, ?",
        options: ["DW", "EV", "DU", "FW"],
        answer: "DW"
    },
    {
        question: "Find the odd one out: 125, 216, 343, 512, 729.",
        options: ["125", "216", "343", "729"],
        answer: "343"
    },
    {
        question: "A is taller than B. B is taller than C. C is taller than D. Who is the tallest?",
        options: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "Pointing to a photograph, Raj says, 'She is the only daughter of my father's only son.' How is the woman in the photograph related to Raj?",
        options: ["Sister", "Daughter", "Mother", "Wife"],
        answer: "Sister"
    },
    {
        question: "Find the missing term: 3, 6, 18, 72, ?",
        options: ["144", "288", "360", "216"],
        answer: "288"
    },
    {
        question: "Which is the odd one out: Circle, Triangle, Square, Rectangle?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        answer: "Circle"
    },
    {
        question: "Find the next number: 19, 23, 29, 31, ?",
        options: ["33", "35", "37", "39"],
        answer: "37"
    },
    {
        question: "In a certain code, 'PEOPLE' is written as 'QDQOHF'. How is 'FAMILY' written?",
        options: ["GBNJMX", "GZNLJX", "GBNJLX", "GBNKJY"],
        answer: "GBNJMX"
    },
    {
        question: "Select the pair that is similar to: Book : Pages.",
        options: ["Car : Wheels", "Pen : Ink", "Chair : Table", "Clock : Watch"],
        answer: "Pen : Ink"
    },
    {
        question: "What is the missing number in the sequence? 5, 10, 20, ?, 80.",
        options: ["25", "30", "40", "35"],
        answer: "40"
    },
    {
        question: "Which word can be formed using the letters in 'DETERMINATION'?",
        options: ["MENTOR", "INDICATION", "TENURE", "RATION"],
        answer: "RATION"
    },
    {
        question: "Arrange the following words in logical order: Child, Adult, Infant, Senior.",
        options: ["Infant, Child, Adult, Senior", "Child, Infant, Adult, Senior", "Senior, Adult, Child, Infant", "Infant, Adult, Child, Senior"],
        answer: "Infant, Child, Adult, Senior"
    },
    {
        question: "If 'CIRCLE' is coded as 'DFSMDF', how is 'TRIANGLE' coded?",
        options: ["USJBMHDM", "USJBMHFL", "USJBMHGM", "USJBMHDN"],
        answer: "USJBMHDM"
    },
    {
        question: "Which number comes next in the series? 16, 22, 28, 34, ?",
        options: ["40", "36", "42", "38"],
        answer: "40"
    },
    {
        question: "In a certain code, 'BAT' is written as 'EBW'. How is 'CAT' written?",
        options: ["FAV", "FDW", "EDV", "EAW"],
        answer: "FDW"
    },
    {
        question: "If Z = 26 and Y = 25, then what is the sum of L and M?",
        options: ["24", "25", "26", "27"],
        answer: "25"
    },
    {
        question: "Find the odd one out: Dog, Cat, Cow, Chair.",
        options: ["Dog", "Cat", "Cow", "Chair"],
        answer: "Chair"
    },
    {
        question: "Complete the analogy: Time : Clock :: Temperature : ?",
        options: ["Thermostat", "Thermometer", "Barometer", "Altimeter"],
        answer: "Thermometer"
    },
    {
        question: "If A is coded as 1, B as 2, and so on, what is the code for 'ACE'?",
        options: ["135", "246", "357", "145"],
        answer: "135"
    },
    {
        question: "If the following words are rearranged alphabetically, which comes first? Zebra, Yak, Elephant, Antelope.",
        options: ["Antelope", "Yak", "Elephant", "Zebra"],
        answer: "Antelope"
    },
    {
        question: "What is the missing number in the puzzle? 7 × 6 ÷ 3 + 2 = ?",
        options: ["16", "15", "17", "14"],
        answer: "15"
    },
    {
        question: "Choose the missing figure: △, □, ○, △, □, ?",
        options: ["○", "□", "△", "◇"],
        answer: "○"
    },
    {
        question: "Pointing to a man, a woman says, 'He is the son of my grandfather's only child.' How is the man related to the woman?",
        options: ["Cousin", "Brother", "Uncle", "Nephew"],
        answer: "Brother"
    },
    {
        question: "Complete the analogy: Book : Read :: Food : ?",
        options: ["Eat", "Taste", "Smell", "Cook"],
        answer: "Eat"
    },
    {
        question: "If TREE is coded as 5915, how is LEAF coded?",
        options: ["3796", "3769", "3976", "3765"],
        answer: "3769"
    },
    {
        question: "Which number comes next in the pattern? 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "64"],
        answer: "32"
    },
    {
        question: "Arrange the following logically: Leaf, Fruit, Root, Flower.",
        options: ["Root, Leaf, Flower, Fruit", "Leaf, Root, Fruit, Flower", "Leaf, Fruit, Root, Flower", "Fruit, Leaf, Root, Flower"],
        answer: "Root, Leaf, Flower, Fruit"
    },
    {
        question: "Find the missing term: 5, 10, 17, 26, ?",
        options: ["34", "35", "36", "37"],
        answer: "37"
    }
];

function SubjectQuiz1Test4() {
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

export default SubjectQuiz1Test4;







































