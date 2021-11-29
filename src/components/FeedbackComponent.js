import React from "react";
import colton from "../images/image-colton.jpg";
import irene from "../images/image-irene.jpg";
import anne from "../images/image-anne.jpg";

const FeedbackComponent = () => {
  return (
    <div className="Feedback">
      <div className="Feedback_colton">
        <div className="heading">
          <div>
            <img src={colton} alt="" />
          </div>
          <div>
            <h6>Colton Smith</h6>
            <p>Verified Buyer</p>
          </div>
        </div>
        <div className="body">
          <p>
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </div>
      </div>
      <div className="Feedback_irene">
        <div className="heading">
          <div>
            <img src={irene} alt="" />
          </div>
          <div>
            <h6>Irene Roberts</h6>
            <p>Verified Buyer</p>
          </div>
        </div>
        <div className="body">
          <p>
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </div>
      </div>
      <div className="Feedback_anne">
        <div className="heading">
          <div>
            <img src={anne} alt="" />
          </div>
          <div>
            <h6>Anne Wallace</h6>
            <p>Verified Buyer</p>
          </div>
        </div>
        <div className="body">
          <p>
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackComponent;
