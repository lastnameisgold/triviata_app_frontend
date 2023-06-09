import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../services/api";

export default function Flashcards() {
  const [hidden, setHidden] = useState(false);
  const [flip, setFlip] = useState(false);
  const [name, setName] = useState("flip-in flashcards-container");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [flashcardInfo, setFlashcardInfo] = useState(0);

  const currentFlashcard = flashcardInfo[currentIndex];

  const showDef = () => {
    setHidden(!hidden);
  };

  const doFlip = () => {
    setFlip(!flip);
    flip
      ? setName("flip-in flashcards-container")
      : setName("flip-out flashcards-container");
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % flashcardInfo.length);
    setFlip(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + flashcardInfo.length) % flashcardInfo.length
    );
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

  return (
    <div
      className={name}
      onClick={() => {
        showDef();
      }}
    >
      <div className="flashcards-map">
        <div key={currentFlashcard.id} className="flashcards">
          <div className="flashcards-inner-container">
            <div className="hodor-container">
              <h3>
                {currentIndex + 1}/{flashcardInfo.length}
              </h3>

              <h2>{currentFlashcard.term}</h2>

              {flip ? <h3>{currentFlashcard.answer}</h3> : null}
            </div>

            <div className="prev-next-container">
              <div className="prev-card" onClick={handlePrev}>
                <span class="material-symbols-rounded">arrow_back</span>
              </div>

              <div className="flip-card" onClick={doFlip}>
                <h4>View answer</h4>
              </div>

              <div className="next-card" onClick={handleNext}>
                <span class="material-symbols-rounded">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
