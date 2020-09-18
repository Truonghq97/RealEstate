import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "./Profile.css";

function Profile() {
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
              <h2>Profile</h2>
            </div>
          </div>

          <div className="content-head">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/profile" className="user-item-active" style={{textDecoration: 'none'}}>
                    <i class="fas fa-id-card profile-icon-active"></i>
                    <p className="text-profile">Profile</p>
                  </Link>
                  <span className="span"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/my-properties" className="user-item" style={{textDecoration: 'none'}}>
                    <i class="fas fa-bars profile-icon"></i>
                    <p className="text-post">Tin Đã Đăng</p>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="form-row ml-4">
                <div className="user-profile-img">
                  <div className="profile-thumb">
                    <img
                      alt="avatar"
                      class="profile-thumb"
                      src="https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121231710-stock-illustration-male-default-avatar-profile-gray.jpg"
                    />
                  </div>
                </div>
                <div className="profile-img-controls ml-4 pt-4">
                  <button type="button" class="btn btn-outline-primary">
                    Change Avatar
                  </button>
                  <p className="pl-2">(*Tài khoản chưa xác thực)</p>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-4 col-sm-6 mb-3 pl-4">
                <label>
                  <i class="fas fa-user pr-2"></i>
                  Họ Tên
                </label>
                <p>Truong</p>
              </div>
              <div className="col-md-4 col-sm-6 mb-3">
                <label>
                  <i class="fas fa-venus-mars pr-2"></i>
                  Giới Tính
                </label>
                <p>Male</p>
              </div>
              <div className="col-md-4 col-sm-6 mb-3">
                <label>
                  <i class="fas fa-birthday-cake pr-2"></i>
                  Ngày Sinh
                </label>
                <p>07/08/1997</p>
              </div>
              <div className="col-md-4 col-sm-6 pl-4">
                <label>
                  <i class="fas fa-envelope pr-2"></i>
                  Email
                </label>
                <p>truonghq97@gmail.com</p>
              </div>
              <div className="col-md-4 col-sm-6">
                <label>
                  <i class="fas fa-mobile-alt pr-2"></i>
                  SĐT
                </label>
                <p>0362491422</p>
              </div>
              <div className="col-md-4 col-sm-6">
                <label>
                  <i class="fas fa-map-marker-alt pr-2"></i>
                  Địa Chỉ
                </label>
                <p>HCM city, Vietnam</p>
              </div>
            </div>

            <div className="row">
              <div className="form-row">
                <div className="profile-img-controls ml-4 pt-4">
                  <button type="button" class="btn btn-primary">
                    Cập Nhật
                  </button>
                  <button type="button" class="btn btn-primary">
                    Đổi Mật Khẩu
                  </button>
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

export default Profile;
