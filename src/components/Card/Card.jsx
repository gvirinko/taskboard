import React from 'react'
import { useDispatch } from 'react-redux'
import { moveTask } from '../../reducers/taskReducer'
import { rememberAction } from '../../reducers/actionReducer'
import { destinations } from '../../content'

import { CardComponent, CardDescription, CardErrorName, CardText } from './elements'
import { ButtonMove } from '../Buttons/elements'

export const Card = ({ code, text, index, sourcePanel }) => {
  const destinationPanel = destinations[sourcePanel]
  const dispatch = useDispatch()

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

