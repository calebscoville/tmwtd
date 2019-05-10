import React, { Component } from 'react'
import axios from 'axios'

class AddIdea extends Component {
    constructor() {
        super()
        this.state = {
            ideaName: '',
            // cost: null
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddIdea = (e) => {
        e.preventDefault()
        axios.post('/api/addIdea', {
            name: this.state.ideaName,
            // cost: this.state.cost
        })
        .then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <h1>Add Idea</h1>
                <form onSubmit={this.handleAddIdea}>
                <input
                    placeholder='Idea Name'
                    name='ideaName'
                    onChange={this.handleUpdateInput}
                />
                {/* <input
                    placeholder='Cost'
                    name='cost'
                    onChange={this.handleUpdateInput}
                    /> */}
                    <button>Add Event</button>
                </form>
            </div>
        )
    }
}

export default AddIdea