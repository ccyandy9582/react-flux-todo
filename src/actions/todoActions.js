import { ADD_TODO, CHANGE_TODO_INPUT, CHANGE_SEARCH_INPUT } from "../reducers/index"

/**
 * 
 * @param {*} text 
 * @returns {type, text}
 */
export function addTodo(text) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({type: ADD_TODO, text})
    }, 2000);
  }
}

/**
 * 
 * @param {*} text 
 * @returns {type, text}
 */
export function changeTodoInput(text) {
  return {
    type: CHANGE_TODO_INPUT,
    text: text
  }
}

/**
 * 
 * @param {*} text 
 * @returns {type, text}
 */
export function changeSearchInput(text) {
  return {
    type: CHANGE_SEARCH_INPUT,
    text
  }
}