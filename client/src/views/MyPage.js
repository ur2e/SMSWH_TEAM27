import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Coupon from "../components/Coupon";
import back2 from "../asset/image/img.jpg";
import back from "../asset/image/back2.png";

import { Row, Col, Tabs, Tab, Container, Card } from "react-bootstrap";
import instance from "../lib/api/instance";

function MyPage() {
  const user = useSelector((state) => state.user.userData);
  const [currentUser, setCurrentUser] = useState("hello");
  const [availCoup, setAvailCoup] = useState([]);
  const [availCoupStore, setAvailCoupStore] = useState([]);
  const [expCoup, setExpCoup] = useState([]);
  const [expCoupStore, setExpCoupStore] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };
    const fetchAvailCoup = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${currentUser.id}/available`
        );
        setAvailCoup(response.data.coupon); // 데이터는 response.data 안에 들어있습니다.
        setAvailCoupStore(response.data.store_name);
      } catch (e) {}
    };
    const fetchExpCoup = async () => {
      try {
        const response = await instance.get(
          `/api/coupon/${currentUser.id}/expired`
        );
        setExpCoup(response.data.coupon); // 데이터는 response.data 안에 들어있습니다.
        setExpCoupStore(response.data.store_name);
      } catch (e) {}
    };
    load();
    fetchAvailCoup();
    fetchExpCoup();
  }, [user, availCoup]);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Hello currentUser={currentUser} />

      <Container>
        <Tabs
          defaultActiveKey="available"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ borderColor: "grey" }}
        >
          <Tab eventKey="available" title="사용 가능한 쿠폰">
            <Row
              xs={1}
              md={5}
              style={{
                marginLeft: "50px",
                marginTop: "50px",
                marginRight: "50px",
                marginBottom: "50px",
              }}
            >
              {availCoup.map((coup, idx) => {
                return (
                  <Card style={{ width: "15rem" }}>
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
                                {availCoupStore[idx]}
                              </Card.Title>
                              <Card.Text></Card.Text>
                              <Card.Text>
                                <div style={{ fontSize: "1rem" }}>제공내역</div>
                                <div style={{ fontSize: "2rem" }}>
                                  {coup.content}
                                </div>
                              </Card.Text>
                              <Card.Text>
                                <div style={{ fontSize: "1rem", color: "red" }}>
                                  유효기한
                                </div>
                                <div style={{ fontSize: "1.2rem" }}>
                                  {coup.end_date.substring(0, 10)}
                                </div>
                              </Card.Text>
                            </Card.Body>
                          </Card.ImgOverlay>
                        </Card>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="expired" title="사용 만료된 쿠폰">
            <Row
              xs={1}
              md={5}
              style={{
                marginLeft: "50px",
                marginTop: "50px",
                marginRight: "50px",
                marginBottom: "50px",
              }}
            >
              {expCoup.map((coup, idx) => {
                return (
                  <Card style={{ width: "15rem" }}>
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
                                {expCoupStore[idx]}
                              </Card.Title>
                              <Card.Text></Card.Text>
                              <Card.Text>
                                <div style={{ fontSize: "1rem" }}>제공내역</div>
                                <div style={{ fontSize: "2rem" }}>
                                  {coup.content}
                                </div>
                              </Card.Text>
                              <Card.Text>
                                <div style={{ fontSize: "1rem", color: "red" }}>
                                  유효기한
                                </div>
                                <div style={{ fontSize: "1.2rem" }}>
                                  {coup.end_date.substring(0, 10)}
                                </div>
                              </Card.Text>
                            </Card.Body>
                          </Card.ImgOverlay>
                        </Card>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                );
              })}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default MyPage;
