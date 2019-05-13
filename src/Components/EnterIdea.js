import React, { Component } from 'react'
import axios from 'axios'
// import EnterItems from './Components/EnterItems'

class EnterIdea extends Component {
    constructor(){
        super()
        this.state = {
            currentItem:''
        }
    }
    // componentDidUpdate() {
    //     this.props.inputElement.current.focus()
    // }

    handleInput = e => {
        let itemText = e.target.value
        console.log(this.state.currentItem)
        // let currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem: itemText
        })
      }

      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem !== '') {
          console.log(newItem)
          axios.post('/api/addIdea', {newItem}).then(res => {
                this.props.handleUpdateIdeas(res.data)
            })
            .catch(err => {
                console.log(err)
            }) 
        //   const items = [...this.state.items, newItem]
        //   this.setState({
        //     items: items,
            // currentItem: { text: '', key: '' },
        //   })


        }
      }



  render() {
    return (
      <div className="enterIdeaMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input 
            placeholder="What's Your Idea?" 
            ref={this.props.inputElement}
            value={this.props.currentItem}
            onChange={this.handleInput}
                />
            <button type="submit" onClick={this.addItem}> Add Your Idea </button>
          </form>
        </div>
      </div>
    )
  }
}
export default EnterIdea