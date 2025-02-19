import React from "react";
import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: "6 days",
    price: "$2100",
  },
  {
    id: 2,
    image: tour2,
    date: "October 1st, 2020",
    title: "Best of Java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: "11 days",
    price: "$1400",
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: "8 days",
    price: "$5000",
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: "20 days",
    price: "$3300",
  },
];

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

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
