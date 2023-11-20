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
import Chart_m_2_1 from "../components/Chart_m_2_1.js";
import Divider from "../components/Divider.js"


class DatabaseCount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        count: this.getCount()
    };
    this.getCount = this.getCount.bind(this);
  }

  getCount() {
        fetch('http://127.0.0.1:5000/records_count', {
            method: 'POST',
            body: JSON.stringify({
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                this.setState({count:data.data});
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }

  render() {
    console.log("hello",this.state);
    return (
      <>
        <Navbar />
        <main ref="main">
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped">
              <div className="shape shape-style-1 shape-default">
              </div>
              <container>
                <Row className="justify-content-center">
                    <div className="text-center mt-5">
                        <h1 className='text-white'>Graph Title</h1>
                    </div>
                </Row>
              </container>
            </section>  
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h2>Something something something</h2>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div align="center">
                                    <h2 className='text-black'>Top N Countries</h2>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList()}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h2 className='text-black'>Aggregation View</h2>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.agg}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"Y")}>
                                    <div>Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"2Y")}>
                                    <div>2Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"3Y")}>
                                    <div>3Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"4Y")}>
                                    <div>5Y</div>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h4>Date Range</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("from")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("to")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_2_1 data={this.state.data_m_2_1}/>
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p>Something something something Something something something Something something something Something something something Something something something Something something something Something something something</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
            <Divider></Divider>
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h2>Something something something</h2>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div align="center">
                                    <h2 className='text-black'>Country</h2>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList()}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h2 className='text-black'>Aggregation View</h2>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.agg}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"Y")}>
                                    <div>Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"2Y")}>
                                    <div>2Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"3Y")}>
                                    <div>3Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"4Y")}>
                                    <div>5Y</div>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h4>Date Range</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("from")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("to")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        {/* <Chart x={this.state.xData} y1={this.state.yData1} y2={this.state.yData2}/> */}
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p>Something something something Something something something Something something something Something something something Something something something Something something something Something something something</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
            <Divider></Divider>
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h2>Something something something</h2>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div align="center">
                                    <h2 className='text-black'>Country</h2>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList()}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h2 className='text-black'>Aggregation View</h2>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.agg}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"Y")}>
                                    <div>Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"2Y")}>
                                    <div>2Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"3Y")}>
                                    <div>3Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"4Y")}>
                                    <div>5Y</div>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h4>Date Range</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("from")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("to")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        {/* <Chart x={this.state.xData} y1={this.state.yData1} y2={this.state.yData2}/> */}
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p>Something something something Something something something Something something something Something something something Something something something Something something something Something something something</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
            <Divider></Divider>
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h2>Something something something</h2>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div align="center">
                                    <h2 className='text-black'>Country</h2>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList()}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h2 className='text-black'>Aggregation View</h2>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.agg}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"Y")}>
                                    <div>Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"2Y")}>
                                    <div>2Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"3Y")}>
                                    <div>3Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"4Y")}>
                                    <div>5Y</div>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h4>Date Range</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("from")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("to")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        {/* <Chart x={this.state.xData} y1={this.state.yData1} y2={this.state.yData2}/> */}
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p>Something something something Something something something Something something something Something something something Something something something Something something something Something something something</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default DatabaseCount;
