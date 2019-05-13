import React, { Component } from 'react'
import axios from 'axios'
import AllIdeas from './AllIdeas'
import Title from './Title'

class Idea extends Component {
    constructor() {
        super()
        this.state = {
            selectedID: null,
            selectedIdea: [],
        }
    }

    // handleGetIdeas = () => {
    //     axios.get('/api/ideas').then((res) => {
    //         // console.log(res)
    //         this.setState({
    //             ideas: res.data
    //         })
    //     })
    // }

    // addIdea=(idea) => {
    //     Axios.post('/api/addIdea', {idea: idea}).then((response) => {
    //       this.setState({
    //         ideas: response.data
    //       })
    //     })
    //   }

    handleGetIdeaById = () => {
        axios.get(`/api/idea/${this.state.selectedID}`).then((res) => {
            this.setState({
                selectedIdea: res.data
            })
        })
    }

    handleUpdateId = (e) => {
        this.setState({
            selectedID: e.target.value
        })
    }

    render() {
        // console.log(this.state.ideas)
        return (
            <div>
                
            <div>
                <Title />
                <input onChange={this.handleUpdateId} />
                <button onClick={this.handleGetIdeaById}>Submit</button>
                {this.state.selectedIdea ?
                    <div>
                        <h3>{this.state.selectedIdea.name}</h3>
                    </div>
                    :
                    <div>Thank you for your name. You are kind and nice.</div>
                    
                }
            </div>

            <div>
                {/* <h1>Gimme Ideas</h1> */}
                {/* <input onChange={this.handleUpdateId} /> */}
                {/* <button onClick={this.handleGetIdeaById}>Find Idea</button> */}
                <button onClick={this.props.handleGetIdeas}>...Gimme Some of Dose Great Ideas....</button>
                {this.state.selectedIdea ?
                    <div>
                        <h3>{this.state.selectedIdea.name}</h3>
                        {/* <p>Cost: {this.state.selectedIdea.cost}</p> */}
                    </div>
                    :
                    <div>Please Select Idea ID</div>
                }
            </div>
            <div>
                <AllIdeas ideas={this.props.ideas} handleUpdateIdeas={this.props.handleUpdateIdeas}/>
            </div>
        </div>
        )

    }



}

export default Idea