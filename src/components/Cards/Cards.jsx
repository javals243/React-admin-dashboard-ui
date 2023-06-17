import React from "react";
import "./Card.css";
import { Cardsdata } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="cards">
      {Cardsdata.map((item, index) => (
        <div className="parentContainer">
          <Card
            title={item.titles}
            color={item.color}
            barValue={item.barValue}
            value={item.value}
            png={item.png}
            series={item.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
