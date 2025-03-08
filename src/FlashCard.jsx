import React, { useState } from 'react';

const FlashCard = ({ card, onNext }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard">
      {/* Display question image or answer image based on state */}
      <img
        src={showAnswer ? card.answerImage : card.questionImage}
        alt={showAnswer ? card.answer : "Pokemon Question"}
        className="pokemon-image"
      />
      <div className="card-content" onClick={handleClick}>
        {showAnswer ? card.answer : card.question}
      </div>
      <button onClick={onNext}>Next Card</button>
    </div>
  );
};

export default FlashCard;