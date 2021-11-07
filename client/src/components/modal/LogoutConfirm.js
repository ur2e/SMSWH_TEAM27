import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import auth from "../../hoc/auth";
import "./modal.css";

function LogoutConfirm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        로그인 확인
      </Button>

      <div class="modal-dialog modal-sm">
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <div style={{ fontSize: "25px", textAlign: "center" }}>
              <p></p>
              <p>로그아웃 되었습니다</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "block", margin: "auto" }}>
              <Button variant="outline-dark" onClick={handleClose}>
                확인
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default LogoutConfirm;
