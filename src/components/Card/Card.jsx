import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { moveTask } from '../../reducers/taskReducer'
import { rememberAction } from '../../reducers/actionReducer'
import { destinations } from '../../content'

import { CardComponent, CardDescription, CardErrorName, CardText } from './elements'
import { ButtonMove } from '../Buttons/elements'

export const Card = ({ code, text, index, sourcePanel }) => {
  const destinationPanel = destinations[sourcePanel]
  const dispatch = useDispatch()

  // handling 'Move to...' button click by sending data to both reducers:
  // - task index, source panel and destination panel => to tasks reducer
  // - action performed => to action reducer
  const handleClick = () => {
    dispatch(moveTask(index, sourcePanel, destinationPanel))
    dispatch(rememberAction(index, sourcePanel, destinationPanel))
  }

  return (
    <CardComponent>
      <CardDescription>
        <CardErrorName>Error: {code}</CardErrorName>
        <CardText>{text}</CardText>
      </CardDescription>
      <ButtonMove
        onClick={() => handleClick()}>Move to {destinationPanel}
      </ButtonMove>
    </CardComponent>)
}

Card.propTypes = {
  code: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  sourcePanel: PropTypes.string.isRequired
}