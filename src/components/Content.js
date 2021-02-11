/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ImgOne from "../images/ice1.jpg";
import ImgTwo from "../images/ice2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImgOne} alt="image" className="h-full rounded mb-20 shadow" />
        <div className="cc">
          <h2 className="text-2xl mb-2">Vanilla Ice Cream</h2>
          <p className="mb-2">it's simple and it goes with everything.</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImgTwo} alt="image" className="h-full rounded mb-20 shadow" />
        <div className="cc">
          <h2 className="text-2xl mb-2">Strawberry ice cream</h2>
          <p className="mb-2">It is made by blending in fresh strawberries.</p>
          <span>$16</span>
        </div>
      </div>
    </>
  );
};

export default Content;
