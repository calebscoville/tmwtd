import React, { Component } from 'react'
import Axios from 'axios';

class IdeaDisplay extends Component {
 constructor(){
    super()
    this.state ={
    allowEdit: false,
    updateIdea: ''
    } 


 }
 handleAllowEdit = () => {
     if(this.state.allowEdit){
         this.setState({
             allowEdit: false
         })
     } else {
        this.setState({
            allowEdit: true
        })
     }
 }

handleUpdateIdeaText=(e) => {
    this.setState({
        updateIdea: e.target.value
    })
}

handleSubmitEdit=(text, id) => {
    axios.put(`/api/updateIdea/${id}`, {text})
    .then(res => {
        
    })
}

 render(){
     return(
         <div>
        {!this.state.allowEdit?
            <div>
            <h4>{this.props.name}</h4>
            <button onClick={this.handleAllowEdit}>Edit</button>
         </div>
         :
         <div>
             <input onChange={this.handleUpdateIdeaText}/>
             <button>Submit</button>
         </div>  
        } 
        </div>   
     )
 }
      
}
export default IdeaDisplay