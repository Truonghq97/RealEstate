import React from "react";

import "./style.css/Search.css";

function Search() {
  return (
    <div className="container">
      <div className="banner-content">
        <div className="search-field">
          <form className="search-form" action="#">
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center justify-content-center toggle-wrap">
                <div className="row">
                  <div className="col">
                    <h4 className="search-title">Tìm Kiếm Loại Tin</h4>
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
                            <span className="onoffswitch3-switch">Bán</span>
                            <span className="lnr lnr-arrow-right" />
                          </span>
                          <span className="onoffswitch3-inactive">
                            <span className="lnr lnr-arrow-left" />
                            <span className="onoffswitch3-switch">Mua</span>
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
                  <option data-display="Địa Điểm">Choose locations</option>
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
                  <option data-display="Loại BĐS">Property Type</option>
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
                <input type="text" id="range2" defaultValue name="range" />
              </div>
              <div className="col-lg-4 d-flex justify-content-end">
                <button className="primary-btn mt-50" style={{ height: 45 }}>
                  Tìm Kiếm
                  <span className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
