import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PreLoader from "./components/PreLoader";

export default function Contact() {
  return (
    <>
      <PreLoader />
      <Header />
      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
