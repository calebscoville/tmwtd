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
      // list: [],
      items: [],
      currentItem: {text:'', key:''},
    }
  }
handleInput = e => {
  console.log('Hello Input')
}
addItem = e => {
  e.preventDefault()
  console.log('Hello World')
}

deleteItem = key => {
  const filteredItems = this.state.items.filter(item => {
    return item.key !== key
  })
  this.setState({
    items: filteredItems,
  })
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
