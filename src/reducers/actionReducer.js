
const actionReducer = (state = [], action) => {
  switch (action.type) {
  case 'LAST_ACTION':
    return {
      'lastAction': action.data
    }
  default:
    return state
  }
}

export const rememberAction = (index, sourcePanel, destinationPanel) => {
  return {
    type: 'LAST_ACTION',
    data: { index, sourcePanel, destinationPanel }
  }
}

export default actionReducer