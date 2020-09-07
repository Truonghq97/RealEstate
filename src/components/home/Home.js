import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Start Header Area  */}
      <header className="default-header">
        <div className="menutop-wrap">
          <div className="menu-top container">
            <div className="d-flex justify-content-end align-items-center">
              <ul className="list">
                <li>
                  <a href="tel:+12312-3-1209">036-249-1422</a>
                </li>
                <li>
                  <Link to="/submit">Mua/Bán BĐS</Link>
                </li>
                <li>
                  <Link to="/login">Đăng Nhập</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/home">
              <img src="img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <a href="/home">Trang Chủ</a>
                </li>
                <li>
                  <Link to="/property">Bất Động Sản</Link>
                </li>
                <li>
                  <a href="#service">Dịch Vụ</a>
                </li>

                <li>
                  <a href="#contact">Liên Hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* End Header Area  */}

      {/* Start banner Area */}
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div
            className="row fullscreen align-items-center justify-content-center"
            style={{ height: 915 }}
          >
            <div className="banner-content col-lg-12 col-md-12">
              {/* <h1 className="text-uppercase">We’re Real Estate King</h1> */}
              <div className="search-field">
                <form className="search-form" action="#">
                  <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-center toggle-wrap">
                      <div className="row">
                        <div className="col">
                          <h4 className="search-title">
                            Tìm Kiếm Loại Tin
                          </h4>
                        </div>
                        <div className="col">
                          <div className="onoffswitch3 d-block mx-auto">
                            <input
                              type="checkbox"
                              name="onoffswitch3"
                              className="onoffswitch3-checkbox"
                              id="myonoffswitch3"
                              defaultChecked
                            />
                            <label
                              className="onoffswitch3-label"
                              htmlFor="myonoffswitch3"
                            >
                              <span className="onoffswitch3-inner">
                                <span className="onoffswitch3-active">
                                  <span className="onoffswitch3-switch">
                                    Bán
                                  </span>
                                  <span className="lnr lnr-arrow-right" />
                                </span>
                                <span className="onoffswitch3-inactive">
                                  <span className="lnr lnr-arrow-left" />
                                  <span className="onoffswitch3-switch">
                                    Mua
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6">
                      <select
                        name="location"
                        className="app-select form-control"
                        required
                      >
                        <option data-display="Địa Điểm">
                          Choose locations
                        </option>
                        <option value={1}>Dhaka</option>
                        <option value={2}>Rangpur</option>
                        <option value={3}>Bogra</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6">
                      <select
                        name="property-type"
                        className="app-select form-control"
                        required
                      >
                        <option data-display="Loại BĐS">
                          Property Type
                        </option>
                        <option value={1}>Property type 1</option>
                        <option value={2}>Property type 2</option>
                        <option value={3}>Property type 3</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6">
                      <select
                        name="bedroom"
                        className="app-select form-control"
                        required
                      >
                        <option data-display="Số Phòng Ngủ">Bedrooms</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-4 range-wrap">
                      <p>Giá:</p>
                      <input type="text" id="range" defaultValue name="range" />
                    </div>
                    <div className="col-lg-4 range-wrap">
                      <p>Diện Tích:</p>
                      <input
                        type="text"
                        id="range2"
                        defaultValue
                        name="range"
                      />
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                      <button
                        className="primary-btn mt-50"
                        style={{ height: 45 }}
                      >
                        Tìm Kiếm
                        <span className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}

      {/* Start property Area */}
      <section className="property-area section-gap relative" id="property">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 pb-40 header-text">
              <h1>Bất Động Sản</h1>
              <p>Bài đăng mới cập nhật.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="single-property">
                <div className="images">
                  <img
                    className="img-fluid mx-auto d-block"
                    src="img/s1.jpg"
                    alt=""
                  />
                  <Link to="/property-detail"><span>Chi Tiết</span></Link>
                </div>
                <div className="desc">
                  <div className="top d-flex justify-content-between">
                    <h4>
                      <Link to="#">04 Bed Duplex</Link>
                    </h4>
                    <h4>$3.5M</h4>
                  </div>
                  <div className="middle">
                    <div className="d-flex justify-content-start">
                      <p>Phòng Ngủ: 04</p>
                      <p>Nhà Tắm: 03</p>
                      <p>Diện Tích: 750m2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="single-property">
                <div className="images">
                  <img
                    className="img-fluid mx-auto d-block"
                    src="img/s2	.jpg"
                    alt=""
                  />
                  <Link to="/abc"><span>Chi Tiết</span></Link>
                </div>
                <div className="desc">
                  <div className="top d-flex justify-content-between">
                    <h4>
                      <Link to="#">04 Bed Duplex</Link>
                    </h4>
                    <h4>$3.5M</h4>
                  </div>
                  <div className="middle">
                    <div className="d-flex justify-content-start">
                      <p>Phòng Ngủ: 04</p>
                      <p>Nhà Tắm: 03</p>
                      <p>Diện Tích: 750m2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="single-property">
                <div className="images">
                  <img
                    className="img-fluid mx-auto d-block"
                    src="img/s2	.jpg"
                    alt=""
                  />
                  <Link to="/abc"><span>Chi Tiết</span></Link>
                </div>
                <div className="desc">
                  <div className="top d-flex justify-content-between">
                    <h4>
                      <Link to="#">04 Bed Duplex</Link>
                    </h4>
                    <h4>$3.5M</h4>
                  </div>
                  <div className="middle">
                    <div className="d-flex justify-content-start">
                      <p>Phòng Ngủ: 04</p>
                      <p>Nhà Tắm: 03</p>
                      <p>Diện Tích: 750m2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End property Area */}

      {/* Start service Area */}
      <section className="service-area section-gap" id="service">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 pb-40 header-text">
              <h1>Why we are the best</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-30">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-user" />
                  Expert Technicians
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-30">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-license" />
                  Professional Service
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-30">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-phone" />
                  Great Support
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-rocket" />
                  Technical Skills
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-diamond" />
                  Highly Recomended
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service">
                <h4>
                  <span className="lnr lnr-bubble" />
                  Positive Reviews
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End service Area */}

      {/* Start contact Area */}
      <section classname="about-area">
        <section className="contact-area" id="contact">
          <div className="container-fluid">
            <div className="row align-items-center d-flex justify-content-start">
              <div className="col-lg-6 col-md-12 contact-left no-padding">
                <div style={{ width: "100%", height: 545 }} id="map" />
              </div>
              <div className="col-lg-4 col-md-12 pt-100 pb-100">
                <form
                  className="form-area"
                  id="myForm"
                  action="mail.php"
                  method="post"
                >
                  <input
                    name="fname"
                    placeholder="Enter your name"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'"
                    className="common-input mt-10"
                    required
                    type="text"
                  />
                  <input
                    name="email"
                    placeholder="Enter email address"
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                    className="common-input mt-10"
                    required
                    type="email"
                  />
                  <textarea
                    className="common-textarea mt-10"
                    name="message"
                    placeholder="Messege"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Messege'"
                    required
                    defaultValue={""}
                  />
                  <button className="primary-btn mt-20">
                    Send Message
                    <span className="lnr lnr-arrow-right" />
                  </button>
                  <div className="alert-msg"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* End about Area */}

      {/* Start footer Area */}
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className id="mc_embed_signup">
                  <form
                    target="_blank"
                    noValidate="true"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <div className="d-flex flex-row">
                      <input
                        className="form-control"
                        name="EMAIL"
                        placeholder="Enter Email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Email '"
                        required
                        type="email"
                      />
                      <button className="click-btn btn btn-default">
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        />
                      </button>
                      <div style={{ position: "absolute", left: "-5000px" }}>
                        <input
                          name="b_36c4fd991d266f23781ded980_aefe40901a"
                          tabIndex={-1}
                          defaultValue
                          type="text"
                        />
                      </div>
                      {/* <div class="col-lg-4 col-md-4">
												<button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
											</div>  */}
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Instragram Feed</h6>
                <ul className="instafeed d-flex flex-wrap">
                  <li>
                    <img src="img/i1.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i2.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i3.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i4.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i5.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i6.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i7.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i8.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <Link to="#">
                    <i className="fab fa-facebook" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
            <p className="footer-text m-0">Copyright © All rights reserved </p>
          </div>
        </div>
      </footer>
      {/* End footer Area */}
    </div>
  );
}

export default Home;
