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

    // handleAddIdea = (e) => {
    //     e.preventDefault()
    //     axios.post('/api/ChooseIdea', {
    //         name: this.state.ideaName,
    //         // cost: this.state.cost
    //     })
    //     .then((res) => {
    //         console.log(res)
    //     })
    // }

    handleClick = () => {
        axios.get('/api/random').then((res) => {
            this.setState({
                ideaName: res.data.name
            }
        )})
    }

    render() {
        return (
            <div>
                <h1>Tell me what to do already!</h1>
                
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
                    <button onClick={this.handleClick}>CLICK THIS IF YOU LIKE FUN and YOU HATE NOT HAVING FUN</button>
                
                <h1>{this.state.ideaName}</h1>
            </div>
        )
    }

}

export default ChooseIdea