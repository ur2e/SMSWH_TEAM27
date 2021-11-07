import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Symbol({ symbolList }) {
  return (
    <Container>
      {symbolList.map((symbol, idx) => (
        <div
          style={{ height: "50px", marginTop: "10px", marginBottom: "10px" }}
        >
          <Container fluid>
            <Row style={{ height: "50px" }}>
              <Col xs={4} md={1} style={{ width: "70px" }}>
                <Image
                  src={symbol.symbol_type}
                  rounded
                  style={{ position: "absolute", width: "50px" }}
                />
              </Col>
              <Col style={{ alignSelf: "center" }}>
                <div style={{ fontSize: "1.2rem" }}>
                  50명 이상의 숙명인들이 좋아한 곳
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </Container>
  );
}

export default Symbol;
