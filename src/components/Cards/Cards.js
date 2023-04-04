import Card from "../Card/Card";
import React from "react";
import { CardsData } from "../../Data/Data";
import "./Cards.css";
export default function Cards() {
  return (
    <div className="Cards">
      {CardsData.map((card) => {
        return (
          <div className="parentContainer">
            <Card
              key={card.id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}
