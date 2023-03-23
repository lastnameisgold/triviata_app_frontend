import { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL } from '../services/api';

export default function Flashcards() {

  const [hidden, setHidden] = useState(false);
  const [flip, setFlip] = useState(false);
  const [name, setName] = useState('flip-in flashcards-container');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [flashcardInfo, setFlashcardInfo] = useState(null);

  const showDef = () => {
    setHidden(!hidden);
  };

  const doFlip = () => {
    setFlip(!flip);
    flip ? setName('flip-in flashcards-container') : setName('flip-out flashcards-container');
  };

  const handleNext = () => {

    setCurrentIndex((currentIndex + 1) % flashcardInfo.length);
    setFlip(false);
  };

  const handlePrev = () => {
    setHidden(hidden)
    setCurrentIndex((currentIndex - 1 + flashcardInfo.length) % flashcardInfo.length);
    setFlip(false);
  };

  useEffect(() => {
    const renderFlashcard = async () => {
      const response = await axios.get(`${BASE_URL}/api/flashcards/view`);
      setFlashcardInfo(response.data);
    };
    renderFlashcard();
  }, []);

  if (!flashcardInfo) {
    return <div>Loading...</div>;
  }

  const currentFlashcard = flashcardInfo[currentIndex];

  return (
    <div className={name} onClick={() => { showDef(); doFlip(); }}>
      <div className="flashcards-map">
        <div key={currentFlashcard.id} className="flashcards" hidden={hidden ? true : false}>
          <div className="flashcards-inner-container">
            <div className="flashcard-number"><span>{currentIndex + 1}/{flashcardInfo.length}</span></div>
            <div className="term-container">
              <div className="term"><span>{currentFlashcard.term}</span></div>
            </div>
            {flip ? (
              <div className="answer-container">
                <div className="answer"><span>{currentFlashcard.answer}</span></div>
              </div>
            ) : null}
            <div className="prev-next-container">
              <div className="prev-card" onClick={handlePrev}><span>←</span></div>
              <div className="next-card" onClick={handleNext}><span>→</span></div>
            </div>
            <div className="flip-container">
              <div className="flip-card" onClick={doFlip}><span>Flip</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
