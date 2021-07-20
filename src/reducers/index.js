import { combineReducers } from 'redux'

import todos from './todoReducers'
import search from './searchReducers'


export const ADD_TODO = "ADD_TODO",
  CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT",
  CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT"

const todoApp = combineReducers({
  todos: todos,
  search: search
})

export default todoApp