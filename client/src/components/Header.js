import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import instance from "../lib/api/instance";

function Header({ currentUser }) {
  const token = localStorage.getItem("token");

  const logout = async () => {
    await instance
      .get(`/api/user/logout/${token}`)
      .then((response) => response.data);
    localStorage.removeItem("token");
    window.location.replace("/login");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">쿠게더</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/mypage">마이페이지</Nav.Link>
              <Nav.Link href="/store">위드숙명</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" onClick={logout}>
                로그아웃
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
