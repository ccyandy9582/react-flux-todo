import React, { Component } from 'react'
import {connect} from 'react-redux'

import { addTodo, changeTodoInput, changeSearchInput } from '../actions/todoActions'
import store from '../store/index'

const mapStateToProps = (state) => {
  return {
    todos: state.todos.list,
    todoInputText: state.todos.todo,
    searchInputText: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearchInput: (text) => {
      dispatch(changeSearchInput(text))
    },
    onChangeTodoInput: (text) => {
      dispatch(changeTodoInput(text))
    },
    onClick: (text) => {
      store.dispatch(addTodo(text))
    }
  }
}

class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let self = this
    const todoList = this.props.todos.map((todo, key) => {
      if (todo.includes(self.props.searchInputText)) {
        return <li key={todo+key}>{todo}</li>
      } else {
        return null
      }
    })

    return (
      <div style={{margin: `${10}px`}}>
        <p>Search: </p>
        <input type="text" value={this.props.searchInputText} onChange={(event) => {this.props.onChangeSearchInput(event.target.value)}}/><br />

        <p>New todo item: </p>
        <input type="text" value={this.props.todoInputText} onChange={(event) => {this.props.onChangeTodoInput(event.target.value)}}/><br />

        <button className="btn btn-primary my-3" type="button" onClick={() => {this.props.onClick(this.props.todoInputText)}}>Add</button>
        <ul>
          <h3>Todo: </h3>
          {todoList}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)