import React from "react";
import { Modal, Button } from "react-bootstrap";

function CouponUse({ show, selectedStore }) {
  return (
    <>
      <div class="modal_">
        <Modal
          size="sm"
          show={show}
          animation={false}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Body>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              <p></p>
              <p>선다래</p>
            </div>
            <div
              style={{
                fontSize: "30px",
              }}
            >
              <p>1000원 할인</p>
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              <p>　</p>
              <p>쿠폰 사용 가능 기간</p>
            </div>
            <div
              style={{ fontSize: "25px", textAlign: "left", color: "#FF4848" }}
            >
              <p>　~ 2021.11.8</p>
              <Button size="lg" variant="success" type="submit">
                사용하기
              </Button>
              {"  "}
              <Button size="lg" variant="outline-secondary">
                닫기
              </Button>
              <p>　</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default CouponUse;
