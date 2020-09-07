import React from "react";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";
import "./property.css";

import Header from "../partials/Header";
import Search from "../partials/Search";
import Footer from "../partials/Footer";

function property() {
  return (
    <div className="content">
      {/* Start header Area */}
      <Header />
      {/* End header Are */}

      {/* Start search Area */}
      <Search />
      {/* End search Area */}

      {/* Start content Area */}
      <div className=" property-content">
        <div className="container">
          <div className="row my-4 pt-4">
            <div className="col">
              <h4>215</h4>
              <h2>Kết quả tìm thấy</h2>
            </div>
          </div>

          <div className="row no-gutters list_property my-4">
            <div className="col-lg-3 col-md-3 view overlay">
              <img className="property_img" src="img/s1.jpg" alt="" />
              <div className="mask flex-center rgba-blue-light">
                <Link to="/property-detail">
                  <button className="text">Chi Tiết </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 pl-4">
              <div className="row">
                <div className="col-md-8 card_detail border-right col-sm-12 border-bottom">
                  <h4 className="pt-4">
                    Cần thuê phòng trọ Hoàng Văn Thụ - Quận Tân Bình
                  </h4>
                  <div className="row property_meta_wrap py-4">
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
                </div>
                <div className="col-md-4 col-sm-12 card_price">
                  <h4 className="pt-4">Mua/Thuê</h4>
                  <p className="price py-4"> 3,000,000 VNĐ/Tháng </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters list_property my-4">
            <div className="col-lg-3 col-md-3 view overlay">
              <img className="property_img" src="img/s1.jpg" alt="" />
              <div className="mask flex-center rgba-blue-light">
                <Link to="/property-detail">
                  <button className="text">Chi Tiết </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 pl-4">
              <div className="row">
                <div className="col-md-8 card_detail border-right col-sm-12 border-bottom">
                  <h4 className="pt-4">
                    Cần thuê phòng trọ Hoàng Văn Thụ - Quận Tân Bình
                  </h4>
                  <div className="row property_meta_wrap py-4">
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
                </div>
                <div className="col-md-4 col-sm-12 card_price">
                  <h4 className="pt-4">Mua/Thuê</h4>
                  <p className="price py-4"> 3,000,000 VNĐ/Tháng </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters list_property my-4">
            <div className="col-lg-3 col-md-3 view overlay">
              <img className="property_img" src="img/s1.jpg" alt="" />
              <div className="mask flex-center rgba-blue-light">
                <Link to="/property-detail">
                  <button className="text">Chi Tiết </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 pl-4">
              <div className="row">
                <div className="col-md-8 card_detail border-right col-sm-12 border-bottom">
                  <h4 className="pt-4">
                    Cần thuê phòng trọ Hoàng Văn Thụ - Quận Tân Bình
                  </h4>
                  <div className="row property_meta_wrap py-4">
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
                </div>
                <div className="col-md-4 col-sm-12 card_price">
                  <h4 className="pt-4">Mua/Thuê</h4>
                  <p className="price py-4"> 3,000,000 VNĐ/Tháng </p>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item">
                <Link to="#" class="page-link">
                  <span>First</span>
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </Link>
              </li>
              <li class="page-item pagination-circle">
                <Link to="#" class="page-link">
                  <span>1</span>
                </Link>
              </li>
              <li class="page-item pagination-circle">
                <Link to="#" class="page-link">
                  <span>2</span>
                </Link>
              </li>
              <li class="page-item pagination-circle">
                <Link to="#" class="page-link">
                  <span>3</span>
                </Link>
              </li>
              <li class="page-item pagination-circle">
                <Link to="#" class="page-link">
                  <span>4</span>
                </Link>
              </li>
              <li class="page-item pagination-circle">
                <Link to="#" class="page-link">
                  <span>5</span>
                </Link>
              </li>
              <li class="page-item">
                <Link to="#" class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </Link>
              </li>
              <li class="page-item">
                <Link to="#" class="page-link">
                  <span>Last</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* End content Area */}

      {/* Start footer Area */}
      <Footer />
      {/* End footer Area */}
    </div>
  );
}

export default property;
