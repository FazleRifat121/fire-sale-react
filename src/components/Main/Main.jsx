import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import How from "../How/How";
import Request from "../Request/Request";
import Links from "../Links/Links";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <How></How>
      <Request></Request>
      <Links></Links>
      <Footer></Footer>
    </div>
  );
};

export default Main;
