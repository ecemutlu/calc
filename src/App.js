import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./Calculator";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Image, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import PersonelListesi from "./PersonelListesi";

export default function App() {
  return (
    <BrowserRouter>
      <Row>
        <Col xs="12">
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/">
                <Image src={require("./assets/calc.jpg")} width="30"></Image>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/calc/addition">Addition</Nav.Link>
                  <Nav.Link href="/calc/substraction">Substraction</Nav.Link>
                  <Nav.Link href="/calc/multiplication">
                    Multiplication
                  </Nav.Link>
                  <Nav.Link href="/calc/division">Division</Nav.Link>
                  <Nav.Link href="/calc/all">All</Nav.Link>
                  <Nav.Link href="/personel">Personel</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="" element={<HomePage />}></Route>
            <Route path="calc/:mode" element={<Calculator />} />
            <Route path="personel" element={<PersonelListesi />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Col>
      </Row>
    </BrowserRouter>
  );
}
