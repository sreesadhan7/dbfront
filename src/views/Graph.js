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
// nodejs library that concatenates classes

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
// import Chart from "../components/Chart.js";


class Graph extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        dropDownValue1: "select",
        dropDownValue2: "select",
        dropDownValue3: "select",
        dropDownValue4: "select",
        dropDownValue5: "select"
    };
    this.changeValue = this.changeValue.bind(this);
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  changeValue(e, n) {
    console.log(e);
    console.log(this);
    switch(n){
        case 1:
            this.setState({dropDownValue1: e.currentTarget.textContent});
        case 2:
            this.setState({dropDownValue2: e.currentTarget.textContent});
        case 3:
            this.setState({dropDownValue3: e.currentTarget.textContent});
        case 4:
            this.setState({dropDownValue4: e.currentTarget.textContent});
        case 5:
            this.setState({dropDownValue5: e.currentTarget.textContent});
    }
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
              <container>
              <Row className="justify-content-center">
                <Col lg="2">
                    <div align="center">
                    <h2 className='text-white'>Country</h2>
                    <UncontrolledDropdown group>
                    <DropdownToggle caret>
                    {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        <div onClick={this.changeValue(1)}>Option1</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue(1,2)}>Option2</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue(3)}>Option3</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue(4)}>Option4</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue(5)}>Option5</div>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                </Col>
                <Col lg="2">
                    <div align="center">
                    <h2 className='text-white'>Country</h2>
                    <UncontrolledDropdown group>
                    <DropdownToggle caret>
                        {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option1</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option2</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option3</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option4</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option5</div>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                </Col>
                <Col lg="2">
                    <div align="center">
                    <h2 className='text-white'>Country</h2>
                    <UncontrolledDropdown group>
                    <DropdownToggle caret>
                        {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option1</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option2</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option3</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option4</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option5</div>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                </Col>
                <Col lg="2">
                    <div align="center">
                    <h2 className='text-white'>Country</h2>
                    <UncontrolledDropdown group>
                    <DropdownToggle caret>
                        {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option1</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option2</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option3</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option4</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option5</div>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                </Col>
                <Col lg="2">
                    <div align="center">
                    <h2 className='text-white'>Country</h2>
                    <UncontrolledDropdown group>
                    <DropdownToggle caret>
                        {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option1</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option2</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option3</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option4</div>
                        </DropdownItem>
                        <DropdownItem>
                        <div onClick={this.changeValue}>Option5</div>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                </Col>
              </Row>
              <Row>
              <Col className="d-flex justify-content-center">
              <div>
              <h1></h1>
              <Button className="btn-1 ml-1" color="info" type="button">
                  Submit
              </Button>
              </div>
              </Col>
              </Row>
              </container>
            </section>
            <section>
            </section>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Graph;
