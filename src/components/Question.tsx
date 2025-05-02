import React, { useEffect } from 'react';
import { questions } from '../data';
import QuestionItem from './QuestionItem';

interface QuestionProps {
    selected: string[];
    setHasSelected: (value: boolean) => void;
}

export const Question: React.FC<QuestionProps> = ({ selected, setHasSelected }) => {

    const [questionNumber, setQuestionNumber] = React.useState(1);

    const [correct, setCorrect] = React.useState(0);
    const [incorrect, setIncorrect] = React.useState(0);

    const [questionType, setQuestionType] = React.useState(selected[0]);
    const [question, setQuestion] = React.useState("");
    const [hasGuessed, setHasGuessed] = React.useState(false);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setQuestionNumber((num) => num+1)
    }

    useEffect(()=>{
        console.log("Now on to question "+questionNumber);

        let newType = selected[Math.floor(Math.random()*selected.length)];
        setQuestionType(newType);

        let newQuestion = questions[newType][Math.floor(Math.random()*questions[newType].length)];
        setQuestion(newQuestion);

        setHasGuessed(false);
    }, [questionNumber])

    return (
        <form className="flex flex-col items-center gap-4 max-w-2xl" onSubmit={handleSubmit}>
            {/* <div className="text-xl mb-4">What inference procedure should you use?</div> */}

            <div className="italic indent-4">
                {question}
            </div>

            <div className="flex flex-col">
                {selected.map((item) => 
                    <QuestionItem
                        key={questionNumber + " " + item}
                        item={item}
                        correctAnswer={questionType}
                        hasGuessed={hasGuessed}
                        setHasGuessed={setHasGuessed}
                        setCorrect={setCorrect}
                        setIncorrect={setIncorrect}
                    />
                )}
            </div>
            <div className="flex gap-4">
                <button type="button" className="btn secondary" onClick={() => setHasSelected(false)}>Exit</button>
                <button type="submit" className="btn primary">Next</button>
            </div>
            <div className="text-center">
                <div>
                    <span>Question #: <b>{questionNumber}</b></span>
                    <span> • </span>
                    <span>Accuracy: <b>{Math.floor(correct/(correct+incorrect)*10000)/100}%</b></span>
                </div>
                <div>
                    <span>Correct: <b>{correct}</b></span>
                    <span> • </span>
                    <span>Incorrect: <b>{incorrect}</b></span>
                </div>
            </div>
        </form>
    );
};

export default Question;