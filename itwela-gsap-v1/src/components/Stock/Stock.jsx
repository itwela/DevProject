import React, { useState, useEffect } from "react";
import plane from '../../../public/paperplane.png'
import plane2 from '../../../public/paperplane-2.png'
import './Stock.css'



function StockMarquee() {
  const Plane = plane
  const Plane2 = plane2

  return (
    <>
    {/* left */}
      <div className="screener-wrapper">
        <div className="screener-cont">
          <br />
          <img id="screener" src={Plane2} alt="plane" />
        </div>
      </div>



      {/* right */}
      <div className="screener-wrapper-2">
        <div className="screener-cont-2">
          <br />
          <img id="screener-2" src={Plane} alt="plane" />
        </div>
      </div>

    </>
  );
}

export default StockMarquee;



