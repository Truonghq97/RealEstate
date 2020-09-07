import React from "react";
import { Form, Nav } from "react-bootstrap";

import Header from "../partials/Header";

import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      {/* Start header Area */}
      <Header />
      {/* End header Area */}

      <section className="content">
        <div className="container">
          <div className="row ">
            <div className="col text-center">
              <h2>Profile</h2>
            </div>
          </div>
          <div className="content-head">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link>
                  <i class="fas fa-id-card profile-icon"></i>
                  <Link to="/home">Profile</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <i class="fas fa-bars profile-icon"></i>
                  <Link to="/home">Tin Đã Đăng</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="form-content">
            <div className="row">
              <div className="form-row">
                <div className="user-profile-img">
                  <div className="profile-thumb">
                    <img
                      _ngcontent-yfa-c11=""
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
          </div>
          {/* <Form className="form-content">
            
          </Form> */}
        </div>
      </section>
    </div>
  );
}

export default Profile;
