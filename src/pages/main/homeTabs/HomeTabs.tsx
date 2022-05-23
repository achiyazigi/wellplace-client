import React from "react";
import { Button, Nav, Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Logo from "../../../components/Logo";
import DetailsPage from "./homeTab/detailsPage/DetailsPage";
import HomeTab from "./homeTab/HomeTab";
function HomeTabs() {
  return (
    <BrowserRouter>
      <Tab.Container defaultActiveKey="home" id="uncontrolled-tab-example">
        <div className={"navbar"} style={{ backgroundColor: "#F4F4F4" }}>
          <Nav>
            <Nav.Item>
              <Nav.Link
                eventKey="about-us"
                title="About Us"
                as={Link}
                to={"/aboutUs"}
                className="my-50"
              >
                About Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link
                eventKey="home"
                as={Link}
                to={"/home"}
                defaultChecked={true}
              >
                <Logo />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Tab.Container>
      <Tab.Content>
        <Routes>
          <Route path="/aboutUs" element={<div>add about us page</div>} />
          <Route path="/home" element={<HomeTab />} />
          <Route path="/detailsPage" element={<DetailsPage />} />
        </Routes>
      </Tab.Content>
    </BrowserRouter>
  );
}

export default HomeTabs;
