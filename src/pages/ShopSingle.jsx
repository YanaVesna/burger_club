import React from "react";
import Scrollable from "../Scrollable";
import popular from "../assets/popular.json";
import CartScroll from "../components/BurgersBlock";
import { CartContext, ArrayWagenContext, TotalCountWagenContext } from "../App";
import GoBack from "../components/GoBack";

const ShopSingle = ({ value }) => {
  const { cartValue } = React.useContext(CartContext);

  const { arrayWagen } = React.useContext(ArrayWagenContext);

  const { setTotalCountWagen } = React.useContext(TotalCountWagenContext);

  const findItem = arrayWagen.find((obj) => obj.id === cartValue[0]);
  const [countValue, setCountValue] = React.useState(() => {
    const findItem = arrayWagen.find((obj) => obj.id === cartValue[0]);
    if (findItem) {
      return findItem.count;
    } else {
      return 0;
    }
  });

  const objectArray = {
    id: cartValue[0],
    imageURL: cartValue[1],
    title: cartValue[2],
    price: cartValue[3],
    count: countValue,
  };

  const totalCountRemove = () => {
    setTotalCountWagen(
      arrayWagen.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0)
    );
  };

  const onClickAddArray = () => {
    if (findItem) {
      findItem.count = countValue;
      totalCountRemove();
    } else {
      arrayWagen.push(objectArray);
      totalCountRemove();
    }
  };
  window.scrollTo(0, 0);

  return (
    <>
      <div className="shopsingle">
        <GoBack />

        <div className="shopsingle__uppart">
          <img src={cartValue[1]} alt="cart" />

          <div className="shopsingle__content">
            <h1>{cartValue[2]}</h1>
            <div className="shopsingle__linie">
              <h2>price {cartValue[3]}$</h2>
            </div>
            <p>
              Interactively procrastinate high-payoff content without backward
              compatible data uickly cultivate optimal processes and tactical
              via accurate e-markets.
            </p>
            <div className="shopsingle__count">
              <button className="shopsingle__number">
                <div className="shopsingle__addleft">
                  {countValue < 0 ? 0 : countValue}
                </div>
                <div className="shopsingle__addright">
                  <svg
                    onClick={() => setCountValue(countValue + 1)}
                    width="24px"
                    height="24px"
                    viewBox="0 0 23 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Iconly/Two-tone/Arrow - Up 2</title>
                    <g
                      id="Iconly/Two-tone/Arrow---Up-2"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        id="Arrow---Up-2"
                        transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)"
                        stroke="#000000"
                        strokeWidth="1.8"
                      >
                        <polyline
                          id="Stroke-1"
                          points="14 0 7 7 0 0"
                        ></polyline>
                      </g>
                    </g>
                  </svg>
                  <svg
                    onClick={() =>
                      setCountValue(
                        countValue === 0 ? countValue : countValue - 1
                      )
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                  >
                    <path
                      d="M15.8073 1.5L8.80731 8.5L1.80731 1.5"
                      stroke="#292E36"
                      strokeWidth="1.8"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
              <a href="##" className="btnCard" onClick={onClickAddArray}>
                Add to card
              </a>
            </div>
            <div className="shopsingle__social">
              <p>
                <span>#no:</span> 0010
              </p>
              <p>
                <span>CATEGORY:</span> Food
              </p>
              <p>
                <span>TAGS:</span> Recipes, Sweet, Tasty
              </p>
              <div className="shopsingle__social-svg-box">
                <p>
                  <span>SHARE :</span>
                </p>
                <div className="shopsingle__social-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 52 53"
                    fill="none"
                  >
                    <circle
                      cx="25.8455"
                      cy="26.7557"
                      r="25.8455"
                      fill="none"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M28.9975 20.3349C29.9146 20.3376 30.7934 20.6896 31.4419 21.3141C32.0904 21.9385 32.456 22.7848 32.4587 23.6679V30.3332C32.456 31.2163 32.0904 32.0626 31.4419 32.6871C30.7934 33.3115 29.9146 33.6635 28.9975 33.6662H22.0759C21.1588 33.6635 20.28 33.3115 19.6315 32.6871C18.983 32.0626 18.6175 31.2163 18.6147 30.3332V23.6679C18.6175 22.7848 18.983 21.9385 19.6315 21.3141C20.28 20.6896 21.1588 20.3376 22.0759 20.3349H28.9975ZM28.9975 19.002H22.0759C19.4109 19.002 17.2305 21.1016 17.2305 23.6679V30.3332C17.2305 32.8995 19.4109 34.9992 22.0759 34.9992H28.9975C31.6626 34.9992 33.843 32.8995 33.843 30.3332V23.6679C33.843 21.1016 31.6626 19.002 28.9975 19.002Z"
                      fill="#ff8c42"
                    />
                    <path
                      d="M30.035 23.6681C29.8297 23.6681 29.6289 23.6095 29.4582 23.4996C29.2874 23.3897 29.1544 23.2336 29.0758 23.0509C28.9972 22.8682 28.9766 22.6672 29.0167 22.4732C29.0568 22.2793 29.1556 22.1011 29.3008 21.9613C29.4461 21.8215 29.6311 21.7262 29.8325 21.6877C30.0339 21.6491 30.2426 21.6689 30.4324 21.7446C30.6221 21.8202 30.7842 21.9484 30.8983 22.1128C31.0124 22.2772 31.0733 22.4705 31.0733 22.6683C31.0736 22.7997 31.0469 22.9298 30.9949 23.0512C30.9428 23.1727 30.8663 23.283 30.7699 23.3759C30.6734 23.4688 30.5588 23.5424 30.4327 23.5926C30.3066 23.6427 30.1715 23.6684 30.035 23.6681ZM25.5359 24.3344C26.0836 24.3344 26.6189 24.4908 27.0742 24.7838C27.5296 25.0768 27.8845 25.4932 28.094 25.9804C28.3036 26.4676 28.3584 27.0037 28.2516 27.5209C28.1448 28.0381 27.8811 28.5132 27.4938 28.8861C27.1066 29.259 26.6132 29.5129 26.0761 29.6158C25.539 29.7187 24.9823 29.6659 24.4763 29.4641C23.9704 29.2623 23.538 28.9205 23.2337 28.4821C22.9295 28.0436 22.7671 27.5281 22.7671 27.0007C22.7678 26.2938 23.0598 25.6161 23.5789 25.1162C24.098 24.6163 24.8018 24.3352 25.5359 24.3344ZM25.5359 23.0014C24.7145 23.0014 23.9116 23.236 23.2286 23.6754C22.5456 24.1149 22.0133 24.7395 21.699 25.4703C21.3846 26.2011 21.3024 27.0052 21.4626 27.781C21.6229 28.5568 22.0184 29.2694 22.5992 29.8287C23.1801 30.388 23.9201 30.7689 24.7257 30.9232C25.5313 31.0775 26.3664 30.9983 27.1253 30.6956C27.8841 30.3929 28.5328 29.8803 28.9891 29.2226C29.4455 28.565 29.6891 27.7917 29.6891 27.0007C29.6891 25.9401 29.2515 24.9228 28.4726 24.1728C27.6938 23.4228 26.6374 23.0014 25.5359 23.0014Z"
                      fill="#ff8c42"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    heigmenumain__ht="30"
                    viewBox="0 0 53 53"
                    fill="none"
                  >
                    <circle
                      cx="26.5369"
                      cy="26.7557"
                      r="25.8455"
                      fill="none"
                      fillOpacity="0.1"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.5363 27.0006C34.5363 22.5835 30.817 19.002 26.2301 19.002C21.6431 19.002 17.9238 22.5835 17.9238 27.0006C17.9238 30.9927 20.9608 34.3018 24.9322 34.9024V29.3134H22.8227V27.0006H24.9322V25.2384C24.9322 23.2341 26.1726 22.1261 28.0697 22.1261C28.9785 22.1261 29.9293 22.2825 29.9293 22.2825V24.251H28.8814C27.8502 24.251 27.5275 24.8674 27.5275 25.5008V27.0006H29.831L29.4632 29.3134H27.5279V34.9031C31.4993 34.3029 34.5363 30.9938 34.5363 27.0006Z"
                      fill="#ff8c42"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 53 53"
                    fill="none"
                  >
                    <circle
                      cx="26.2273"
                      cy="26.7557"
                      r="25.8455"
                      fill="none"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M35.4114 21.5505C34.7437 21.8406 34.0373 22.0317 33.3144 22.1178C34.0741 21.673 34.6454 20.9663 34.9212 20.1303C34.2029 20.5503 33.4185 20.8449 32.6014 21.0017C32.2573 20.6411 31.8435 20.3542 31.3851 20.1585C30.9267 19.9628 30.4333 19.8624 29.9348 19.8633C27.9169 19.8633 26.2838 21.4726 26.2838 23.4565C26.2824 23.7324 26.314 24.0076 26.378 24.276C24.931 24.2081 23.514 23.839 22.2178 23.1922C20.9216 22.5454 19.7747 21.6351 18.8505 20.5196C18.5262 21.0663 18.3547 21.6899 18.3539 22.3255C18.3539 23.5714 19.004 24.6727 19.9855 25.318C19.404 25.3042 18.8344 25.1502 18.325 24.8693V24.9138C18.325 26.6566 19.5858 28.1065 21.2544 28.4365C20.9407 28.5202 20.6173 28.5625 20.2926 28.5626C20.0621 28.563 19.8322 28.5406 19.6062 28.4958C20.0701 29.9235 21.4202 30.9618 23.0195 30.9914C21.72 31.993 20.1244 32.5343 18.4837 32.5303C18.1925 32.5299 17.9015 32.5125 17.6123 32.4784C19.2814 33.5442 21.2216 34.1079 23.202 34.1026C29.927 34.1026 33.6011 28.6256 33.6011 23.8755C33.6011 23.7198 33.597 23.564 33.5896 23.412C34.3027 22.9047 34.9196 22.2744 35.4114 21.5505Z"
                      fill="#ff8c42"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 52 53"
                    fill="none"
                  >
                    <circle
                      cx="25.9188"
                      cy="26.7557"
                      r="25.8455"
                      fill="none"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M25.7437 18.1406C21.0829 18.1406 17.3037 21.9181 17.3037 26.5768C17.3037 30.0304 19.3836 32.9981 22.3564 34.305C22.3338 33.7175 22.3526 33.0094 22.5033 32.3692C22.6654 31.6837 23.5885 27.7707 23.5885 27.7707C23.5885 27.7707 23.3172 27.2321 23.3172 26.4375C23.3172 25.1871 24.0406 24.2531 24.9449 24.2531C25.7135 24.2531 26.0828 24.8293 26.0828 25.5185C26.0828 26.2906 25.5892 27.443 25.3368 28.5126C25.1258 29.409 25.7851 30.1359 26.6706 30.1359C28.2681 30.1359 29.3457 28.0833 29.3457 25.6504C29.3457 23.8012 28.0986 22.419 25.8341 22.419C23.2757 22.419 21.6782 24.3284 21.6782 26.4601C21.6782 27.1945 21.8967 27.7142 22.2358 28.1134C22.3903 28.298 22.4129 28.3733 22.3564 28.5842C22.3149 28.7386 22.2245 29.1115 22.1831 29.2621C22.1266 29.4768 21.9532 29.5521 21.7611 29.473C20.5817 28.9909 20.0316 27.7029 20.0316 26.2492C20.0316 23.8539 22.055 20.9803 26.0639 20.9803C29.2855 20.9803 31.4068 23.3116 31.4068 25.8123C31.4068 29.1228 29.5643 31.5934 26.8514 31.5934C25.9396 31.5934 25.0843 31.1 24.7904 30.5426C24.7904 30.5426 24.3006 32.4859 24.1951 32.8626C24.018 33.5141 23.6676 34.1619 23.3473 34.6703C24.1242 34.8994 24.9299 35.0161 25.7399 35.0168C30.4007 35.0168 34.1799 31.2393 34.1799 26.5806C34.1799 21.9219 30.4045 18.1406 25.7437 18.1406Z"
                      fill="#ff8c42"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shopsingle__downpart">
          <h2>Description</h2>
          <p>
            Progressively maintain extensive infomediaries via extensible
            niches. Dramatically disseminate standardized metrics resource
            leveling processes. Objectively pursue diverse catalysts for change
            for interoperable meta-services.Proactively fabricate one-to-one
            materials effective e-business. Completely synergize scalable
            e-commerce rather than high standards in e-services. Assertively
            iterate resource maximizing products leading-edge intellectual
            capitaligh standards in e-services.
          </p>
        </div>
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
                <CartScroll {...obj} />
              </div>
            );
          })}
        </Scrollable>
      </div>
    </>
  );
};

export default ShopSingle;
