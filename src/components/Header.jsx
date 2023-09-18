import React from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { TotalCountWagenContext, LinkContext, SearchContext } from "../App";
import debounce from "lodash.debounce";

function Header() {
  const navigate = useNavigate();
  const goToMenu = () => navigate("/menu");
  const [value1, setValue1] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");
  const [menuValue, setMenuValue] = React.useState("");
  const { totalCountWagen } = React.useContext(TotalCountWagenContext);
  const { setLinkContext } = React.useContext(LinkContext);

  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue1(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickSearch = () => {
    setValue("active");
    setMenuValue("");
  };

  const onClickClose = () => {
    setValue("");
    setValue1("");
    setSearchValue("");
  };

  const onClickMenu = () => {
    setMenuValue("active");
    setValue("");
  };

  const onClickLink1 = () => {
    setMenuValue("");
    setLinkContext(1);
  };

  const onClickLink2 = () => {
    setMenuValue("");
    setLinkContext(2);
  };

  const onClickLink3 = () => {
    setMenuValue("");
    setLinkContext(3);
  };

  const onClickLink4 = () => {
    setMenuValue("");
    setLinkContext(4);
  };

  const onClickLink5 = () => {
    setMenuValue("");
    setLinkContext(5);
  };

  const onClickLink6 = () => {
    setMenuValue("");
    setLinkContext(6);
  };

  const onClickLink7 = () => {
    setMenuValue("");
    setLinkContext(7);
  };

  const onClickMenuClose = () => {
    setMenuValue("");
  };

  return (
    <div className="header">
      <svg
        onClick={onClickMenu}
        className={menuValue === "active" ? "menu-btn__active" : "menu-btn"}
        width="27"
        height="27"
        viewBox="0 0 37 29"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.4583 26H1.54167C0.690667 26 0 26.672 0 27.5C0 28.328 0.690667 29 1.54167 29H35.4583C36.3093 29 37 28.328 37 27.5C37 26.672 36.3093 26 35.4583 26Z"
          fill="white"
        />
        <path
          d="M35.5 0H14.5C13.672 0 13 0.672 13 1.5C13 2.328 13.672 3 14.5 3H35.5C36.328 3 37 2.328 37 1.5C37 0.672 36.328 0 35.5 0Z"
          fill="white"
        />
        <path
          d="M35.4583 9H1.54167C0.690667 9 0 9.672 0 10.5C0 11.328 0.690667 12 1.54167 12H35.4583C36.3093 12 37 11.328 37 10.5C37 9.672 36.3093 9 35.4583 9Z"
          fill="white"
        />
        <path
          d="M35.5 18H14.5C13.672 18 13 18.672 13 19.5C13 20.328 13.672 21 14.5 21H35.5C36.328 21 37 20.328 37 19.5C37 18.672 36.328 18 35.5 18Z"
          fill="white"
        />
      </svg>

      <svg
        style={
          menuValue === "active" ? { display: "flex" } : { display: "none" }
        }
        className="menu-close"
        onClick={onClickMenuClose}
        width="24px"
        height="24px"
        viewBox="0 0 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        fill="white"
      >
        <g
          id="Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        >
          <g
            id="24-px-Icons"
            transform="translate(-364.000000, -124.000000)"
            stroke="white"
          >
            <g id="ic_cancel" transform="translate(360.000000, 120.000000)">
              <g id="cross">
                <g transform="translate(5.000000, 5.000000)" strokeWidth="2">
                  <path d="M0,0 L14.1421356,14.1421356" id="Line"></path>
                  <path d="M14,0 L1.77635684e-15,14" id="Line"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <svg
        style={value === "active" ? { display: "flex" } : { display: "none" }}
        className="iconsSearch"
        onClick={onClickClose}
        width="24px"
        height="24px"
        viewBox="0 0 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        fill="white"
      >
        <g
          id="Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        >
          <g
            id="24-px-Icons"
            transform="translate(-364.000000, -124.000000)"
            stroke="white"
          >
            <g id="ic_cancel" transform="translate(360.000000, 120.000000)">
              <g id="cross">
                <g transform="translate(5.000000, 5.000000)" strokeWidth="2">
                  <path d="M0,0 L14.1421356,14.1421356" id="Line"></path>
                  <path d="M14,0 L1.77635684e-15,14" id="Line"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <svg
        style={value !== "active" ? { display: "flex" } : { display: "none" }}
        value={value}
        onClick={onClickSearch}
        className="iconsSearch"
        height="30px"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="white"
      >
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
      </svg>

      <div className={menuValue === "active" ? "navbar__active" : "navbar"}>
        <Link to="/" onClick={onClickLink1}>
          Home
        </Link>
        <Link to="/" onClick={onClickLink2}>
          Menu
        </Link>

        <Link to="/" onClick={onClickLink3}>
          Drinks
        </Link>
        <Link to="/" onClick={onClickLink4}>
          About
        </Link>
        <span className="space"></span>
        <Link to="/" onClick={onClickLink1}>
          Reviews
        </Link>
        <Link to="/" onClick={onClickLink5}>
          Contact
        </Link>
        <Link to="/" onClick={onClickLink6}>
          Service
        </Link>
        <Link to="/" onClick={onClickLink7}>
          Blogs
        </Link>
      </div>

      <Link to="/" className="logo">
        <Logo />
      </Link>
      <Link to="/cartWagen" className="header__wagen">
        <svg
          className="icons"
          width="30"
          height="25"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          fill="white"
        >
          <g>
            <path
              strokeWidth="20"
              d="M-0.5,17.56c0-9.43,7.64-17.07,17.07-17.07h51.2c7.83,0,14.66,5.34,16.56,12.94l13.82,55.33h396.3
		c9.43,0.01,17.06,7.66,17.05,17.08l-0.29,3.12l-51.2,273.08c-1.51,8.07-8.55,13.92-16.76,13.93H136.04
		c-8.21-0.01-15.25-5.86-16.76-13.93L68.11,89.48L54.46,34.63H16.57C7.14,34.63-0.5,26.99-0.5,17.56z M105.38,102.9l44.82,238.94
		h278.88L473.9,102.9H105.38z M170.17,375.97c-37.7,0-68.27,30.56-68.27,68.27s30.56,68.27,68.27,68.27s68.27-30.57,68.27-68.27
		S207.88,375.97,170.17,375.97z M409.11,375.97c-37.7,0-68.27,30.56-68.27,68.27s30.56,68.27,68.27,68.27s68.27-30.57,68.27-68.27
		S446.82,375.97,409.11,375.97z M170.17,410.1c18.85,0,34.13,15.28,34.13,34.13c0,18.85-15.28,34.13-34.13,34.13
		s-34.13-15.28-34.13-34.13C136.04,425.39,151.32,410.1,170.17,410.1z M409.11,410.1c18.85,0,34.13,15.28,34.13,34.13
		c0,18.85-15.28,34.13-34.13,34.13c-18.85,0-34.13-15.28-34.13-34.13C374.98,425.39,390.26,410.1,409.11,410.1z"
            />
          </g>
        </svg>
        <div className="header__count">{totalCountWagen}</div>
      </Link>

      <form
        className={value === "active" ? "search-form__active" : "search-form"}
      >
        <input
          ref={inputRef}
          onClick={goToMenu}
          onChange={onChangeInput}
          value={value1}
          type="search"
          name=""
          placeholder="search here..."
        ></input>
      </form>
    </div>
  );
}

export default Header;
