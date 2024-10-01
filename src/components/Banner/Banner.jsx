import React, { useEffect, useRef } from "react";
import img1 from "../../assets/banner/banner-1.png";
import img2 from "../../assets/banner/banner-2.png";
import TextAnimation from "./Animation";

const Banner = () => {
  return (
    <div>
      <section className="banner container">
        <div className="row d-flex flex-column-reverse flex-md-row justify-content-md-around justify-content-between">
          <div className="col-md-7 col-12 fw-bold">
            <p className="mb-5 fs-3 banner-p-1">
              <TextAnimation></TextAnimation>
            </p>
            <p className="fs-3 banner-p-2">
              Escape the Restoration Nightmare <br />
              <span className="banner-text-color">
                Sell Your Fire-Damaged Home
              </span>
            </p>
          </div>
          <div className="col-md-5 col-12 position-relative mt-5">
            <img
              src={img1}
              alt="Fire-damaged home banner 1"
              className="img-fluid banner-img1 mb-3"
              loading="lazy"
            />
            <img
              src={img2}
              alt="Fire-damaged home banner 2"
              className="img-fluid banner-img2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
