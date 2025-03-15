import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ card, onNext }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      {/* Display question image or answer image based on state */}
      <img
        src={showAnswer ? card.answerImage : card.questionImage}
        alt={showAnswer ? card.answer : "Pokemon Question"}
        className="pokemon-image"
      />
      <div className="card-content" onClick={handleClick}>
        {showAnswer ? card.answer : card.question}
      </div>
    </div>
  );
};

export default FlashCard;