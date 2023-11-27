/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer.js";


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Global Warming - Deep Dive{" "}
                      </h1>
                      <p className="lead text-white">
A deep dive into the causes and consequences of Global Warming spanning Economic factors, internet consumption, global temperatures and more ...
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
          </div>

          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="shadow border-0s">
                        <CardBody className="py-5">
                        <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/bear.jpg")}
                        />
                          <h6 className="text-primary text-uppercase">
                            Global Temperatures
                          </h6>
                          <p className="description mt-3">
                          Global Heat on the Move: How Temperature Swings in Different Countries over years?
                          </p>
                          <Link to="/GlobalTemp">
                                <Button className="mt-4" color="primary">
                                    Learn more
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/factory.jpg")}
                        />
                          <h6 className="text-primary text-uppercase">
                            CO2 Emissions
                          </h6>
                          <p className="description mt-3">
                          CO2 Emissions Dynamics: How CO2 Emissions vary across various Nations over the years?
                          </p>
                          <Link to="/CO2">
                                <Button className="mt-4" color="primary">
                                    Learn more
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/electricity.png")}
                        />
                          <h6 className="text-primary text-uppercase">
                            Energy Usage
                          </h6>
                          <p className="description mt-3">
                          Energy in Flux: Tracing the Dynamic Evolution of Energy Use in Different Countries, shaped by diverse Factors.
                          </p>
                          <Link to="/Energy">
                                <Button className="mt-4" color="primary">
                                    Learn more
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/gdp.jpg")}
                        />
                          <h6 className="text-primary text-uppercase">
                            GDP
                          </h6>
                          <p className="description mt-3">
                          Global GDP Trends: Dynamic shifts in the GDP rankings of various countries over time.
                          </p>
                          <Link to="/GDP">
                                <Button className="mt-4" color="primary">
                                    Learn more
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/internet.jpg")}
                        />
                          <h6 className="text-primary text-uppercase">
                            Internet Consumption
                          </h6>
                          <p className="description mt-3">
                          Surfing the Digital Wave: Mapping the Evolution of Internet Usage in Countries Worldwide, Driven by Dynamic Factors.
                          </p>
                          <Link to="/Internet">
                                <Button className="mt-4" color="primary">
                                    Learn more
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
