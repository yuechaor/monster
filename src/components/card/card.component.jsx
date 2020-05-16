import React from "react";
import "./card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt="monster"
      />
      <h1>{props.monster.name}</h1>
      <h1>{props.monster.email}</h1>
    </div>
  );
};

export default Card;
