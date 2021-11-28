import React from "react";
import star from "../images/icon-star.svg";

const HeadingComponent = () => {
  return (
    <div className="Heading">
      <div className="Heading_content">
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="Heading_ratings">
        <div className="Reviews">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p>Rated 5 Stars in Reviews</p>
        </div>
        <div className="ReportGuru">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p>Rated 5 Stars in Report Guru</p>
        </div>
        <div className="BestTech">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p>Rated 5 Stars in BestTech</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingComponent;
