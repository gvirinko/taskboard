// saves the last action user made (task index, source panel and destination panel)
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

// gets task index and info from which to which panel this task should be moved
export const rememberAction = (index, sourcePanel, destinationPanel) => {
  return {
    type: 'LAST_ACTION',
    data: { index, sourcePanel, destinationPanel }
  }
}

export default actionReducer