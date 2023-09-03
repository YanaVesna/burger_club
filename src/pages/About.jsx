import React from "react";
import Scrollable from "../Scrollable";
import Social from "../components/Social";
import { Link } from "react-router-dom";
import GoBack from "../components/GoBack";

const About = () => {
  const comments = [
    {
      foto: "/img/comments1.jpg",
      name: "Daniyal Sppra",
      city: "Newyork",
      text: "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
    },
    {
      foto: "/img/comments2.jpg",
      name: "Natasha D",
      city: "Salt Lake City",
      text: "It is professional, considers everyone's time, can think about the  There are many variations of passages.",
    },
    {
      foto: "/img/comments3.jpg",
      name: "Jack Sparrow",
      city: "San diego",
      text: "It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.",
    },
    {
      foto: "/img/comments1.jpg",
      name: "Nikita Tomson",
      city: "Newyork",
      text: "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
    },
    {
      foto: "/img/comments2.jpg",
      name: "Melen Farmer",
      city: "San francisko",
      text: "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
    },
    {
      foto: "/img/comments3.jpg",
      name: "Daniyal Sppra",
      city: "Newyork",
      text: "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
    },
  ];

  return (
    <div className="aboutpage">
      <div className="aboutpage__goback">
        <GoBack />
      </div>
      <div className="aboutpage__welcome">
        <div className="aboutpage__welcome-content">
          <h1>Welcome to Restaurantate</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <Link to="/menu" href="##" className="btn">
            view menu
          </Link>
        </div>
        <div className="aboutpage__welcome-img">
          <img
            style={{ position: "relative", top: "60px" }}
            src="/img/about_vie.jpg"
            alt="lamp"
          />
        </div>
      </div>
      <div className="aboutpage__story">
        <div className="aboutpage__story-img">
          <img src="/img/story.jpg" alt="story" />
        </div>
        <div className="aboutpage__story-content">
          <div className="aboutpage__story-content1">
            <h2>The Story</h2>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </p>
          </div>
          <div className="aboutpage__story-content2">
            <div className="aboutpage__story-content2-part1">
              <h2>1996</h2>
              <p>
                Lorem Ipsum is that it has a more-or-less normal distribution
              </p>
            </div>
            <div className="aboutpage__story-content2-part2">
              <h2>2021</h2>
              <p>
                Lorem Ipsum is that it has a more-or-less normal Content content
              </p>
            </div>
          </div>
          <div className="aboutpage__story-content3">
            <h1>JOSEFINE</h1>
            <img src="/img/josefine.png" alt="story" />
          </div>
        </div>
      </div>
      <div className="aboutpage__title">
        <h1>OUR TEAM</h1>
        <p>Meet Our Professional Chefs</p>
      </div>
      <div className="aboutpage__images">
        <div className="aboutpage__img">
          <div className="aboutpage__image">
            <img src="/img/shef1.png" alt="chefs" />
            <Social />
          </div>

          <h3>Avroko</h3>
          <p>Master Chef</p>
        </div>
        <div className="aboutpage__img">
          <div className="aboutpage__image">
            <img src="/img/shef2.png" alt="chefs" />
            <Social />
          </div>

          <h3>Evan Mattew</h3>
          <p>Master Chef</p>
        </div>
        <div className="aboutpage__img">
          <div className="aboutpage__image">
            <img src="/img/shef3.png" alt="chefs" />
            <Social />
          </div>

          <h3>Diane Clarkson</h3>
          <p>Senior Chef</p>
        </div>
        <div className="aboutpage__img">
          <div className="aboutpage__image">
            <img src="/img/shef4.png" alt="chefs" />
            <Social />
          </div>

          <h3>Dan Rafalin</h3>
          <p>Master Chef</p>
        </div>
        <div className="aboutpage__img">
          <div className="aboutpage__image">
            <img src="/img/shef5.png" alt="chefs" />
            <Social />
          </div>

          <h3>Dan Rafalin</h3>
          <p>Assistent Chef</p>
        </div>
        <div className="aboutpage__img">
          <div className="aboutpage__image">
            <img src="/img/shef6.png" alt="chefs" />
            <Social />
          </div>

          <h3>Evan Mattew</h3>
          <p>Senior Chef</p>
        </div>
      </div>

      <div className="aboutpage__title">
        <h1>Testimonial</h1>
        <p>What our clients say</p>
      </div>
      <div className="aboutpage__slider">
        <Scrollable _class="aboutpage__ittems">
          {comments.map((obj) => {
            return (
              <div
                className="aboutpage__ittem"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="aboutpage__info">
                  <img src={obj.foto} alt="client" />
                  <div className="aboutpage__content">
                    <h2>{obj.name}</h2>
                    <p>{obj.city}</p>
                  </div>
                </div>
                <div className="aboutpage__text">
                  <p>"{obj.text}"</p>
                </div>
              </div>
            );
          })}
        </Scrollable>
      </div>
      <img src="/img/fonmenu.png" alt="evening" />
    </div>
  );
};

export default About;
