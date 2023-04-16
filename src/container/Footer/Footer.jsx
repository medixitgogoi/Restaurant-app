import React from 'react';
import './Footer.css';
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <div className='app__footer section__padding'>

    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet</p>
        <p className="p__opensans">+91 1234567890</p>
        <p className="p__opensans">+91 9876543210</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 style={{ fontFamily: "'Cormorant Upright', serif", color: "var(--color-white)", fontSize: "30px", marginBottom: "0.8rem" }}>SaffronSpice</h1>
        <p className="p__opensans">The best way to find yourself is to lose yourself in the servce of others.</p>
        <img src={images.spoon} alt="spoon-img" style={{ marginTop: '15' }} className="spoon__img" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon-Fri:</p>
        <p className="p__opensans">08:00 AM - 12:00 AM</p>
        <p className="p__opensans">Sat-Sun</p>
        <p className="p__opensans">07:00 AM - 12:00 AM</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights reserved</p>
    </div>

  </div>
);

export default Footer;
