import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { moveTask } from "../../reducers/taskReducer"
import { rememberAction } from "../../reducers/actionReducer"

import '../../App.css';

export const Card = ({ code, text, index, sourcePanel }) => {
  const [buttonName, setButtonName] = useState("")
  // document.querySelector("")

  useEffect(() => {
    if (sourcePanel === "backlog" || "resolved") {
      setButtonName("Move to unresolved")
    }
    if (sourcePanel === "unresolved") {
      setButtonName("Move to resolved")
    }
  }, [sourcePanel])

  const dispatch = useDispatch()

  const handleClick = () => {
    let destinationPanel
    switch (sourcePanel) {
      case "backlog":
        destinationPanel = "unresolved"
        dispatch(moveTask(index, sourcePanel, destinationPanel))
        dispatch(rememberAction(index, sourcePanel, destinationPanel))
        break
      case "unresolved":
        destinationPanel = "resolved"
        dispatch(moveTask(index, sourcePanel, destinationPanel))
        dispatch(rememberAction(index, sourcePanel, destinationPanel))
        break
      case "resolved":
        destinationPanel = "unresolved"
        dispatch(moveTask(index, sourcePanel, destinationPanel))
        dispatch(rememberAction(index, sourcePanel, destinationPanel))
        break
      default:
        break
    }
  }
  return (
    <div className="card">
      <div className="card_description">
        <p className="card_errorname">Error: {code}</p>
        <p className="card_text">{text}</p>
      </div>
      <button
        className="button_move"
        onClick={() => handleClick()}> { buttonName }</button>
  </div>)
};

