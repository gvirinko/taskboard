import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import taskReducer from './reducers/taskReducer'
import actionReducer from './reducers/actionReducer'

const reducer = combineReducers({
  tasks: taskReducer,
  action: actionReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)


export default store

