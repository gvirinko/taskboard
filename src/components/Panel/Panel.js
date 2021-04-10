import React from "react";
import '../../App.css';
import { Card } from '../Card'

export const Panel = ({ name, data }) => {
  return (
    <div className="panel">
      <h2 className="panel_title">{name}</h2>
      <div className="panel_cards">
        {data.map(item =>
          <Card
            code={item.code}
            text={item.text}
            index={item.index}
            key={item.index}
            sourcePanel={name}></Card>)
        }
      </div>
    </div>)
};

