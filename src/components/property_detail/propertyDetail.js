import React from "react";
import { Link } from "react-router-dom";
// import { Row, Col, Container } from 'react-bootstrap'

import Carousel from "react-bootstrap/Carousel";
import "./propertyDetail.css";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function propertyDetail() {
  return (
    <div>
      {/* Start header Area */}
      <Header />
      {/* End header Area */}

      {/* Start content Area */}
      <section className="content">
        <div className="container">
          <div className="row ">
            <div className="col pb-5 text-center">
              <h2>Chi Tiết Bất Động Sản</h2>
            </div>
          </div>
          <div className="row">
            <div className="col h-75 p-3 m-1  border border-danger">
              <div className="row text-center">
                <div className="col-md-8">
                  <h3>
                    ÁN CĂN HỘ CHARMINGTON IRIS, TÔN THẤT THUYẾT, QUẬN 4, 72M =
                    2PN, 2WC GIÁ 3,5 TỶ (Chính chủ)
                  </h3>

                  <span>
                    Phường Tăng Nhơn Phú B - Quận 9 - Thành Phố Hồ Chí Minh
                  </span>
                </div>
                <div className="col-md-4">
                  <h4>Bán / Cho Thuê</h4>
                  <h4>3.000.000 VNĐ/Căn</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col h-75 p-3 m-1 bg-warning">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="carousel-img"
                    src="img/p1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="carousel-img"
                    src="img/p2.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-img"
                    src="img/p3.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div className="row no-gutters my-4">
            <div className="col-md-8 mb-4 property_main_content">
              <div className="property_main mx-4 my-4">
                <div className="property_content my-4">
                  <div className="property_meta  border-bottom">
                    <p className="title">Loại BĐS : </p>
                    <p className="id" style={{ color: "red" }}>
                      {" "}
                      &ensp; Căn Hộ Chung Cư{" "}
                    </p>
                  </div>
                </div>
                <div className="row property_meta_wrap">
                  <div className="col-md-4 col-sm-4">
                    <p>Phòng Ngủ</p>
                    <span>
                      <i class="fas fa-bed icon"></i>&ensp;&ensp;1
                    </span>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <p>Phòng Tắm</p>
                    <span>
                      <i class="fas fa-shower icon"></i>&ensp;&ensp;1
                    </span>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <p>Diện Tích</p>
                    <span>
                      <i class="far fa-square icon"></i>&ensp;&ensp;123 m
                      <sup>2</sup>
                    </span>
                  </div>
                </div>
                <h4
                  className="property_heading mt-4 pb-3"
                  style={{ color: "red" }}
                >
                  Mô Tả
                </h4>
                <div>
                  <p>
                    Cần bán lại căn hộ Charmington Iris Quận 4 - số 76 Đường Tôn
                    Thất Thuyết.
                  </p>
                </div>
                <div className="mt-4">
                  <h4 style={{ color: "red" }}>Thông Tin Bất Động Sản</h4>
                  <ul className="pl-4">
                    <li className="my-3 ">
                      <span className="title" style={{ color: "red" }}>
                        Địa Chỉ:
                      </span>
                      <span className="value">
                        &ensp;Phường 01 - Quận 4 - Thành Phố Hồ Chí Minh
                      </span>
                    </li>
                    <li>
                      <span className="title" style={{ color: "red" }}>
                        Loại Bất Động Sản:
                      </span>
                      <span className="value">&ensp;Căn Hộ Chung Cư</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mt-4" style={{ color: "red" }}>
                    Tiện Ích
                  </h4>
                  <ul className="pl-4 d-flex ">
                    <li className="my-3 mr-5 ">
                      <i class="fas fa-check"></i>
                      <span className="value">&ensp;Internet</span>
                    </li>
                    <li className="my-3 ml-5 ">
                      <i class="fas fa-check"></i>
                      <span className="value">&ensp;Hồ Bơi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4  text-center">
              <div className="mx-4 property_main_content">
                <div className="pt-4">
                  <Link to="#">
                    <p>Thông Tin Liên Hệ</p>
                  </Link>
                  <h3 className="pb-3">Huynh Quang Truong</h3>
                </div>

                <div className="infor">
                  <p className="contact office">
                    <span style={{ color: "red" }}> Số Điện Thoại: </span>
                    <span> 0362491422</span>
                  </p>
                  <p className="contact mobile pb-4">
                    <span style={{ color: "red" }}> Email: </span>
                    <span> truonghq97@gmail.com</span>
                  </p>
                </div>
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

export default propertyDetail;
