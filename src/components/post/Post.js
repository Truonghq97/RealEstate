import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "./Post.css";

function Post() {
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
              <h2>Đăng Tin Bất Động Sản</h2>
            </div>
          </div>

          <Form className="form-content">
            <Col>
              <Form.Group controlId="tieude">
                <Form.Label>Tiêu Đề</Form.Label>
                <Form.Control type="text" name="tieude" />
              </Form.Group>
            </Col>

            <Form.Row>
              <Col md={6}>
                <Form.Group as={Col} controlId="loaitindang">
                  <Form.Label>Loại Tin Đăng</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Chọn Loại Tin"
                    type="text"
                    name="loaitindang"
                  >
                    <option>Chọn Loại Tin</option>
                    <option>Tin Mua/Thuê</option>
                    <option>Tin Bán/Cho Thuê</option>
                    <option>Dự Án</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group as={Col} controlId="loaibds">
                  <Form.Label>Loại Bất Động Sản</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Chọn Loại BĐS"
                    type="text"
                    name="loaibds"
                  >
                    <option>Chọn Loại Hình BĐS</option>
                    <option>Tin Mua/Thuê</option>
                    <option>Tin Bán/Cho Thuê</option>
                    <option>Dự Án</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Col>
              <Form.Group controlId="mota">
                <Form.Label>Mô Tả</Form.Label>
                <Form.Control as="textarea" type="text" name="mota" rows="7" />
              </Form.Group>
            </Col>

            <Form.Row>
              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="dientich">
                  <Form.Label>
                    Diện Tích (m<sup>2</sup>)
                  </Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="mucgia">
                  <Form.Label>Mức Giá</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="donvi">
                  <Form.Label>Đơn Vị</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="tinhthanh">
                  <Form.Label>Tỉnh/Thành Phố</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Chọn Tỉnh/Thành Phố"
                    name="tinhthanh"
                  >
                    <option>Chọn Tỉnh/Thành</option>
                    <option>Tin Mua/Thuê</option>
                    <option>Tin Bán/Cho Thuê</option>
                    <option>Dự Án</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="quanhuyen">
                  <Form.Label>Quận/Huyện</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Chọn Quận/Huyện"
                    name="quanhuyen"
                  >
                    <option>Chọn Quận/Huyện</option>
                    <option>Tin Mua/Thuê</option>
                    <option>Tin Bán/Cho Thuê</option>
                    <option>Dự Án</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="phuongxa">
                  <Form.Label>Phương Xã</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Chọn Phường Xã"
                    name="phuongxa"
                  >
                    <option>Chọn Phường Xã</option>
                    <option>Tin Mua/Thuê</option>
                    <option>Tin Bán/Cho Thuê</option>
                    <option>Dự Án</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="hoten">
                  <Form.Label>Họ Tên/Đơn Vị Đại Diện</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col md={4} sm={12}>
                <Form.Group as={Col} controlId="sdt">
                  <Form.Label>SĐT</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Form.Row>

            <Col>
              <div className="upload-img">
                <form>
                  <i class="fas fa-cloud-upload-alt upload-icon"></i>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Image
                    </label>
                  </div>
                </form>
              </div>
            </Col>

            <Col className="mt-4">
              <Button variant="primary" type="submit">
                Đăng Tin
              </Button>
            </Col>
          </Form>
        </div>
      </section>
      {/* End content Area */}

      {/* Start footer Area */}
      <Footer />
      {/* End footer Area */}
    </div>
  );
}

export default Post;
