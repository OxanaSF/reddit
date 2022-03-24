import React from "react";
import TopCard from "./TopCard";

const Top = (props) => {
  return (
    <div className="trending-today-content">
      <TopCard
        title={props.topCards[0].title}
        paragraph1={props.topCards[0].paragraph1}
        paragraph2={props.topCards[0].paragraph2}
        imgSrc={props.topCards[0].imgSrc}
        footText={props.topCards[0].footText}
        cssStyle={props.topCards[0].cssStyle}
      />

      <TopCard
        title={props.topCards[1].title}
        paragraph1={props.topCards[1].paragraph1}
        paragraph2={props.topCards[1].paragraph2}
        imgSrc={props.topCards[1].imgSrc}
        footText={props.topCards[1].footText}
        cssStyle={props.topCards[1].cssStyle}
      />

      <TopCard
        title={props.topCards[2].title}
        paragraph1={props.topCards[2].paragraph1}
        paragraph2={props.topCards[2].paragraph2}
        imgSrc={props.topCards[2].imgSrc}
        // footText={props.topCards[2].footText}
        cssStyle={props.topCards[2].cssStyle}
      />

      <TopCard
        title={props.topCards[3].title}
        paragraph1={props.topCards[3].paragraph1}
        paragraph2={props.topCards[3].paragraph2}
        imgSrc={props.topCards[3].imgSrc}
        footText={props.topCards[3].footText}
        cssStyle={props.topCards[3].cssStyle}
      />
    </div>
  );
};

export default Top;
