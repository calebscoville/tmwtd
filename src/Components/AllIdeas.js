import React, {Component} from 'react'
import axios from 'axios'

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
        const ideas = this.props.ideas.map((idea) => {
            return (
                <div>
                    {/* <li key={idea.id}>{idea.name}</li> */}
                    <h3 key={idea.id}>{idea.name}</h3>
                    
                </div>
            )
        })
        
        return (
            <div>
                <h1>AWESOME IDEAS</h1>
                <ul>{ideas}</ul>
            </div>
        )
    }
}

export default AllIdeas