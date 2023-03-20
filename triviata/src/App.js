import { React } from 'react';
import  Create  from './components/create/Create.jsx'
import  Flashcards  from './components/flashcards/Flashcards.jsx'
import CreateTitle from './components/create/create_quiz/CreateTitle.jsx';
import CreateDescription from './components/create/create_quiz/CreateDescription.jsx';
import CreateFlashCards from './components/flashcards/CreateFlashcards.jsx';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <Flashcards/>
      <Create/>
      <CreateDescription/> */}
      <CreateFlashCards/>
    </div>
  );
}

export default App;
