import React from 'react';
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import './SpecialMenu.css';

// ₹

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">

    <div className="app__specialMenu-title">
      <SubHeading title={"Menu that fits your Palatte"} />
      <h1 className='headtext__cormorant'>Todays's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Ethnic Thalis</p>
        <div className="app__specialMenu-menu_items">
          {data.thalis.map((wine, index) => (
            <MenuItem key={index} title={wine.title} price={wine.price} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className='app__specialMenu-menu_heading'>Vegetarian Dishes</p>
        <div className="app__specialMenu-menu_items">
          {data.vegetarianDishes.map((cocktail, index) => (
            <MenuItem key={index} title={cocktail.title} price={cocktail.price} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className="custom__button">View More</button>
    </div>

  </div>
);

export default SpecialMenu;
