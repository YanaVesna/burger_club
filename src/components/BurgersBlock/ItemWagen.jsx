import React from "react";
import {
  ArrayWagenContext,
  TotalCountWagenContext,
  TotalSummWagenContext,
} from "../../App";

const ItemWagen = ({ id, imageURL, title, price, count }) => {
  const { arrayWagen, setArrayWagen } = React.useContext(ArrayWagenContext);
  const { totalSummWagen, setTotalSummWagen } = React.useContext(
    TotalSummWagenContext
  );
  const { totalCountWagen, setTotalCountWagen } = React.useContext(
    TotalCountWagenContext
  );

  const findItem = arrayWagen.find((obj) => obj.id === id);
  const [countValue2, setCountValue2] = React.useState(() => {
    if (findItem) {
      return findItem.count;
    } else {
      return 0;
    }
  });

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      setTotalCountWagen(totalCountWagen - findItem.count);

      setArrayWagen(arrayWagen.filter((o) => o.id !== id));
    }
  };

  return (
    <div className="wagen__card">
      <img src={imageURL} alt="food" />
      <div className="wagen__content">
        <h3>{title}</h3>
        <h2>${price}</h2>
      </div>
      <div className="wagen__countbox">
        <svg
          onClick={() => {
            setCountValue2(countValue2 === 0 ? 0 : countValue2 - 1);
            findItem.count = countValue2 - 1;
            setTotalCountWagen(totalCountWagen - 1);
            setTotalSummWagen(totalSummWagen - findItem.price);
          }}
          width="15"
          height="4"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.16 0H9.94V1.06H0.16V0Z" fill="#ff8c42" />
        </svg>
        <div className="wagen__count">{countValue2}</div>
        <svg
          onClick={() => {
            setCountValue2(countValue2 + 1);
            findItem.count = countValue2 + 1;
            setTotalCountWagen(totalCountWagen + 1);
            setTotalSummWagen(totalSummWagen + findItem.price);
          }}
          width="15"
          height="15"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.92 5.88H5.62V10.18H4.38V5.88H0.08V4.62H4.38V0.319999H5.62V4.62H9.92V5.88Z"
            fill="#ff8c42"
          />
        </svg>
      </div>
      <svg
        onClick={onClickRemove}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.18 0L10 7.18L2.82 0L0 2.82L7.18 10L0 17.18L2.82 20L10 12.82L17.18 20L20 17.18L12.82 10L20 2.82L17.18 0Z"
          fill="black"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
};

export default ItemWagen;
