import React, { Component } from 'react'

import { addTodo, changeTodoInput, changeSearchInput } from '../actions/todoActions'
import store from '../store/index'

class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
    let state = store.getState()
    this.state = {
      todos: state.todos.list,
      todoInputText: state.todos.todo,
      searchInputText: state.search
    }
  }

  componentDidMount() {
    let self = this
    store.subscribe(()=>{
      let state = store.getState()
      self.setState({
        todos: state.todos.list,
        todoInputText: state.todos.todo,
        searchInputText: state.search
      })
    })
  }

  onChangeSearchInput = (event) => {
    store.dispatch(changeSearchInput(event.target.value))
  }

  onChangeTodoInput = (event) => {
    store.dispatch(changeTodoInput(event.target.value))
  }

  addOnClick = (event) => {
    if (this.state.todoInputText) {
      store.dispatch(addTodo(this.state.todoInputText))
      store.dispatch(changeTodoInput(""))
    }
  }

  render() {
    let self = this
    const todoList = this.state.todos.map((todo, key) => {
      if (todo.includes(self.state.searchInputText)) {
        return <li key={todo+key}>{todo}</li>
      } else {
        return null
      }
    })

    return (
      <div style={{margin: `${10}px`}}>
        <p>Search: </p>
        <input type="text" value={this.state.searchInputText} onChange={this.onChangeSearchInput}/><br />

        <p>New todo item: </p>
        <input type="text" value={this.state.todoInputText} onChange={this.onChangeTodoInput}/><br />

        <button className="btn btn-primary my-3" type="button" onClick={this.addOnClick}>Add</button>
        <ul>
          <h3>Todo: </h3>
          {todoList}
        </ul>
      </div>
    )
  }
}

export default TodoList