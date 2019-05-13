import React, { Component } from 'react'

class EnterItems extends Component {
  createTasks = item => {
    return (
         <li key={item.key} onClick= {() =>
        this.props.deleteItem(item.key)}>
        {item.text}
        </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const enterItems = enterEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}
export default EnterItems


// 
// import React, { Component } from 'react'
// class TodoItems extends Component {
//   createTasks(item) {
//     return <li key={item.key}>{item.text}</li>
//   }
//   render() {
//     const todoEntries = this.props.entries
//     const listItems = todoEntries.map(this.createTasks)
//     return <ul className="theList">{listItems}</ul>
//   }
// }
// export default TodoItems
// 