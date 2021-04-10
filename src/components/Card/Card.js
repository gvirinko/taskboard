import React from "react";
import { useDispatch } from 'react-redux'
import {
  moveFromBacklogToUnresolved,
  moveFromUnresolvedToResolved,
  moveFromResolvedToUnresolved
} from "../../reducers/taskReducer"

import '../../App.css';

export const Card = ({ code, text, index, direction }) => {
  const dispatch = useDispatch()
  const handleClick = (direction) => {
    console.log(direction);
    switch (direction) {
      case "unresolved >":
        dispatch(moveFromBacklogToUnresolved(index))
        break
      case "resolved >":
        dispatch(moveFromUnresolvedToResolved(index))
        break
      case "unresolved <":
        console.log(code);
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
        onClick={() => handleClick(direction)}>Move to {direction}</button>
  </div>)
};

