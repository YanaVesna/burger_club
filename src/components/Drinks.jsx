import React from "react";

const Drinks = ({ imageURL, title, price }) => {
  return (
    <>
      {/* <div className="drinks__cart" data-aos="fade-up" data-aos-delay="150"> */}
      <div className="drinks__image">
        <img className="drinks__img" src={imageURL} alt="drinks" />
        <div className="drinks__content">
          <h3>{title}</h3>
          <div className="drinks__price">from ${price}</div>
        </div>
      </div>

      <a href="##" className="btn">
        learn more
      </a>
    </>
    /* </div> */
  );
};

export default Drinks;
