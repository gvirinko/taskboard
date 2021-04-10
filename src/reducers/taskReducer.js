import getAll from '../services/tasks'


const taskReducer = (state = [], action) => {
  //find out about double declaration
  switch (action.type) {
    case 'INIT_TASKS':
      return {
        "backlog": action.data.backlog,
        "unresolved": action.data.unresolved,
        "resolved": action.data.resolved
      }
    case "MOVE_BACKLOG_UNRESOLVED":
      let index_b = action.data
      let taskToMove_b = state.backlog.find(task => task.index === index_b)
      const filteredBacklog = state.backlog.filter(item => item.index !== index_b)
      return {
        "backlog": filteredBacklog,
        "unresolved": [...state.unresolved,taskToMove_b],
        "resolved": state.resolved
      }
    case "MOVE_UNRESOLVED_RESOLVED":
      let index_un = action.data
      let taskToMove_un = state.unresolved.find(task => task.index === index_un)
      const filteredUnresolved = state.unresolved.filter(item => item.index !== index_un)
      return {
        "backlog": state.backlog,
        "unresolved": filteredUnresolved,
        "resolved": [...state.resolved, taskToMove_un]
      }
    case "MOVE_RESOLVED_UNRESOLVED":
      let index_r = action.data
      let taskToMove_r = state.resolved.find(task => task.index === index_r)
      console.log(taskToMove_r);
      const filteredResolved = state.resolved.filter(item => item.index !== index_r)
      return {
        "backlog": state.backlog,
        "resolved": filteredResolved,
        "unresolved": [...state.unresolved, taskToMove_r],
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

export const moveFromBacklogToUnresolved = (index) => {
  return {
    type: "MOVE_BACKLOG_UNRESOLVED",
    data: index
  }
}

export const moveFromUnresolvedToResolved = (index) => {
  console.log(index);
  return {
    type: "MOVE_UNRESOLVED_RESOLVED",
    data: index
  }
}

export const moveFromResolvedToUnresolved = (index) => {
  return {
    type: "MOVE_RESOLVED_UNRESOLVED",
    data: index
  }
}

export default taskReducer