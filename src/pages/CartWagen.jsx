import React from "react";
import { ArrayWagenContext, TotalSummWagenContext } from "../App";
import ItemWagen from "../components/BurgersBlock/ItemWagen";
import NotFound from "./NotFound";
import GoBack from "../components/GoBack";
import { Link } from "react-router-dom";

const CartWagen = () => {
  const { arrayWagen } = React.useContext(ArrayWagenContext);
  const { totalSummWagen, setTotalSummWagen } = React.useContext(
    TotalSummWagenContext
  );

  const newTotalSumm = () => {
    return arrayWagen.reduce((sum, obj) => {
      return obj.count !== -1 ? obj.price * obj.count + sum : sum;
    }, 0);
  };

  setTotalSummWagen(newTotalSumm);

  const contentItems = arrayWagen.map((obj) => (
    <ItemWagen key={obj.id} {...obj} />
  ));

  if (contentItems.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="wagen__foto">
      <div className="wagen">
        <GoBack />
        {contentItems}
        <div className="wagen__payment">
          <div className="wagen__payment-content">
            <h2>total price VAT included:</h2>
            <h1>{totalSummWagen.toFixed(2)}$</h1>
          </div>
          <Link to="/payment" href="##" className="btn">
            go to payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartWagen;
