import React, { Component } from 'react'

class EnterIdea extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem,
        })
      }

      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            currentItem: { text: '', key: '' },
          })
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
            onChange={this.props.handleInput}
                />
            <button type="submit"> Add Your Idea </button>
          </form>
        </div>
      </div>
    )
  }
}
export default EnterIdea