/* eslint-disable no-case-declarations */
import getAll from '../services/tasks'

const taskReducer = (state = [], action) => {
  switch (action.type) {
  // functionality to save an initial list of tasks from API
  case 'INIT_TASKS':
    return {
      'backlog': action.data.backlog,
      'unresolved': action.data.unresolved,
      'resolved': action.data.resolved
    }
  // functionality to move any task to any panel, given its index, source panel and destination panel
  case 'MOVE_TASK':
    const sourcePanel = action.data.from
    const destinationPanel = action.data.to
    const sourceArray = state[action.data.from]
    const taskToMove = sourceArray.find(task => task.index === action.data.index)
    const filteredArray = sourceArray.filter(task => task.index !== action.data.index)
    return {
      ...state,
      [sourcePanel]: filteredArray,
      [destinationPanel]: [...state[destinationPanel], taskToMove]
    }
  default:
    return state
  }
}

// getting data from API asyncronously and adding to state
export const initializeTasks = () => {
  return async dispatch => {
    try {
      const tasks = await getAll()
      dispatch({
        type: 'INIT_TASKS',
        data: tasks
      })
    }
    catch (error) {
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    }
  }
}

export const moveTask = (index, from, to) => {
  return {
    type: 'MOVE_TASK',
    data: { index, from, to }
  }
}

export default taskReducer