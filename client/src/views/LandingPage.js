import React from "react";
import { Button } from "react-bootstrap";

function LoginModal() {
  return (
    <div
      className="login_btn"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        height: "760px",
        backgroundColor: "#20232a",
      }}
    >
      <a href="http://ec2-18-218-203-237.us-east-2.compute.amazonaws.com:8080/auth/google">
        <Button size="lg" variant="light">
          학교 구글 계정으로 쿠게더 시작하기
        </Button>
      </a>
    </div>
  );
}

export default LoginModal;
