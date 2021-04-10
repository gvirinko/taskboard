
const actionReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMEMBER_ACTION':
      return {
        "last_action": action
      }
    default:
      return state
  }
}

export const rememberAction = ({action}) => {
    return {
      type: 'LAST_ACTION',
      data: action
    }
}

export default actionReducer