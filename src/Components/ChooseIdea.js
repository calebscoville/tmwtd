import React, { Component } from 'react'
import axios from 'axios'

class ChooseIdea extends Component {
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
        axios.post('/api/ChooseIdea', {
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
                <h1>Tell me what to do already!</h1>
                <form onSubmit={this.handleAddIdea}>
                {/* <input
                    placeholder='Idea Name'
                    name='ideaName'
                    onChange={this.handleUpdateInput}
                /> */}
                {/* <input
                    placeholder='Cost'
                    name='cost'
                    onChange={this.handleUpdateInput}
                    /> */}
                    <button>PUSH THIS BUTTON</button>
                </form>
            </div>
        )
    }
}

export default ChooseIdea