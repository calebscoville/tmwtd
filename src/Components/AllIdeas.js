import React, {Component} from 'react'
import axios from 'axios'

//notr sure if I need what's below...???
class AllIdeas extends Component {
    constructor(){
        super()
            this.state = {
                ideas: []
            }
    }

class AllIdeas extends Component {
    constructor(props){
        super(props)
            this.state = {
                edit: false,
                editName: ''
            }
    }

    componentDidMount(){
        axios.get('/api/ideas').then((res) => { //LINKS!! to the server on index.js
            this.setState({
                ideas: res.data
            })
        })
    }

    render(){
        const ideas = this.state.ideas.map((idea) => {
            return (
                <div>
                    <li key={idea.id}>{idea.name}</li>
                    <h3>{idea.name}</h3>
                    
                </div>
            )
        })
        
        return (
            <div>
                <h1>All Ideas</h1>
                <ul>{ideas}</ul>
            </div>
        )
    }
}

export default AllIdeas