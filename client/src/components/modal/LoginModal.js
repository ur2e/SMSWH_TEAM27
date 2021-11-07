import React from "react";
import { Modal, Button } from "react-bootstrap";
import GoogleLoginImg from "../../asset/image/google_login.svg";
import KakaoLoginImg from "../../asset/image/kakao_login.svg";

function LoginModal({ show, closeLoginModal }) {
  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>소셜 로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login_btn">
            <a href="http://ec2-18-218-203-237.us-east-2.compute.amazonaws.com:8080/auth/google">
              <img src={GoogleLoginImg} alt="googleImg" className="google" />
            </a>
            <a href="http://ec2-18-218-203-237.us-east-2.compute.amazonaws.com:8080/auth/kakao">
              <img src={KakaoLoginImg} alt="kakakoImg" className="kakao" />
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={closeLoginModal}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
