import Logo from "./Logo";
import { Link } from "react-router-dom";
import Social from "../components/Social";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to="/notfound" href="##">
          Instagram Feed
        </Link>
        <div className="footer__ll">
          <Logo className />
        </div>
        <Social />
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts1">
          <div className="footer__title">
            <p>CONTACT</p>
          </div>
          <div className="footer__content">
            <p>5 Rue Delaw, 500400 Berlin</p>
            <p>
              <span>Call</span> - +123 456 78 90
            </p>
            <p>
              <span>benoit@mail.com</span>
            </p>
          </div>
        </div>
        <div className="footer__contacts2">
          <div className="footer__title2">
            <p>
              Join our mailing list for updates, <br />
              Get news & offers events.
            </p>
          </div>
          <div className="footer__content2">
            <input className="footer__left" placeholder="e-mail"></input>
            <a href="##" className="footer__right">
              Subscribe
            </a>
          </div>
        </div>
        <div className="footer__contacts3">
          <div className="footer__title3">
            <p>WORKING HOURS</p>
          </div>
          <div className="footer__content3">
            <p>
              <span>Mon – Fri:</span> 7.00am – 6.00pm
            </p>
            <p>
              <span>Sat:</span> 7.00am – 6.00pm
            </p>
            <p>
              <span>Sun:</span> 8.00am – 6.00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
