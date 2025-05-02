import React from 'react';

interface QuestionProps {
    item: string;
    correctAnswer: string;
    hasGuessed?: boolean;
    setHasGuessed?: React.Dispatch<React.SetStateAction<boolean>>;
    setCorrect?: React.Dispatch<React.SetStateAction<number>>;
    setIncorrect?: React.Dispatch<React.SetStateAction<number>>;
}

export const QuestionItem: React.FC<QuestionProps> = ({ item, correctAnswer, hasGuessed, setHasGuessed, setCorrect, setIncorrect }) => {

    const [hasGuessedThis, setHasGuessedThis] = React.useState(false);
    
    function handleClick() {
        setHasGuessedThis(true);
        if (hasGuessed) return; // Overall hasGuessed is true, so don't increment scores again
        setHasGuessed?.(true);
        if (item === correctAnswer) {
            setCorrect?.(num => num + 1);
        } else {
            setIncorrect?.(num => num + 1);
        }
    }

    const className = hasGuessedThis ? (item === correctAnswer ? "bg-green-200 pop" : "bg-red-200 shake") : "bg-gray-200 hover:bg-gray-300";

    return (
        <button type="button" className={"btn !text-left !shadow-none !rounded-none "+className} onClick={handleClick}>
            {item}
        </button>
    );
};

export default QuestionItem;