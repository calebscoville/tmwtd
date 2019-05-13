import React, { Component } from 'react'
class EnterIdea extends Component {
  render() {
    return (
      <div className="enterIdeaMain">
        <div className="header">
          <form>
            <input placeholder="What's Your Idea?" />
            <button type="submit"> Add Your Idea </button>
            <form onSubmit={this.props.addItem}></form>
          </form>
        </div>
      </div>
    )
  }
}
export default EnterIdea