import { useState } from 'react';
import { flashcards } from './Data.jsx';
import FlashCard from './FlashCard.jsx';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(null);

  const getRandomCardIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    return newIndex;
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    resetGuess();
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    resetGuess();
  };

  const handleShuffle = () => {
    setCurrentCardIndex(getRandomCardIndex());
    resetGuess();
  };

  const handleGuessSubmit = () => {
    const correctAnswer = flashcards[currentCardIndex].answer.toLowerCase();
    if (userGuess.trim().toLowerCase() === correctAnswer) {
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Incorrect. Try Again!');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleGuessSubmit();
    }
  };

  const resetGuess = () => {
    setUserGuess('');
    setFeedback(null);
  };

  return (
    <div className="app">
      <h1>Guess that Pokemon</h1>
      <h2>Total Cards: {flashcards.length}</h2>

      <FlashCard card={flashcards[currentCardIndex]} />

      {/* Guess Input and Submit Button */}
      <div className="guess-container">
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          onKeyDown={handleKeyDown} // Triggers submission on Enter key
          placeholder="Enter your guess..."
        />
        <button onClick={handleGuessSubmit}>Submit</button>
      </div>

      {/* Feedback Message */}
      {feedback && <p className="feedback">{feedback}</p>}

      {/* Navigation Buttons */}
      <div className="button-container">
        <button onClick={handlePrevCard}>← Previous</button>
        <button onClick={handleShuffle}>🔀 Shuffle</button>
        <button onClick={handleNextCard}>Next →</button>
      </div>
    </div>
  );
}

export default App;
