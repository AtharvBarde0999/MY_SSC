

// SubjectQuiz1Test3.js
import React, { useState } from "react";
import "./QuizStyle.css";

const questions = [
    {
        question: "Choose the synonym for 'Aberration'.",
        options: ["Deviation", "Clarity", "Ordinary", "Mistake"],
        answer: "Deviation"
    },
    {
        question: "Identify the correctly spelled word.",
        options: ["Receieve", "Receive", "Recieve", "Reecive"],
        answer: "Receive"
    },
    {
        question: "Choose the antonym for 'Gregarious'.",
        options: ["Sociable", "Introverted", "Cheerful", "Friendly"],
        answer: "Introverted"
    },
    {
        question: "Which part of speech is the word 'Quickly'?",
        options: ["Noun", "Verb", "Adverb", "Adjective"],
        answer: "Adverb"
    },
    {
        question: "Choose the appropriate preposition: He is good ___ mathematics.",
        options: ["on", "in", "at", "with"],
        answer: "at"
    },
    {
        question: "Fill in the blank: She is ____ intelligent to solve the problem.",
        options: ["too", "very", "so", "much"],
        answer: "very"
    },
    {
        question: "Choose the correct passive voice: 'Someone cleaned the room.'",
        options: ["The room is cleaned.", "The room was cleaned.", "The room cleaned.", "The room has cleaned."],
        answer: "The room was cleaned"
    },
    {
        question: "Find the error: I prefers tea over coffee.",
        options: ["I", "prefers", "tea", "over coffee"],
        answer: "prefers"
    },
    {
        question: "Choose the correct indirect speech: He said, 'I am playing football.'",
        options: ["He said that he is playing football.", "He said that he was playing football.", "He says that he is playing football.", "He says that he was playing football."],
        answer: "He said that he was playing football"
    },
    {
        question: "What is the meaning of the idiom 'Beat around the bush'?",
        options: ["Avoid the main topic", "Discuss the problem", "Win the argument", "Behave oddly"],
        answer: "Avoid the main topic"
    },
    {
        question: "Choose the synonym for 'Eloquent'.",
        options: ["Persuasive", "Silent", "Dull", "Rough"],
        answer: "Persuasive"
    },
    {
        question: "Identify the tense: She will have completed the task by evening.",
        options: ["Past Perfect", "Present Perfect", "Future Perfect", "Future Continuous"],
        answer: "Future Perfect"
    },
    {
        question: "Choose the antonym for 'Acquiesce'.",
        options: ["Agree", "Disagree", "Accept", "Consent"],
        answer: "Disagree"
    },
    {
        question: "Find the correctly spelled word.",
        options: ["Accomodation", "Accommodation", "Accomodition", "Accomadation"],
        answer: "Accommodation"
    },
    {
        question: "Choose the appropriate article: He bought ___ umbrella.",
        options: ["a", "an", "the", "no article"],
        answer: "an"
    },
    {
        question: "Select the correct synonym for 'Haughty'.",
        options: ["Arrogant", "Humble", "Diligent", "Shy"],
        answer: "Arrogant"
    },
    {
        question: "Choose the suitable conjunction: I ran fast ____ I missed the train.",
        options: ["but", "and", "although", "yet"],
        answer: "but"
    },
    {
        question: "Identify the figure of speech: 'She sells sea shells on the sea shore.'",
        options: ["Metaphor", "Alliteration", "Simile", "Hyperbole"],
        answer: "Alliteration"
    },
    {
        question: "Choose the correct option: 'Neither John nor his friends ____ willing to help.'",
        options: ["is", "are", "were", "have"],
        answer: "are"
    },
    {
        question: "Which part of speech is the word 'Beautiful'?",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        answer: "Adjective"
    },
    {
        question: "What is the meaning of the phrasal verb 'Put up with'?",
        options: ["Tolerate", "Celebrate", "Maintain", "Fix"],
        answer: "Tolerate"
    },
    {
        question: "Choose the correct word: She is ____ than her sister.",
        options: ["more beautiful", "most beautiful", "beautifuller", "beautiful"],
        answer: "more beautiful"
    },
    {
        question: "Identify the error: She don't like chocolate.",
        options: ["She", "don't", "like", "chocolate"],
        answer: "don't"
    },
    {
        question: "What is the opposite of 'Optimist'?",
        options: ["Pessimist", "Realist", "Idealist", "Rationalist"],
        answer: "Pessimist"
    },
    {
        question: "Choose the correct sentence: He don't know the answer.",
        options: ["He doesn't know the answer.", "He don't knows the answer.", "He do not know the answer.", "He know not the answer."],
        answer: "He doesn't know the answer"
    },
    {
        question: "Find the meaning of the idiom 'Break the ice'.",
        options: ["Start a conversation", "Break a glass", "Start a fight", "Stop working"],
        answer: "Start a conversation"
    },
    {
        question: "Choose the antonym for 'Ample'.",
        options: ["Sufficient", "Insufficient", "Plentiful", "Abundant"],
        answer: "Insufficient"
    },
    {
        question: "Select the correct option: The news ____ shocking to everyone.",
        options: ["was", "were", "is", "are"],
        answer: "was"
    },
    {
        question: "Which word is the synonym of 'Dilemma'?",
        options: ["Problem", "Solution", "Option", "Clarity"],
        answer: "Problem"
    },
    {
        question: "Choose the correct preposition: He depends ____ his parents for money.",
        options: ["on", "in", "at", "with"],
        answer: "on"
    }
];

function SubjectQuiz1Test3() {
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

export default SubjectQuiz1Test3;






































