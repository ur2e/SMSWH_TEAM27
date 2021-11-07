import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Estimation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        평가 모달
      </Button>

      <div class="modal_">
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <p></p>
              <p>선다래</p>
            </div>
            <div style={{ fontSize: "17px", textAlign: "center" }}>
              <p>　</p>
              <p>마음에 드셨다면</p>
              <p>따봉을 눌러 </p>
              <p>다른 학우들에게 추천해 주세요</p>
              <Button variant="primary" type="submit">
                👍
              </Button>
              <p>　</p>
              <p>됐어요, 그냥 넘어갈게요~</p>
              <Button variant="outline-success" onClick={handleClose}>
                닫기
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Estimation;
