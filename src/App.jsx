import { useState } from 'react';
import { flashcards } from './Data.jsx';
import FlashCard from './FlashCard.jsx';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const getRandomCardIndex = () => {
    return Math.floor(Math.random() * flashcards.length);
  };

  const handleNextCard = () => {
    const newIndex = getRandomCardIndex();
    setCurrentCardIndex(newIndex);
  };

  return (
    <div className="app">
      <h1>Guess that Pokemon</h1>
      <p>Total Cards: {flashcards.length}</p>
      <FlashCard card={flashcards[currentCardIndex]} onNext={handleNextCard} />
    </div>
  );
}

export default App;
