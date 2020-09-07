import React from "react";

import { Link } from "react-router-dom";

function header() {
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
                  <a href="/property">Bất Động Sản</a>
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
    </div>
  );
}

export default header;
