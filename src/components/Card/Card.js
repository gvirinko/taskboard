import React from "react";
import { useDispatch } from 'react-redux'

import '../../App.css';


export const Card = ({ code, text, index, direction }) => {
  const dispatch = useDispatch()

  const handleClick = (direction) => {
    console.log(direction);
    const card = {
      index,
      code,
      text
    }
    console.log(card);
    // switch (direction) {
    //   case "unresolved =>":
    //     dispatch(moveFromBacklogToUnresolved())
    //     break
    //   case "resolved =>":
    //     dispatch(moveFromUnresolvedToResolved())
    //     break
    //   case "unresolved <=":
    //     dispatch(moveFromUnresolvedToResolved())
    //     break
    //   default:
    //     break
    // }

  }
  return (
    <div className="card">
      <div className="card_description">
        <p className="card_errorname">Error: {code}</p>
        <p className="card_text">{text}</p>
      </div>
      <button className="button_move" onClick={() => handleClick(direction)}>Move to {direction}</button>

  </div>)
};

