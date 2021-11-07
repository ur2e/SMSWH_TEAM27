import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LoginModal from "../components/modal/LoginModal";
function LoginPage() {
  const [show, setShow] = useState(false);
  const showLoginModal = () => {
    setShow(true);
  };
  const closeLoginModal = () => {
    setShow(false);
  };
  return (
    <div>
      <Button onClick={showLoginModal}>로그인</Button>
      <LoginModal show={show} closeLoginModal={closeLoginModal} />
    </div>
  );
}

export default LoginPage;
