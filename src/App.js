import React, {Component} from 'react';
import './App.css';
import AllIdeas from './Components/AllIdeas'
import Idea from './Components/Idea'
import Axios from 'axios'
import ChooseIdea from './Components/ChooseIdea'
import EnterIdea from './Components/EnterIdea'
// import AddIdeas from './Components/AddIdea'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [],
      currentItam: {text:'', key:''},
    }
  }
handleInout = e => {
  console.log('Hello Input')
}
addItem = () => {
  console.log('Hello Add Item')
}
  
  render() {

    return (
      <div className="App">
      <header className="header">
        <div className="logo">
          <h1>TMWTD</h1>
          <h5>Tell me what to do</h5>
          <EnterIdea addItem={this.addItem} />
        </div>
      </header>
      <section className="content">
      
        <div className="ideas"><EnterIdea /></div>
        <div className="App"><EnterIdea addItem={this.addItem} /></div>
        <div className="ideas"><Idea /></div>
        <div className="todo"><ChooseIdea /></div>
      </section>
       
       
      
      </div>
  
  
    );



  }
  
}

export default App;
