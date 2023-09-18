import React from "react";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__content">
        <div className="payment__registration">
          <div className="payment__registration-title">Name:</div>
          <input
            type="text"
            placeholder="full name..."
            className="payment__registration-ort"
          ></input>
        </div>
        <div className="payment__registration">
          <div className="payment__registration-title">E-mail:</div>
          <input
            type="text"
            placeholder="e-mail..."
            className="payment__registration-ort"
          ></input>
        </div>
        <div className="payment__registration">
          <div className="payment__registration-title">Password</div>
          <input
            type="text"
            placeholder="your password..."
            className="payment__registration-ort"
          ></input>
        </div>
        <div className="payment__registration">
          <div className="payment__registration-title">Confirm password:</div>
          <input
            type="text"
            placeholder="confirm..."
            className="payment__registration-ort"
          ></input>
        </div>
        <div className="payment__buttons">
          <button className="payment__buttons-register">Register</button>
          <button className="payment__buttons-login">
            <div className="payment__buttons-title">Login</div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="38" height="38" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_6_116" transform="scale(0.00390625)" />
                </pattern>
                <image
                  id="image0_6_116"
                  width="256"
                  height="256"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
