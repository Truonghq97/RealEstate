import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "./myProperties.css";

function myProperties() {
  return (
    <div>
      {/* Start header Area */}
      <Header />
      {/* End header Area */}

      {/* Start content Area */}
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>Tin Đã Đăng</h2>
            </div>
          </div>

          <div className="row content-head">
            <div className="col mt-2 property-count-box">
              <h4>12</h4>
              <h3>Tin Đã Đăng</h3>
            </div>

            <div className="user-item-box">
              <Nav>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/profile">
                      <i class="fas fa-id-card profile-icon"></i>
                      Profile
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/my-properties">
                      <i class="fas fa-bars profile-icon"></i>
                      Tin Đã Đăng
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className="properties-content">
          
            <div className="row no-gutters my-4 propertie-detail">
              <div className="col-lg-3 col-md-12 my-properties-thumb">
                <img className="property_img" src="img/s2.jpg" alt="" />
              </div>
              <div className="col-lg-3 c0l-md-12 my-properties-title px-4">
                TỔNG HỢP NHỮNG CĂN HỘ RẺ NHẤT THỊ TRƯỜNG TẠI MASTERI TD THỜI
                ĐIỂM HIỆN TẠI. 0902340994
              </div>
              <div className="col-lg-3 col-md-12 my-properties-publish px-4">
                <div className="property-date">
                  <h5>
                    <i class="fas fa-calendar-alt">09/05/2019</i>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 my-properties-controls px-2">
                <Link to="/" className="pr-4">
                  <i class="fas fa-eye px-1"></i>
                  Chi Tiết
                </Link>
                <Link to="/" className="pr-4">
                  <i class="fas fa-pencil-alt px-1"></i>
                  Chỉnh Sửa
                </Link>
                <Link to="/">
                  <i class="fas fa-trash px-1"></i>
                  Xóa
                </Link>
              </div>
            </div>

            <div className="row no-gutters my-4 propertie-detail">
              <div className="col-lg-3 col-md-12 my-properties-thumb">
                <img className="property_img" src="img/s2.jpg" alt="" />
              </div>
              <div className="col-lg-3 c0l-md-12 my-properties-title px-4">
                TỔNG HỢP NHỮNG CĂN HỘ RẺ NHẤT THỊ TRƯỜNG TẠI MASTERI TD THỜI
                ĐIỂM HIỆN TẠI. 0902340994
              </div>
              <div className="col-lg-3 col-md-12 my-properties-publish px-4">
                <div className="property-date">
                  <h5>
                    <i class="fas fa-calendar-alt">09/05/2019</i>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 my-properties-controls px-2">
                <Link to="/" className="pr-4">
                  <i class="fas fa-eye px-1"></i>
                  Chi Tiết
                </Link>
                <Link to="/" className="pr-4">
                  <i class="fas fa-pencil-alt px-1"></i>
                  Chỉnh Sửa
                </Link>
                <Link to="/">
                  <i class="fas fa-trash px-1"></i>
                  Xóa
                </Link>
              </div>
            </div>

            <div className="row no-gutters my-4 propertie-detail">
              <div className="col-lg-3 col-md-12 my-properties-thumb">
                <img className="property_img" src="img/s2.jpg" alt="" />
              </div>
              <div className="col-lg-3 c0l-md-12 my-properties-title px-4">
                TỔNG HỢP NHỮNG CĂN HỘ RẺ NHẤT THỊ TRƯỜNG TẠI MASTERI TD THỜI
                ĐIỂM HIỆN TẠI. 0902340994
              </div>
              <div className="col-lg-3 col-md-12 my-properties-publish px-4">
                <div className="property-date">
                  <h5>
                    <i class="fas fa-calendar-alt">09/05/2019</i>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 my-properties-controls px-2">
                <Link to="/" className="pr-4">
                  <i class="fas fa-eye px-1"></i>
                  Chi Tiết
                </Link>
                <Link to="/" className="pr-4">
                  <i class="fas fa-pencil-alt px-1"></i>
                  Chỉnh Sửa
                </Link>
                <Link to="/">
                  <i class="fas fa-trash px-1"></i>
                  Xóa
                </Link>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      {/* End content Area */}
      
      {/* Start footer Area */}
      <Footer />
      {/* End footer Area */}
    </div>
  );
}

export default myProperties;
