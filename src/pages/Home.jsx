import React from "react";
import LogoGo from "../components/LogoGo";
import foto24 from "../assets/img/24-hours-phone-service.png";
import fastfood from "../assets/img/burger.png";
import delivery from "../assets/img/delivery-van.png";
import burger1 from "../assets/img/b4.png";
import Slider from "../components/Slider";
import Cart from "../components/BurgersBlock";
import Drinks from "../components/Drinks";
import Scrollable from "../Scrollable";
import burgers from "../assets/burgers.json";
import drinks from "../assets/drinks.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <Slider />
      </section>

      <section className="service">
        <div
          className="service__card"
          id="service"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="service__box">
            <img src={fastfood} alt="quality" />
          </div>
          <h1>BEST QUALITY</h1>
          <p>
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="300">
          <div className="service__box">
            <img src={foto24} alt="service" />
          </div>
          <h1>24/7 SERVICE</h1>
          <p>
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="450">
          <div className="service__box">
            <img src={delivery} alt="delivery" />
          </div>
          <h1>FREE DELIVERY</h1>
          <p>
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>
        </div>
      </section>
      <section className="menu" id="menu">
        <div className="heading">
          <LogoGo />
          <Link to="/menu" href="##" className="btn">
            go to menu
          </Link>
        </div>

        <div className="menu__box">
          {burgers.map((obj) => {
            return <Cart key={obj.id} {...obj} />;
          })}
        </div>
      </section>
      <section className="drinks" id="drinks">
        <div className="heading">
          <LogoGo />
          <h3>Drinks</h3>
        </div>
        <div className="drinks__box">
          <Scrollable _class="drinks__ittems">
            {drinks.map((obj) => {
              return (
                <div
                  className="drinks__ittem"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <Drinks key={obj.id} {...obj} />
                </div>
              );
            })}
          </Scrollable>
        </div>
      </section>
      <section className="about" id="about">
        <div className="heading">
          <LogoGo />
          <Link to="/about" href="#" className="btn">
            ABOUT US
          </Link>
        </div>
        <div className="about__box">
          <div
            className="about__image"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div
              className="about__image1"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src="/img/about1.jpg" alt="about us" />
              <span className="about__space"></span>
              <img src="/img/about2.jpg" alt="about us" />
            </div>
            <img
              className="about__image3"
              src="/img/about3.jpg"
              alt="about us"
            />
            <div
              className="about__image2"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src="/img/about4.jpg" alt="about us" />
              <span className="about__space"></span>
              <img src="/img/about5.jpg" alt="about us" />
            </div>
          </div>
          <div
            className="about__content"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="about__title">Step into burger heaven</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ut
              quam mollitia quisquam sapiente numquam laborum id alias, dolor,
              assumenda, quis sit doloribus optio similique! Vel, inventore
              corrupti! Quasi, quia!
            </p>
            <div className="about__icons">
              <h3>
                <span>&#10003;</span> best price
              </h3>
              <h3>
                <span>&#10003;</span> best service
              </h3>
              <h3>
                <span>&#10003;</span> Fresh Ingredient
              </h3>
              <h3>
                <span>&#10003;</span> backed buns
              </h3>
              <h3>
                <span>&#10003;</span> natural cheese
              </h3>
              <h3>
                <span>&#10003;</span> veg & non-veg
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="heading">
          <LogoGo />
          <h3>CONTACT US</h3>
        </div>
        <div className="contact__row">
          <iframe
            data-aos="fade-up"
            data-aos-delay="150"
            className="contact__map"
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77656.93099664831!2d13.293817518937729!3d52.53743090858417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850ff3ee0121b%3A0xde011c8e23e64532!2sUpper%20Burger%20Grill!5e0!3m2!1sru!2sde!4v1690642304130!5m2!1sru!2sde"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="contact__form">
            <div className="contact__icons-box">
              <div
                className="contact__icons"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="contact__iconsbox">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="4200473_address_location_map_navigation_icon 1">
                      <g id="layer1">
                        <path
                          id="path929"
                          d="M8.49801 0.529297C5.27689 0.529297 2.65479 3.15141 2.65479 6.37252C2.65478 12.0403 8.1686 16.3491 8.1686 16.3491C8.26272 16.4243 8.37956 16.4651 8.49997 16.4651C8.62039 16.4651 8.73723 16.4243 8.83135 16.3491C8.83135 16.3491 14.3452 12.0403 14.3452 6.37252C14.3452 3.15141 11.7191 0.529297 8.49801 0.529297ZM8.49801 1.59206C11.1449 1.59206 13.2824 3.72562 13.2824 6.37252C13.2824 11.0092 9.08381 14.6726 8.50193 15.1687C7.92283 14.675 3.71754 11.011 3.71755 6.37252C3.71755 3.72562 5.85111 1.59206 8.49801 1.59206Z"
                          fill="black"
                        />
                        <path
                          id="circle931"
                          d="M8.4982 3.71753C7.03749 3.71753 5.84327 4.91176 5.84326 6.37247C5.84325 7.8332 7.03748 9.03134 8.4982 9.03134C9.95892 9.03134 11.1571 7.8332 11.1571 6.37247C11.1571 4.91176 9.95892 3.71753 8.4982 3.71753ZM8.4982 4.78029C9.3847 4.78029 10.0943 5.48598 10.0943 6.37247C10.0943 7.25897 9.3847 7.96858 8.4982 7.96858C7.6117 7.96858 6.90602 7.25897 6.90602 6.37247C6.90603 5.48598 7.61171 4.78029 8.4982 4.78029Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h3>ADDRESS:</h3>
                <p>Berlin, Germany - 500400</p>
              </div>
              <div
                className="contact__icons"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="contact__iconsbox">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="6590528_email_envelope_letter_mail_message_icon 1">
                      <path
                        id="Vector"
                        d="M15.75 17.75H4.5C3.125 17.75 2 16.625 2 15.25V6.5C2 5.125 3.125 4 4.5 4H15.75C17.125 4 18.25 5.125 18.25 6.5V15.25C18.25 16.625 17.125 17.75 15.75 17.75Z"
                        stroke="none"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M2 9L10.125 14L18.25 9"
                        stroke="#FF8C42"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <h3>EMAIL:</h3>
                <div className="contact__content">
                  <p>burger-mania@web.de</p>
                  <p>burger-contact@web.de</p>
                </div>
              </div>
              <div
                className="contact__icons"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <div className="contact__iconsbox">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 16 16"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="8666632_phone_icon 1">
                      <path
                        id="Vector"
                        d="M14.2587 10.9467V12.9467C14.2595 13.1324 14.2215 13.3162 14.1471 13.4863C14.0727 13.6564 13.9636 13.8091 13.8268 13.9346C13.69 14.0602 13.5285 14.1557 13.3526 14.2152C13.1767 14.2747 12.9903 14.2968 12.8054 14.2801C10.754 14.0572 8.78341 13.3562 7.05208 12.2334C5.4413 11.2098 4.07564 9.84418 3.05208 8.2334C1.9254 6.4942 1.22424 4.51406 1.00541 2.4534C0.988751 2.26904 1.01066 2.08324 1.06974 1.90781C1.12883 1.73239 1.22379 1.57119 1.34859 1.43448C1.47339 1.29777 1.62528 1.18854 1.79461 1.11375C1.96393 1.03895 2.14697 1.00024 2.33208 1.00006H4.33208C4.65562 0.99688 4.96927 1.11145 5.21459 1.32242C5.4599 1.53339 5.62013 1.82636 5.66541 2.14673C5.74983 2.78678 5.90638 3.41522 6.13208 4.02006C6.22177 4.25868 6.24119 4.51801 6.18802 4.76732C6.13485 5.01663 6.01132 5.24547 5.83208 5.42673L4.98541 6.2734C5.93445 7.94243 7.31638 9.32436 8.98541 10.2734L9.83208 9.42673C10.0133 9.24749 10.2422 9.12396 10.4915 9.07079C10.7408 9.01762 11.0001 9.03704 11.2387 9.12673C11.8436 9.35243 12.472 9.50898 13.1121 9.5934C13.4359 9.63909 13.7317 9.8022 13.9431 10.0517C14.1545 10.3013 14.2669 10.6198 14.2587 10.9467Z"
                        stroke="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>

                <h3>PHONE:</h3>
                <p>+123-456-7890</p>
                <p>+111-222-3344</p>
              </div>
            </div>

            <form className="contact__form" action="">
              <h3>GET IN TOUCH</h3>
              <input
                data-aos="fade-up"
                data-aos-delay="150"
                type="text"
                placeholder="full name"
                className="contact__box"
              ></input>
              <input
                data-aos="fade-up"
                data-aos-delay="300"
                type="email"
                placeholder="email"
                className="contact__box"
              ></input>
              <input
                data-aos="fade-up"
                data-aos-delay="450"
                type="number"
                placeholder="phone"
                className="contact__box"
              ></input>
              <textarea
                data-aos="fade-up"
                data-aos-delay="600"
                name=""
                placeholder="message"
                id=""
                cols={30}
                rows={10}
                className="contact__box"
              ></textarea>
              <input
                data-aos="fade-up"
                data-aos-delay="750"
                type="submit"
                value="send message"
                className="btn"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="blogs" id="blogs">
        <div className="heading">
          <LogoGo />
          <h3>daily posts</h3>
        </div>

        <div className="blogs__boxes">
          <div className="blogs__box" data-aos="fade-up" data-aos-delay="150">
            <div className="blogs__image">
              <img className="blogs__img" src={burger1} alt="" />
              <div className="blogs__icons">
                <a href="##">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 22 23"
                    fill="#FF5B00"
                  >
                    <path d="M19,0H17V5.908H16V2H6V0H4V5.908H3V2H0V23H22V2H19ZM6,18H4V16H6Zm0-4H4V12H6ZM8.207,9.793,9,10.586l2.293-2.293,1.414,1.414L9,13.414,6.793,11.207ZM10,18H8V16h2Zm4,0H12V16h2Zm0-4H12V12h2Zm4,4H16V16h2Zm0-4H16V12h2Z" />
                  </svg>
                  21st may, 2022
                </a>
                <a href="##">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 70 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="none" />
                    <path
                      d="M35 30.8571C41.3125 30.8571 46.4286 25.741 46.4286 19.4286C46.4286 13.1161 41.3125 8 35 8C28.6875 8 23.5714 13.1161 23.5714 19.4286C23.5714 25.741 28.6875 30.8571 35 30.8571ZM43 33.7143H41.5089C39.5268 34.625 37.3214 35.1428 35 35.1428C32.6786 35.1428 30.4821 34.625 28.4911 33.7143H27C20.375 33.7143 15 39.0892 15 45.7142V49.4285C15 51.7946 16.9196 53.7142 19.2857 53.7142H50.7143C53.0804 53.7142 55 51.7946 55 49.4285V45.7142C55 39.0892 49.625 33.7143 43 33.7143Z"
                      fill="#FF5B00"
                    />
                  </svg>
                  by admin
                </a>
              </div>
            </div>
            <div className="blogs__content">
              <h3>BLOG TITLE GOES HERE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem velit eligendi esse blanditiis incidunt libero
                impedit, consequatur perspiciatis facilis, aliquid, placeat
                vero.
              </p>
              <a href="##" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="blogs__box" data-aos="fade-up" data-aos-delay="300">
            <div className="blogs__image">
              <img className="blogs__img" src={burger1} alt="" />
              <div className="blogs__icons">
                <a href="##">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 22 23"
                    fill="#FF5B00"
                  >
                    <path d="M19,0H17V5.908H16V2H6V0H4V5.908H3V2H0V23H22V2H19ZM6,18H4V16H6Zm0-4H4V12H6ZM8.207,9.793,9,10.586l2.293-2.293,1.414,1.414L9,13.414,6.793,11.207ZM10,18H8V16h2Zm4,0H12V16h2Zm0-4H12V12h2Zm4,4H16V16h2Zm0-4H16V12h2Z" />
                  </svg>
                  21st may, 2022
                </a>
                <a href="##">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 70 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="none" />
                    <path
                      d="M35 30.8571C41.3125 30.8571 46.4286 25.741 46.4286 19.4286C46.4286 13.1161 41.3125 8 35 8C28.6875 8 23.5714 13.1161 23.5714 19.4286C23.5714 25.741 28.6875 30.8571 35 30.8571ZM43 33.7143H41.5089C39.5268 34.625 37.3214 35.1428 35 35.1428C32.6786 35.1428 30.4821 34.625 28.4911 33.7143H27C20.375 33.7143 15 39.0892 15 45.7142V49.4285C15 51.7946 16.9196 53.7142 19.2857 53.7142H50.7143C53.0804 53.7142 55 51.7946 55 49.4285V45.7142C55 39.0892 49.625 33.7143 43 33.7143Z"
                      fill="#FF5B00"
                    />
                  </svg>
                  by admin
                </a>
              </div>
            </div>
            <div className="blogs__content">
              <h3>BLOG TITLE GOES HERE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem velit eligendi esse blanditiis incidunt libero
                impedit, consequatur perspiciatis facilis, aliquid, placeat
                vero.
              </p>
              <a href="##" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="blogs__box" data-aos="fade-up" data-aos-delay="450">
            <div className="blogs__image">
              <img className="blogs__img" src={burger1} alt="" />
              <div className="blogs__icons">
                <a href="##">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 22 23"
                    fill="#FF5B00"
                  >
                    <path d="M19,0H17V5.908H16V2H6V0H4V5.908H3V2H0V23H22V2H19ZM6,18H4V16H6Zm0-4H4V12H6ZM8.207,9.793,9,10.586l2.293-2.293,1.414,1.414L9,13.414,6.793,11.207ZM10,18H8V16h2Zm4,0H12V16h2Zm0-4H12V12h2Zm4,4H16V16h2Zm0-4H16V12h2Z" />
                  </svg>
                  21st may, 2022
                </a>
                <a href="##">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 70 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="none" />
                    <path
                      d="M35 30.8571C41.3125 30.8571 46.4286 25.741 46.4286 19.4286C46.4286 13.1161 41.3125 8 35 8C28.6875 8 23.5714 13.1161 23.5714 19.4286C23.5714 25.741 28.6875 30.8571 35 30.8571ZM43 33.7143H41.5089C39.5268 34.625 37.3214 35.1428 35 35.1428C32.6786 35.1428 30.4821 34.625 28.4911 33.7143H27C20.375 33.7143 15 39.0892 15 45.7142V49.4285C15 51.7946 16.9196 53.7142 19.2857 53.7142H50.7143C53.0804 53.7142 55 51.7946 55 49.4285V45.7142C55 39.0892 49.625 33.7143 43 33.7143Z"
                      fill="#FF5B00"
                    />
                  </svg>
                  by admin
                </a>
              </div>
            </div>
            <div className="blogs__content">
              <h3>BLOG TITLE GOES HERE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem velit eligendi esse blanditiis incidunt libero
                impedit, consequatur perspiciatis facilis, aliquid, placeat
                vero.
              </p>
              <a href="##" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
