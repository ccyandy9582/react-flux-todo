import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import { Container } from "react-bootstrap"

import './index.scss'
import TodoList from './components/todoList'

ReactDOM.render(
  <TodoList />,
  document.getElementById("app")
)