import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FillDetails from "./FillDetails.svg";
import TlvBackground from "./TlvBackground.svg";

function HomeTab() {
  return (
    <Container>
      <Row dir="rtl">
        <Col xs={6}></Col>
        <Col xs={3} style={{ marginTop: "20%" }}>
          <div className="d-grid gap-2">
            <img src={FillDetails} width="200px" />
            <Link to={"/detailsPage"}>
              <Button variant="success">פרטים אישיים</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Link to={"/detailsPage"}>
        <Button
          variant="success"
          style={{ marginTop: "1350px", marginLeft: 200 }}
        >
          פרטים אישיים
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 2000px;
  width: 100vw;
  background: url(${TlvBackground});
  background: circle;
  background-position: right top;

  background-repeat: no-repeat;
  background-size: 100%;
`;

export default HomeTab;
