import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const Card = ({ id, imageURL, title, price }) => {
  const { setCartValue } = React.useContext(CartContext);

  return (
    <div className="menuMain__cart" data-aos="fade-up" data-aos-delay="150">
      <img className="menuMain__img" src={imageURL} alt="burger" />
      <div className="menuMain__content">
        {/*   <div className="menuMain__stars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_526_3949)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="#FFC700"
              />
            </g>
            <defs>
              <clipPath id="clip0_526_3949">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_526_3949)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="#FFC700"
              />
            </g>
            <defs>
              <clipPath id="clip0_526_3949">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_526_3949)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="#FFC700"
              />
            </g>
            <defs>
              <clipPath id="clip0_526_3949">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_526_3949)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="#FFC700"
              />
            </g>
            <defs>
              <clipPath id="clip0_526_3949">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_526_3950)">
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="#e0dcbb"
              />
            </g>
            <defs>
              <clipPath id="clip0_526_3950">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div> */}
        <div className="menuMain__contentup">
          <h3>{title}</h3>
        </div>
        <div className="menuMain__contentdown">
          <div className="menuMain__price">from $ {price[0]}</div>
          <Link
            to="/single"
            href="##"
            onClick={() => setCartValue([id, imageURL, title, price[0]])}
            className="btn"
          >
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
