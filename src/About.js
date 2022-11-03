import React from "react";
import { Link } from "react-router-dom";

import logo from "./img/logo/logo.png";
import supportImage from "./img/service/support-img.jpg";
import testimonialFounder from "./img/testmonial/testimonial-founder.png";
import blog1 from "./img/blog/home-blog1.jpg";
import blog2 from "./img/blog/home-blog2.jpg";
import form from "./img/icon/form.png";
import logoFooter from "./img/logo/logo2_footer.png";

import aboutImage from "./img/hero/about.jpg";
import applyBackground from "./img/gallery/how-applybg.jpg";
import background from "./img/gallery/cv_bg.jpg";
import PreLoader from "./components/PreLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
      {/* <PreLoader /> */}
      <Header />
      <main>
        <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center"
            // data-background="assets/img/hero/about.jpg"
            style={{ backgroundImage: `url(${aboutImage})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>About us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="support-company-area fix section-padding2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  <div className="section-tittle section-tittle2">
                    <span>What we are doing</span>
                    <h2>24k Talented people are getting Jobs</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Mollit anim laborum duis au dolor in voluptate velit ess
                      cillum dolore eu lore dsu quality mollit anim laborumuis
                      au dolor in voluptate velit cillum.
                    </p>
                    <p>
                      Mollit anim laborum.Duis aute irufg dhjkolohr in re
                      voluptate velit esscillumlore eu quife nrulla parihatur.
                      Excghcepteur signjnt occa cupidatat non inulpadeserunt
                      mollit aboru. temnthp incididbnt ut labore mollit anim
                      laborum suis aute.
                    </p>
                    <Link to="/about" className="btn post-btn">
                      Post a job
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src={supportImage} alt="" />
                  <div className="support-img-cap text-center">
                    <p>Since</p>
                    <span>1994</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          //   data-background="assets/img/gallery/how-applybg.png"
          style={{ backgroundImage: `url(${applyBackground})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>Apply process</span>
                  <h2> How it works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Search a job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Apply for job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Get your job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src={testimonialFounder} alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src={testimonialFounder} alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src={testimonialFounder} alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          //   data-background="assets/img/gallery/cv_bg.jpg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1">FEATURED TOURS Packages</p>
                  <p className="pera2">
                    {" "}
                    Make a Difference with Your Online Resume!
                  </p>
                  <a href="#" className="border-btn2 border-btn4">
                    Upload your cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area blog-h-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>Our latest blog</span>
                  <h2>Our recent news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={blog1} alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <Link to="/single_blog">
                          Footprints in Time is perfect House in Kurashiki
                        </Link>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={blog2} alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <Link to="single_blog">
                          Footprints in Time is perfect House in Kurashiki
                        </Link>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
