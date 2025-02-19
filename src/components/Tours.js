import React from "react";

import { tours } from "../data/data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map(
          ({
            id,
            image,
            date,
            title,
            description,
            location,
            duration,
            price,
          }) => (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>from {price}</p>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Tours;
