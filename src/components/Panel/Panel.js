import React from "react";
import '../../App.css';
import { Card } from '../Card'

export const Panel = ({ name, data }) => {
  return (
    <div className="panel">
      <div className="panel_title">
        <h2 className="panel_title_text">{name.toUpperCase()}</h2>
      </div>
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

