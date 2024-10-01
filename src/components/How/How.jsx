import React from "react";
import img1 from "../../assets/how its work/icon-1.png";
import img2 from "../../assets/how its work/icon-2.png";
import img3 from "../../assets/how its work/icon-3.png";
const How = () => {
  return (
    <div>
      <section class="container special-bg pt-4 h-100 border rounded-4 mb-5">
        <h1 class="text-center fw-normal">Here's How It Works</h1>
        <div class="row container d-flex flex-column flex-md-row justify-content-center align-items-center">
          {/* <!-- first card  --> */}
          <div class="col-md-4 mt-3 col-12">
            <div class="card bg-transparent border-0">
              <img
                src={img1}
                class="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-center">
                  We conduct a <br />
                  thorough evaluation <br />
                  of your property.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- second card  --> */}
          <div class="col-md-4 mt-3 col-12">
            <div class="card bg-transparent border-0">
              <img
                src={img2}
                class="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-center text-nowrap">
                  If your property <br />
                  meets our criteria,
                  <br />
                  we will make you an <br />
                  <span class="fw-bold">offer</span>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- third card  --> */}
          <div class="col-md-4 mt-3 col-12">
            <div class="card bg-transparent border-0">
              <img
                src={img3}
                class="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-center text-nowrap">
                  You keep your <br />
                  insurance settlement and <br />
                  the proceeds from selling <br />
                  your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;
