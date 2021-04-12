import React from 'react'
import { useDispatch } from 'react-redux'
import { moveTask } from '../../reducers/taskReducer'
import { rememberAction } from '../../reducers/actionReducer'
import { destinations } from '../../content'

import '../../App.css'

export const Card = ({ code, text, index, sourcePanel }) => {
  const destinationPanel = destinations[sourcePanel]
  // document.querySelector("")

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(moveTask(index, sourcePanel, destinationPanel))
    dispatch(rememberAction(index, sourcePanel, destinationPanel))
  }

  return (
    <div className="card">
      <div className="card_description">
        <p className="card_errorname">Error: {code}</p>
        <p className="card_text">{text}</p>
      </div>
      <button
        className="button_move"
        onClick={() => handleClick()}>Move to {destinationPanel} </button>
    </div>)
}

