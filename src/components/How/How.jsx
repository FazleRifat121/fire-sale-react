import React from "react";
import img1 from "../../assets/how its work/icon-1.png";
import img2 from "../../assets/how its work/icon-2.png";
import img3 from "../../assets/how its work/icon-3.png";
const How = () => {
  return (
    <div>
      <section className="container special-bg pt-4 h-100 border rounded-4 mb-5">
        <h1 className="text-center fw-normal">Here's How It Works</h1>
        <div className="row container d-flex flex-column flex-md-row justify-content-center align-items-center">
          {/* <!-- first card  --> */}
          <div className="col-md-4 mt-3 col-12">
            <div className="card bg-transparent border-0">
              <img
                src={img1}
                className="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">
                  We conduct a <br />
                  thorough evaluation <br />
                  of your property.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- second card  --> */}
          <div className="col-md-4 mt-3 col-12">
            <div className="card bg-transparent border-0">
              <img
                src={img2}
                className="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center text-nowrap">
                  If your property <br />
                  meets our criteria,
                  <br />
                  we will make you an <br />
                  <span className="fw-bold">offer</span>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- third card  --> */}
          <div className="col-md-4 mt-3 col-12">
            <div className="card bg-transparent border-0">
              <img
                src={img3}
                className="card-img-top img-fluid w-25 mx-auto"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center text-nowrap">
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
