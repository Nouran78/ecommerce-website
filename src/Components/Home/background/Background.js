import React, { Fragment } from "react";
import "./background.css";
import { PiRadioButtonDuotone } from "react-icons/pi";
import banner8 from "../../../images/banner8.jpg";

const Background = () => {
  return (
    <Fragment>
      <div className="background">
        <img src={banner8} alt="" />
        <div className="bg">
          <h4>get 50% of </h4>
          <h1>sofa collection</h1>
          <button>shop now</button>
        </div>
        <div className="circles">
          <PiRadioButtonDuotone size={25} />
          <PiRadioButtonDuotone size={25} />
          <PiRadioButtonDuotone size={25} />
        </div>
      </div>
    </Fragment>
  );
};

export default Background;
