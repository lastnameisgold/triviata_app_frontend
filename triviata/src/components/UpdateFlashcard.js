import { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL } from '../services/api';

export default function UpdateFlashcard() {
  const [flashcardInfo, setFlashcardInfo] = useState(null)

  useEffect(() => {
    const renderFlashcard = async () => {
      const response = await axios.get(`${BASE_URL}/api/flashcards/view`)
      setFlashcardInfo(response.data)
    }
    renderFlashcard()
  }, [])

  const [editingId, setEditingId] = useState(null);
  const [newTerm, setNewTerm] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleEdit = (flashcardId, currentTerm, currentAnswer) => {
    setEditingId(flashcardId);
    setNewTerm(currentTerm);
    setNewAnswer(currentAnswer);
  }

  const handleSave = async (flashcardId) => {
    const updatedFlashcard = {
      term: newTerm,
      answer: newAnswer
    }
    await axios.put(`${BASE_URL}/api/flashcards/${flashcardId}`, updatedFlashcard)
    const response = await axios.get(`${BASE_URL}/api/flashcards/view`)
    setFlashcardInfo(response.data)
    setEditingId(null);
    setNewTerm('');
    setNewAnswer('');
  }

  const handleCancel = () => {
    setEditingId(null);
    setNewTerm('');
    setNewAnswer('');
  }

  if (!flashcardInfo) {
    return <div>Loading...</div>
  }

  return (
    <div className='flashcard-update'>
      <div className="flashcards-map">
        {flashcardInfo.map((flashcard) => (
          <div className="flashcard" key={flashcard.id}>
            {editingId === flashcard.id ? (
              <>
                <input value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />
                <input value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} />
                <button onClick={() => handleSave(flashcard.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <p>{flashcard.term}</p>
                <p>{flashcard.answer}</p>
                <button onClick={() => handleEdit(flashcard.id, flashcard.term, flashcard.answer)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
