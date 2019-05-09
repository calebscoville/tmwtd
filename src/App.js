import React from 'react';
import './App.css';
import AllIdeas from './Components/AllIdeas'
import Idea from './Components/Idea'
import AddIdeas from './Components/AddIdea'

function App() {
  return (
    <div className="App">
      <AllIdeas />
      <Idea />
    <AddIdea />
    </div>
  );
}

export default App;
