import React from 'react';
import { SubHeading } from "../../components";
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className="app__wrapper_info">

      <SubHeading title={"Contact Us"}/>
      <h1 className="headtext__cormorant" style={{marginBottom: "1rem"}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Plot- C21/1, T T C Indl Area, Thane Belapur Road, Vashi, Navi Mumbai</p>
        <p className="p__cormorant" style={{color: "#DCCA87", margin: "3rem 0 1rem 0"}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri : 10:00 AM - 10:00 PM</p>
        <p className="p__opensans">Sat - Sun : 10:00 AM - 11:00 PM</p>
      </div>

    </div> 

    <div className="app__wrapper_img">
      <img src={images.findus} alt="contact-card" style={{color: "black"}} />
    </div>

  </div>
);

export default FindUs;
