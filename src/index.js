import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import PropTypes from 'prop-types'
import { Container } from "react-bootstrap"

import './index.scss'
import TodoList from './components/todoList'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("app")
)