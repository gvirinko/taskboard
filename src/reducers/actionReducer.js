
const actionReducer = (state = [], action) => {
  switch (action.type) {
    case 'LAST_ACTION':
      return {
        "last_action": action.data
      }
    default:
      return state
  }
}

export const rememberAction = (initialPosition) => {
    return {
      type: 'LAST_ACTION',
      data: initialPosition
    }
}

export default actionReducer