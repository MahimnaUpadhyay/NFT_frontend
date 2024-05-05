import React from "react";
import "./style/Card_Component.css";



const Card_Component = ({nft_image, content, button_content}) => {
  return (
    <>
      <div className="Card_Bg">
        <div className="Card_layout">
          <div className="Card_Image">
            <img src={nft_image} alt="Card Image" />
          </div>
          <div className="Card_Content">
            <p>{content}</p>
          </div>
          <div className="Card-Button">
            <button>{button_content}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_Component;
