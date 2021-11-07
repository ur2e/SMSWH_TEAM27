import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import infoimage from "../asset/image/InfoImage.gif";

function Hello({ currentUser }) {
  console.log(currentUser);
  return (
    <Container>
      <div
        style={{
          height: "150px",
        }}
      >
        <Row>
          <Col>
            <Image
              style={{
                border: "none",
                float: "right",
                height: "10rem",
              }}
              src={infoimage}
              thumbnail
            />
            <div style={{ textAlign: "center", marginTop: "2.5%" }}>
              <div>
                반가워요 {currentUser.nickname} 송이 !
                <br />
                <br />
                제휴 쿠폰 관리와 함께 항상 숙명과 함께하세요 ๑•‿•๑
                <br />
                <div
                  style={{
                    fontSize: "0.7rem",
                    marginTop: "20px",
                    textAlign: "-webkit-right",
                  }}
                >
                  지도에 표시된 마커를 클릭하면 제휴 업체 정보와 나의 쿠폰을
                  확인하실 수 있습니다
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Hello;
