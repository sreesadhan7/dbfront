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


class CO2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        topN: "select",
        agg: "select",
        from: "select",
        to: "select",
        data_m_2_1: null
    };
    this.changeTopN = this.changeTopN.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.topNCountries = this.topNCountries.bind(this);
  }
   topNCountries(){
    const years = [5,10, 15]
    console.log("years", years);
    const options = []
    for(let i=0; i<years.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeTopN(e,years[i])}><div>{years[i]}</div></DropdownItem>);
    }
    return options;
  }
  yearList(param){
    const yearList = [1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

  changeTopN(e, n) {
    console.log(e);
    console.log(this);
    console.log(n)
    this.setState({topN: n});
    if(this.state.from != "select" && this.state.to != "select"){
        fetch('http://127.0.0.1:5000/mockup_2_1', {
            method: 'POST',
            body: JSON.stringify({
                topN: n,
                agg: this.state.agg,
                from: this.state.from,
                to: this.state.to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                this.setState({data_m_2_1:data.data});
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeYear(e, n, param) {
    console.log(e);
    console.log(this);
    console.log(n)
    if(param=="to"){
        this.setState({to: n});
    }
    else{
        this.setState({from: n});
    }
    if(param=="to"){
        if(this.state.topN != "select" && this.state.from != "select"){
            fetch('http://127.0.0.1:5000/mockup_2_1', {
                method: 'POST',
                body: JSON.stringify({
                  topN: this.state.topN,
                  agg: this.state.agg,
                  from: this.state.from,
                  to: n
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    this.setState({data_m_2_1:data.data});
                    // Handle data
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
    else if(param="from"){
        if(this.state.topN != "select" && this.state.to != "select"){
            fetch('http://127.0.0.1:5000/mockup_2_1', {
                method: 'POST',
                body: JSON.stringify({
                    topN: this.state.topN,
                    agg: this.state.agg,
                    from: n,
                    to: this.state.to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    this.setState({data_m_2_1:data.data});
                    // Handle data
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
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
                                    {this.state.topN}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.topNCountries()}
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
                                    <h2 className='text-black'>Top N Countries</h2>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.topN}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.topNCountries()}
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
                                    <h2 className='text-black'>Top N Countries</h2>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.topN}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.topNCountries()}
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
                    <Col lg="9" className="align-self-center">
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

export default CO2;
