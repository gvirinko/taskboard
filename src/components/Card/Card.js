import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import {
  moveFromBacklogToUnresolved,
  moveFromUnresolvedToResolved,
  moveFromResolvedToUnresolved
} from "../../reducers/taskReducer"
import { rememberAction } from "../../reducers/actionReducer"

import '../../App.css';

export const Card = ({ code, text, index, initialPosition }) => {
  const [buttonName, setButtonName] = useState("")
  // document.querySelector("")

  useEffect(() => {
    if (initialPosition === "backlog" || "resolved") {
      setButtonName("Move to unresolved")
    }
    if (initialPosition === "unresolved") {
      setButtonName("Move to resolved")
    }
  }, [initialPosition])

  const dispatch = useDispatch()

  const handleClick = () => {
    switch (initialPosition) {
      case "backlog":
        dispatch(moveFromBacklogToUnresolved(index))
        // dispatch(rememberAction(initialPosition))
        break
      case "unresolved":
        dispatch(moveFromUnresolvedToResolved(index))
        break
      case "resolved":
        dispatch(moveFromResolvedToUnresolved(index))
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

