import { React } from 'react';
import  Create  from './components/create/Create.jsx'
import  CreateFlashcards  from './components/flashcards/CreateFlashcards.jsx'
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <CreateFlashcards/>
      <Create/>
    </div>
  );
}

export default App;
