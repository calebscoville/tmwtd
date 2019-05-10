import React, {Component} from 'react';
import './App.css';
import AllIdeas from './Components/AllIdeas'
import Idea from './Components/Idea'
import Axios from 'axios'
import ChooseIdea from './Components/ChooseIdea'
// import AddIdeas from './Components/AddIdea'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ideas: [],
      showIdeas: false
    }
  }

  componentDidMount(){
    Axios.get('/api/ideas').then((res) => { //LINKS!! to the server on index.js
        this.setState({
            ideas: res.data
        })
    })
}

addIdea=(idea) => {
  Axios.post('/api/addIdea', {idea: idea}).then((response) => {
    this.setState({
      ideas: response.data
    })
  })
}

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
        <div className="ideas"><Idea showIdeas={this.state.showIdeas} ideas={this.state.ideas}  /></div>
        <div className="list"><AllIdeas showIdeas={this.state.showIdeas} ideas={this.state.ideas}  /></div>
        <div className="todo"><ChooseIdea /></div>
      </section>
       
      
      </div>
  
  
    );



  }
  
}

export default App;
