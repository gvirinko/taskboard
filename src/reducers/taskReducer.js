import getAll from '../services/tasks'


const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TASKS':
      return {
        "backlog": action.data.backlog,
        "unresolved": action.data.unresolved,
        "resolved": action.data.resolved
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

// export const moveFromBacklogToUnresolved = (content) {
//   return 
// }

export default taskReducer