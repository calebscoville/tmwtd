import React, {Component} from 'react'
import IdeaDisplay from './IdeaDisplay'
// import axios from 'axios'

//not sure if I need what's below...???
// class AllIdeas extends Component {
//     constructor(){
//         super()
//             this.state = {
//                 ideas: []
//             }
//     }

class AllIdeas extends Component {
    constructor(props){
        super(props)
            this.state = {
                ideas:[]
            }
    }

    

    render(){
        const ideas = this.props.ideas.map((idea, i) => {
            console.log(idea)
            return (
                <IdeaDisplay key={idea.id} name={idea.name} handleUpdateIdeas={this.props.handleUpdateIdeas} id={idea.id} />
            )
        })
        
        return (
            <div>
                <h1>AWESOME IDEAS</h1>
                <ul>{ideas}</ul>
            </div>

// experiment
            
//experiment

        )
    }
}

export default AllIdeas