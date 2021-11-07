import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import instance from "../lib/api/instance";
import StoreDetail from "../components/StoreDetail";
import Header from "../components/Header";
import Hello from "../components/Hello";
function StorePage() {
  const user = useSelector((state) => state.user.userData);
  const [storeList, setStoreList] = useState([]);
  const [symbolList, setSymbolList] = useState([]);
  const [clickedSymbolList, setClickedSymbolList] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };
    const fetchStoreList = async () => {
      try {
        const response = await instance
          .get(`/api/store/${currentUser.id}`)
          .then((response) => {
            return response.data.store;
          });
        setStoreList(response); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    const fetchSymbolList = async () => {
      try {
        const response = await instance.get(`/api/symbol`).then((response) => {
          return response.data;
        });
        setSymbolList(response); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {}
    };
    fetchStoreList();
    fetchSymbolList();
    load();
  }, [user]);
  const symbolClick = (symbol_type) => {
    const searchSymbolList = async () => {
      try {
        console.log(symbol_type);
        const response = await instance
          .post(`/api/symbol`, { symbol_type })
          .then((res) => {
            console.log(res.data);
            return res.data;
          });
        setStoreList(response);
      } catch (e) {}
    };
    searchSymbolList();
  };

  return (
    <div>
      <Header />
      <Hello currentUser={currentUser} />
      <Container style={{ marginTop: "20px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            {symbolList.map((symbol) => {
              var temp_src = `https://iljipractice.s3.ap-northeast-2.amazonaws.com/symbol/${symbol.symbol_type}.png`;
              return (
                <div
                  style={{
                    height: "50px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Container fluid>
                    <Row style={{ height: "50px" }}>
                      <Col xs={4} md={1} style={{ width: "70px" }}>
                        <Image
                          src={temp_src}
                          rounded
                          style={{ position: "absolute", width: "50px" }}
                          onClick={() => {
                            symbolClick(symbol.symbol_type);
                          }}
                        />
                      </Col>
                      <Col style={{ alignSelf: "center" }}>
                        <div>{symbol.content}</div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
          </div>
          <div className="stores">
            {storeList.map((store) => {
              return <StoreDetail user={currentUser} selectedStore={store} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StorePage;
