import React from "react";
import Pagination from "../components/Pagination";
import BurgersBlock from "../components/BurgersBlock";
import Skeleton from "../components/BurgersBlock/Skeleton";

const Menu = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://64365ecf8205915d34f1b803.mockapi.io/items?page=${currentPage}&limit=12&project=3`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    /*  window.scrollTo(0, 0); */
  }, [currentPage]);

  const burgers = items.map((obj) => <BurgersBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="content">
      <div className="content__items">{isLoading ? skeletons : burgers}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Menu;
