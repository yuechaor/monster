import React from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((m) => (
      <Card key={m.id} monster={m} />
    ))}
  </div>
);

export default CardList;
