import React from "react";
import TopCard from "./TopCard";
import './Top.css'

const Top = (props) => {
  return (
    <div className="trending-today-content">
      {props.topCards.map((topCard) => (
        <TopCard
          title={topCard.title}
          paragraph1={topCard.paragraph1}
          paragraph2={topCard.paragraph2}
          imgSrc={topCard.imgSrc}
          footText={topCard.footText}
          cssStyle={topCard.cssStyle}
        />
      ))}
    </div>
  );
};

export default Top;
