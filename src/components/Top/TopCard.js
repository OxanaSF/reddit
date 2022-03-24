import React from "react";

const TopCard = (props) => {
  return (



    <div className={`trending-content ${props.cssStyle}`}>
      <div className="overlay">
        <div className="overlay-wrapper">
          <div className="overlay-title">{props.title}</div>

          <div className="overlay-paragraph1">{props.paragraph1}</div>
          <div className="overlay-paragraph2">{props.paragraph2}</div>
          <div className="overlay-foot">
            <img
              className="handshake-icon"
              src={props.imgSrc}
              alt="handshake-icon"
            />

            <div className="overlay-foot-text">{props.footText}</div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default TopCard;
