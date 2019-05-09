import React, { Component } from 'react'
import axios from 'axios'

class Idea extends Component {
    constructor() {
        super()
        this.state = {
            selectedID: null,
            selectedIdea: null
        }
    }

    handleGetIdeaById = () => {
        axios.get(`/api/idea/${this.state.selectedID}`).then((res) =>{
            this.setState({
                selectedEvent: res.data
            })
        })
    }

    handleUpdateId = (e) => {
        this.setState({
            selectedID: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Idea By ID</h1>
                <input onChange={this.handleUpdateId}/>
                <button onClick={this.handleGetIdeaById}>Find Idea</button>
            {/* not sure if below is right */}
            {this.state.selectedIdea} 
            </div>
            <h3>{this.state.selectedIdea.name}</h3>
            <p>Cost: {this.state.selectedEvent.cost}</p>
        <div>
            :
            <div>Please Select Idea ID</div>
        </div>
        )
    }
}

export default Idea