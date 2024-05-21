import React, { Fragment } from "react";
import "./sectiontwo.css";
import { Link } from "react-router-dom";
import furniture_banner1 from "../../../images/furniture_banner1.jpg";
import furniture_banner2 from "../../../images/furniture_banner2.jpg";
const SectionTwo = () => {
  return (
    <Fragment>
      <section className="sale">
        <div className="row">
          <div className="allchair">
            <div className="info">
              <h5>Super sale</h5>
              <h3>new collection</h3>
              <Link to={"#"}><del> shop now</del></Link>
            </div>
            <div className="chairimg">
              <img src={furniture_banner1} alt="" />
            </div>
          </div>

          <div className="allarmchair">
            <div class="info2">
              <h3>new season</h3>
              <h4>sale 40%</h4>
              <Link to={"#"}><del>shop now</del></Link>
            </div>
            <div className="armchairimg">
              <img src={furniture_banner2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionTwo;
