import React from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import Fade from "react-reveal"
const CustomerReview = () => {
  return (
    <Fade top cascade>
    <section className="max-container">
      <h3 className="text-4xl font-bold text-center font-palanquin">
        What Our?
        <span className="text-coral-red "> Customers </span>
        Say?
      </h3>
      <p className="max-w-lg m-auto mt-4 text-center info-text">
        Hear genuine storeis from our satisfied customers about their
        exceotional experiences with us.
      </p>
      <div className="flex items-center flex-1 mt-24 justify-evenly mt-lg:flex-col gap-14">

        {reviews.map((r) => (
          <ReviewCard
            key={r.customerName}
            imgURL={r.imgURL}
            customerName={r.customerName}
            rating={r.rating}
            feedback={r.feedback}
          />
        ))}
      </div>
    </section>
    </Fade>
  );
};

export default CustomerReview;
