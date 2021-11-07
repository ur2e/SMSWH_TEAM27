import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, Fade } from "react-bootstrap";
import heart50 from "../asset/image/heart50.png";
import history from "../asset/image/history.png";
import diet from "../asset/image/diet.png";
import coffee from "../asset/image/coffee.png";
import instance from "../lib/api/instance";

function StoreDetail(props) {
  const [symboleList, setSymboleList] = useState([]);
  useEffect(() => {
    const fetchSymboleList = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${props.user.id}/${props.selectedStore.id}`
        );
        setSymboleList(response.data.symbol); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchSymboleList();
  }, [symboleList]);

  let bg_name = props.selectedStore.img;
  let bg_src = `https://iljipractice.s3.ap-northeast-2.amazonaws.com/background/${bg_name}.png`;

  return (
    <div style={{ width: "60%", height: "300px" }}>
      {props.selectedStore ? (
        <Card className="bg-dark text-white">
          <Card.Img src={bg_src} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>
              <div style={{ fontSize: "3vw", fontWeight: "bold" }}>
                {props.selectedStore.name}
              </div>
            </Card.Title>
            <div
              style={{
                width: "400px",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              <Container>
                <Row>
                  <div>
                    {symboleList.map((symbol, idx) => {
                      let temp_src = `https://iljipractice.s3.ap-northeast-2.amazonaws.com/symbol/${symbol.symbol_type}.png`;
                      return (
                        <img
                          src={temp_src}
                          alt={symbol.symbol_type}
                          style={{ width: "50px", marginLeft: "10px" }}
                        />
                      );
                    })}
                  </div>
                </Row>
              </Container>
            </div>
            <Card.Text style={{ marginLeft: "10px" }}>
              {props.selectedStore.content}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      ) : null}
    </div>
  );
}

export default StoreDetail;
