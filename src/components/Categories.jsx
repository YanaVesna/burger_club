import React from "react";
import { CategoryContext } from "../App";
import GoBack from "./GoBack";

function Categories() {
  const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

  const categories = [
    "All menu",
    "Italian pasta",
    "Burgers",
    "Best recipes",
    "Desserts",
    "Special",
    "Drinks",
  ];

  return (
    <div className="categories">
      <GoBack />
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => setCategoryValue(categories[i])}
            className={categoryValue === categoryName ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
