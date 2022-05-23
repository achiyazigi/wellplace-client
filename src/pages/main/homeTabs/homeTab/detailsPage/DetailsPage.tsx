import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  ThemeProvider,
} from "react-bootstrap";

function DetailsPage() {
  return (
    <Form style={{ color: "#9E4A6C" }}>
      <Row dir={"rtl"}>
        <Col>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>שם מלא</Form.Label>
            <Form.Control type="text" placeholder="הזינו" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label htmlFor="age-dropdown">גיל</Form.Label>
            <Form.Select id="age-dropdown">
              <option>צעיר</option>
              <option>גיל הביניים</option>
              <option>מבוגר</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row dir={"rtl"}>
        <Col>
          <Form.Group className="mb-3" controlId="formOriginCountry">
            <Form.Label>ארץ מוצא</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formNumOfChildren">
            <Form.Label>מספר ילדים</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row dir={"rtl"}>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formEducation">
            <Form.Label>השכלה</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row dir={"rtl"}>
        <Col>
          <Form.Group className="mb-3" controlId="" dir="ltr">
            <Form.Label htmlFor="rent">שכר דירה</Form.Label>
            <InputGroup>
              <InputGroup.Text>₪</InputGroup.Text>
              <Form.Control id="rent" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="" dir="ltr">
            <Form.Label htmlFor="rent">שכר דירה</Form.Label>
            <InputGroup>
              <InputGroup.Text>₪</InputGroup.Text>
              <Form.Control id="rent" />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DetailsPage;
