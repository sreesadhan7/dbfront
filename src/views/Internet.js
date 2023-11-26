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
import Chart_m_5 from "../components/Chart_m_5.js";
import Divider from "../components/Divider.js"


class Internet extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        country: "United States",
        agg: "Y",
        from: "2005",
        to: "2020",
        xData: [],
        yData1: [],
        yData2: []
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeAgg = this.changeAgg.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.countryList = this.countryList.bind(this);
  }

  componentDidMount() {
    this.fetchChartData();
  }
  
  fetchChartData() {
    fetch('http://127.0.0.1:5000/mockup_5', {
      method: 'POST',
      body: JSON.stringify({
        country: this.state.country,
        agg: this.state.agg,
        from: this.state.from,
        to: this.state.to
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({xData: data.data.x, yData1: data.data.y1, yData2: data.data.y2});
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  


   countryList(){
    const countries = ['Afghanistan','Albania','Algeria','Angola','Argentina','Australia','Austria','Bahrain','Bangladesh','Barbados','Benin','Bolivia','Botswana','Brazil','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo Republic','Cuba','Cyprus','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eswatini','Finland','France','Gabon','Gambia','Germany','Ghana','Greece','Guatemala','Guinea','Guinea-Bissau','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kenya','Kuwait','Laos','Lebanon','Lesotho','Liberia','Libya','Madagascar','Malawi','Malaysia','Mali','Malta','Mauritania','Mauritius','Mexico','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Saudi Arabia','Senegal','Seychelles','Sierra Leone','South Africa','South Korea','Spain','Sri Lanka','St. Lucia','Sweden','Switzerland','Syria','Tanzania','Thailand','Togo','Trinidad and Tobago','Tunisia','Uganda','United Arab Emirates','United Kingdom','United States','Uruguay','Venezuela','Vietnam','Zambia','Zimbabwe'];
    console.log("countries", countries);
    const options = []
    for(let i=0; i<countries.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeCountry(e,countries[i])}><div>{countries[i]}</div></DropdownItem>);
    }
    return options;
  }
  yearList(param){
    const yearList = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

  changeCountry(e, n) {
    console.log(e);
    console.log(this);
    console.log(n)
    this.setState({country: n});
    if(this.state.agg != "select" && this.state.from != "select" && this.state.to != "select"){
        fetch('http://127.0.0.1:5000/mockup_5', {
            method: 'POST',
            body: JSON.stringify({
                country: n,
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
                this.setState({xData: data.data.x, yData1: data.data.y1, yData2: data.data.y2});
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeAgg(e, n) {
    console.log(e);
    console.log(this);
    console.log(n)
    this.setState({agg: e.currentTarget.textContent});
    if(this.state.country != "select" && this.state.from != "select" && this.state.to != "select"){
        fetch('http://127.0.0.1:5000/mockup_5', {
            method: 'POST',
            body: JSON.stringify({
              country: this.state.country,
              agg: n,
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
                this.setState({xData: data.data.x, yData1: data.data.y1, yData2: data.data.y2});
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
        if(this.state.country != "select" && this.state.from != "select" && this.state.agg != "select"){
            fetch('http://127.0.0.1:5000/mockup_5', {
                method: 'POST',
                body: JSON.stringify({
                  country: this.state.country,
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
                    this.setState({xData: data.data.x, yData1: data.data.y1, yData2: data.data.y2});
                    // Handle data
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
    else if(param="from"){
        if(this.state.country != "select" && this.state.to != "select" && this.state.agg != "select"){
            fetch('http://127.0.0.1:5000/mockup_5', {
                method: 'POST',
                body: JSON.stringify({
                    country: this.state.country,
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
                    this.setState({xData: data.data.x, yData1: data.data.y1, yData2: data.data.y2});
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
                        {/* <h1 className='text-white'>IUP VS Growth Rate</h1> */}
                    </div>
                </Row>
              </container>
            </section>  
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>Internet Usage percent and YOY Growth rate </h3>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div align="center">
                                    <h5 className='text-black'>Country</h5>
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
                        <br></br>
                        <Row>
                            <Col>
                                <div align="center">
                                <h5>Date Range</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                          <Col></Col>
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
                            <Col></Col>
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
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        { <Chart_m_5 x={this.state.xData} y1={this.state.yData1} y2={this.state.yData2}/> }
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p><li>The chart displays the percentage of users in a selected country and the year-on-year growth rate of users.</li>

                            <li>This data can be used to assess how internet usage contributes to raising awareness about sustainability.</li></p>
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

export default Internet;
