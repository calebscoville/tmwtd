import React, {Component} from 'react';
import './App.css';
import AllIdeas from './Components/AllIdeas'
import Idea from './Components/Idea'
import ChooseIdea from './Components/ChooseIdea'
// import AddIdeas from './Components/AddIdea'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="header">
        <div className="logo">
          <h1>TMWTD</h1>
          <h5>Tell me what to do</h5>
        </div>
      </header>
      <section className="content">
        <div className="ideas"><Idea /></div>
        <div className="list"> <AllIdeas /></div>
        <div className="todo"><ChooseIdea /></div>
      </section>
       
      
      </div>
  
  
    );



  }
  
}

export default App;
