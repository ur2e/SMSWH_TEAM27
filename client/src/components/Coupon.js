import React, { useState, useEffect } from "react";
import instance from "../lib/api/instance";
import { Row, Card, Button } from "react-bootstrap";
import back from "../asset/image/back2.png";
import back2 from "../asset/image/img.jpg";
import UseComplet from "./modal/UseComplet";

function Coupon(props) {
  const [couponList, setCouponList] = useState([]);

  useEffect(() => {
    const fetchCouponList = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${props.user.id}/${props.selectedStore.id}`
        );
        setCouponList(response.data.coupon); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchCouponList();
  }, [props.selectedStore]);

  const handleUse = async (id) => {
    await instance.delete(`/api/coupon/${id}`).then((res) => {
      return res.data;
    });
    alert("사용이 완료되었습니다!");
    window.location.replace("/");
  };
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {couponList.map((coupon, idx) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={back} />
            <Card.ImgOverlay>
              <Card.Body style={{ opacity: "0.9" }}>
                <Card>
                  <Card.Img src={back2} />
                  <Card.ImgOverlay>
                    <Card.Body
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {props.selectedStore.name}
                      </Card.Title>
                      <Card.Text></Card.Text>
                      <Card.Text>
                        <div style={{ fontSize: "1rem" }}>제공내역</div>
                        <div style={{ fontSize: "2rem" }}>{coupon.content}</div>
                      </Card.Text>
                      <Card.Text>
                        <div style={{ fontSize: "1rem", color: "red" }}>
                          유효기한
                        </div>
                        <div style={{ fontSize: "1.2rem" }}>
                          {coupon.end_date.substring(0, 10)}
                        </div>
                      </Card.Text>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          textAlign: "center",
                          marginTop: "2px",
                        }}
                      >
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => {
                            handleUse(coupon.id);
                          }}
                        >
                          쿠폰 사용하기
                        </Button>
                      </div>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Coupon;
