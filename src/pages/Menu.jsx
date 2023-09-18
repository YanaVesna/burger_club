import React from "react";
import Pagination from "../components/Pagination";
import Skeleton from "../components/BurgersBlock/Skeleton";
import CartMain from "../components/BurgersBlock/Card";
import CartScroll from "../components/BurgersBlock";
import Scrollable from "../Scrollable";
import popular from "../assets/popular.json";
import { CategoryContext, SearchContext } from "../App";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

const Menu = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perPage] = React.useState(4);
  const [items, setItems] = React.useState([]);

  const { categoryValue } = React.useContext(CategoryContext);

  const [sortType, setSortType] = React.useState({
    name: "price",
    sortProperty: "price",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace("-", "");

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    const category =
      categoryValue === "All menu" ? "" : `category=${categoryValue}`;

    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      /*  `https://64365ecf8205915d34f1b803.mockapi.io/items?page=${currentPage}&${category}&${search}&limit=4&project=3` */
      `https://64365ecf8205915d34f1b803.mockapi.io/items?&${category}&sortBy=${sortBy}&order=${order}&${search}&project=3`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryValue, searchValue, sortType]);

  /////////////////////////////////////////////
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentIndex = items.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /////////////////////////////////////////////

  const burgers = currentIndex
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <CartMain key={obj.id} {...obj} />);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <div className="sort__top">
        <Categories />
      </div>
      <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      <div className="content">
        <div className="content__items">{isLoading ? skeletons : burgers}</div>
      </div>
      <div className="pagination">
        <svg
          onClick={prevPage}
          width="50"
          height="35"
          viewBox="0 0 84 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="84" height="73" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image0_29_909"
                transform="matrix(0.015625 0 0 0.0179795 0 -0.0753425)"
              />
            </pattern>
            <image
              id="image0_29_909"
              width="64"
              height="64"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEaSURBVHic7do/SsRAHAXgTy0sbDyCtuJ6DgmonScQBI+jnYcQPIo2nsT9o+BaRBFkdws1M2vyPkg1sPm9N5siQ4iIiIiIiBigrdoDrLCPKxziCa91xymrwRjzj+sBO1UnKqjB1Ff4z+uyi5ttdvGjv9DgDtsL1nYLz1Lcsp2fax+HvWqTFXCMicXhZzipN1r3El7CJ3zCS/iET/i+SngJP7zwB5aHn2pffHrt2j/Z+a7OAzZ+uNYbI+1uD/YRYPUBxwyn9UYrJyVICUgJSAlICUgJSAlICUgJSAlICeDM8heoCY7qjVbOqhJuurjhun0fcI9zvCxYeys8S1Xf/wnP2m+F/tw6n86McKH9kOsWj3XHiYiIiIiI6JF30BD2H90cppEAAAAASUVORK5CYII="
            />
          </defs>
        </svg>

        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          totalItems={items.length}
          paginate={paginate}
        />
        <svg
          onClick={nextPage}
          width="50"
          height="35"
          viewBox="0 0 81 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="81"
            y="73"
            width="81"
            height="73"
            transform="rotate(180 81 73)"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href="#image0_29_910"
                transform="matrix(0.015625 0 0 0.0173373 0 -0.0547945)"
              />
            </pattern>
            <image
              id="image0_29_910"
              width="64"
              height="64"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEaSURBVHic7do/SsRAHAXgTy0sbDyCtuJ6DgmonScQBI+jnYcQPIo2nsT9o+BaRBFkdws1M2vyPkg1sPm9N5siQ4iIiIiIiBigrdoDrLCPKxziCa91xymrwRjzj+sBO1UnKqjB1Ff4z+uyi5ttdvGjv9DgDtsL1nYLz1Lcsp2fax+HvWqTFXCMicXhZzipN1r3El7CJ3zCS/iET/i+SngJP7zwB5aHn2pffHrt2j/Z+a7OAzZ+uNYbI+1uD/YRYPUBxwyn9UYrJyVICUgJSAlICUgJSAlICUgJSAlICeDM8heoCY7qjVbOqhJuurjhun0fcI9zvCxYeys8S1Xf/wnP2m+F/tw6n86McKH9kOsWj3XHiYiIiIiI6JF30BD2H90cppEAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
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
