import React, {Component} from 'react'
import axios from 'axios'

class AllIdeas extends Component {
    constructor(){
        super()
            this.state = {
                ideas: []
            }
    }

    componentDidMount(){
        axios.get('/api/ideas').then((res) => {
            this.setState({
                ideas: res.data
            })
        })
    }

    render(){
        const ideas = this.state.ideas.map((idea) => {
            return (
                <div>
                    <li key={idea.id}>{idea.name} {idea.cost}</li>
                    <h3>{idea.name}</h3>
                    <p>Cost: {idea.cost}</p>
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