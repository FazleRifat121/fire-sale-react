import React from "react";
import img from "../../assets/how its work/Line 12.png";
const Links = () => {
  return (
    <div>
      <section class="container-fluid mt-5">
        <div class="row p-md-5 gap-5 gap-md-0">
          <div class="col-md-8 col-12 my-auto">
            <img src={img} class="w-100" alt="" />
          </div>
          <div class="col-md-4 col-12">
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="" class="nav-link">
                  <i class="fa-brands fa-x-twitter border 1px rounded-5 fs-5 p-1 or-bg me-1"></i>
                  @FireSaleNow
                </a>
              </li>
              <li class="mb-2">
                <a href="" class="nav-link">
                  <i class="fa-brands fa-instagram border 1px rounded-5 fs-5 p-1 or-bg me-1"></i>
                  @FireSaleProperties
                </a>
              </li>
              <li class="mb-2">
                <a href="" class="nav-link">
                  <i class="fa-solid fa-envelope border 1px rounded-5 fs-5 p-1 or-bg me-1"></i>
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
