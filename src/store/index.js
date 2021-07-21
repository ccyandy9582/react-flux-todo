import { applyMiddleware, createStore } from "redux"
import Thunk from 'redux-thunk'

import todoApp from "../reducers"

let store = createStore(todoApp, applyMiddleware(Thunk))

export default store