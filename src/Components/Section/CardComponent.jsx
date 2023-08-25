import React from "react";
import Image1 from "../../Images/Img1.png";
import Image2 from "../../Images/Img2.png";
import Image3 from "../../Images/Img3.png";
import Image4 from "../../Images/Img4.png";
import Image5 from "../../Images/Img5.png";
import Image6 from "../../Images/Img6.png";
import Image7 from "../../Images/Img7.png";
import Image8 from "../../Images/Img8.png";
import Image9 from "../../Images/Img9.png";
import { CardData } from "../../Data/CardData";
import "./SectionPageStyle.css";
export const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="card-container-box">
        {CardData.map((item, index) => (
          <div className="first-box">
            <div className="second-box">
              {index === 0 && <img className="icons" src={Image1} alt="" />}
              {index === 1 && <img className="icons" src={Image2} alt="" />}
              {index === 2 && <img className="icons" src={Image3} alt="" />}
              {index === 3 && <img className="icons" src={Image4} alt="" />}
              {index === 4 && <img className="icons" src={Image5} alt="" />}
              {index === 5 && <img className="icons" src={Image6} alt="" />}
              {index === 6 && <img className="icons" src={Image7} alt="" />}
              {index === 7 && <img className="icons" src={Image8} alt="" />}
              {index === 8 && <img className="icons" src={Image9} alt="" />}
              <h3 className="title">{item.title}</h3>

              <p className="detail">{item.detail}</p>
              <a>Learn more.</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
