import React from "react";
import Pagination from "../components/Pagination";
import Skeleton from "../components/BurgersBlock/Skeleton";
import CartMain from "../components/BurgersBlock/Card";
import CartScroll from "../components/BurgersBlock";
import Scrollable from "../Scrollable";
import popular from "../assets/popular.json";
import { CategoryContext } from "../App";
import Categories from "../components/Categories";

const Menu = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [items, setItems] = React.useState([]);

  const { categoryValue } = React.useContext(CategoryContext);

  React.useEffect(() => {
    setIsLoading(true);

    const category =
      categoryValue === "All menu" ? "" : `category=${categoryValue}`;

    fetch(
      `https://64365ecf8205915d34f1b803.mockapi.io/items?page=${currentPage}&${category}&limit=4&project=3`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [currentPage, categoryValue]);

  const burgers = items.map((obj) => <CartMain key={obj.id} {...obj} />);

  console.log(burgers);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <Categories />
      <div className="content">
        <div className="content__items">{isLoading ? skeletons : burgers}</div>
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
      <div className="heading">
        <h3>Popular dishes</h3>
      </div>
      <div className="menu__box">
        <Scrollable _class="menu__ittems">
          {popular.map((obj) => {
            return (
              <div
                className="menu__ittem"
                data-aos="fade-up"
                data-aos-delay="150"
                key={obj.id}
              >
                <CartScroll key={obj.id} {...obj} />
              </div>
            );
          })}
        </Scrollable>
      </div>
    </>
  );
};

export default Menu;
