import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PreLoader from "./components/PreLoader";
import aboutImage from "./img/hero/about.jpg";

export default function BlogDetails() {
  return (
    <>
      {/* <PreLoader /> */}
      <Header />
      <main>
        <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center"
            // data-background="./img/hero/about.jpg"
            style={{ backgroundImage: `url(${aboutImage})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>UI/UX Designer</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="job-post-company pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-8">
                <div className="single-job-items mb-50">
                  <div className="job-items">
                    <div className="company-img company-img-details">
                      <a href="#">
                        <img src={require("./img/icon/job-list1.png")} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens,
                          Greece
                        </li>
                        <li>₦3500 - ₦4000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-post-details">
                  <div className="post-details1 mb-50">
                    <div className="small-section-tittle">
                      <h4>Job Description</h4>
                    </div>
                    <p>
                      It is a long established fact that a reader will beff
                      distracted by vbthe creadable content of a page when
                      looking at its layout. The pointf of using Lorem Ipsum is
                      that it has ahf mcore or-lgess normal distribution of
                      letters, as opposed to using, Content here content here
                      making it look like readable.
                    </p>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Required Knowledge, Skills, and Abilities</h4>
                    </div>
                    <ul>
                      <li>System Software Development</li>
                      <li>
                        Mobile Applicationin iOS/Android/Tizen or other platform
                      </li>
                      <li>
                        Research and code , libraries, APIs and frameworks
                      </li>
                      <li>
                        Strong knowledge on software development life cycle
                      </li>
                      <li>Strong problem solving and debugging skills</li>
                    </ul>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Education + Experience</h4>
                    </div>
                    <ul>
                      <li>3 or more years of professional design experience</li>
                      <li>Direct response email experience</li>
                      <li>Ecommerce website design experience</li>
                      <li>Familiarity with mobile and web apps preferred</li>
                      <li>Experience using Invision a plus</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  <div className="small-section-tittle">
                    <h4>Job Overview</h4>
                  </div>
                  <ul>
                    <li>
                      Posted date : <span>12 Aug 2019</span>
                    </li>
                    <li>
                      Location : <span>New York</span>
                    </li>
                    <li>
                      Vacancy : <span>02</span>
                    </li>
                    <li>
                      Job nature : <span>Full time</span>
                    </li>
                    <li>
                      Salary : <span>₦7,800 yearly</span>
                    </li>
                    <li>
                      Application date : <span>12 Sep 2020</span>
                    </li>
                  </ul>
                  <div className="apply-btn2">
                    <a href="#" className="btn">
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="post-details4  mb-50">
                  <div className="small-section-tittle">
                    <h4>Company Information</h4>
                  </div>
                  <span>demo</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <ul>
                    <li>
                      Name: <span>demo </span>
                    </li>
                    <li>
                      Web : <span> demo.com</span>
                    </li>
                    <li>
                      Email: <span>carrier.demo@gmail.com</span>
                    </li>
                  </ul>
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
