import React from "react";
import img from "../../assets/how its work/Line 12.png";
const Links = () => {
  return (
    <div>
      <section className="container-fluid mt-5">
        <div className="row p-md-5 gap-5 gap-md-0">
          <div className="col-md-8 col-12 my-auto">
            <img src={img} className="w-100" alt="" />
          </div>
          <div className="col-md-4 col-12">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="" className="nav-link">
                  <i className="fa-brands fa-x-twitter border 1px rounded-5 fs-5 p-1 or-bg me-1"></i>
                  @FireSaleNow
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="nav-link">
                  <i className="fa-brands fa-instagram border 1px rounded-5 fs-5 p-1 or-bg me-1"></i>
                  @FireSaleProperties
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="nav-link">
                  <i className="fa-solid fa-envelope border 1px rounded-5 fs-5 p-1 or-bg me-1"></i>
                  @info@Fire-SaleProperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Links;
