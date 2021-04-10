import getAll from '../services/tasks'
import {panelNames} from "../content"


const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TASKS':
      return {
        "backlog": action.data.backlog,
        "unresolved": action.data.unresolved,
        "resolved": action.data.resolved
      }
    case "MOVE_TASK":
      const sourcePanel = action.data.from
      const destinationPanel = action.data.to
      const sourceArray = state[action.data.from]
      const taskToMove = sourceArray.find(task => task.index === action.data.index)
      const filteredArray = sourceArray.filter(task => task.index !== action.data.index)
      //check the situation with multiple unchanged panels
      const unchangedPanel = panelNames.filter(panel => panel !== sourcePanel && panel !== destinationPanel)
      return {
        [sourcePanel]: filteredArray,
        [destinationPanel]: [...state[destinationPanel], taskToMove],
        [unchangedPanel]: state[unchangedPanel]
      }
    default:
      return state
  }
}

export const initializeTasks = () => {
  return async dispatch => {
    const tasks = await getAll()
    dispatch({
      type: 'INIT_TASKS',
      data: tasks
    })
  }
}

export const moveTask = (index, from, to) => {
  return {
    type: "MOVE_TASK",
    data: { index, from, to }
  }
}

export default taskReducer