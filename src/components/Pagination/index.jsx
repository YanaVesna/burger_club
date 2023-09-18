import React from "react";

const Pagination = ({ perPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="##" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
