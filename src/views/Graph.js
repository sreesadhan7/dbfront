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
import Chart from "../components/Chart.js";
import Divider from "../components/Divider.js"

function getCountries(){
    fetch('http://127.0.0.1:5000/countries', {
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
            console.log(data.data);
           return data.data;
         })
         .catch((err) => {
            console.log(err.message);
         });
  }

class Graph extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        country: "select",
        agg: "select",
        from: "select",
        to: "select",
        xData: [],
        yData1: [],
        yData2: []
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeAgg = this.changeAgg.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.countryList = this.countryList.bind(this);
  }
   countryList(){
    const countries = ['Afghanistan','Albania','Algeria','Angola','Argentina','Australia','Austria','Bahrain','Bangladesh','Barbados','Benin','Bolivia','Botswana','Brazil','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo Republic','Cuba','Cyprus','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eswatini','Finland','France','Gabon','Gambia','Germany','Ghana','Greece','Guatemala','Guinea','Guinea-Bissau','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kenya','Kuwait','Laos','Lebanon','Lesotho','Liberia','Libya','Madagascar','Malawi','Malaysia','Mali','Malta','Mauritania','Mauritius','Mexico','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Saudi Arabia','Senegal','Seychelles','Sierra Leone','South Africa','South Korea','Spain','Sri Lanka','St. Lucia','Sweden','Switzerland','Syria','Tanzania','Thailand','Togo','Trinidad and Tobago','Tunisia','Uganda','United Arab Emirates','United Kingdom','United States','Uruguay','Venezuela','Vietnam','Zambia','Zimbabwe'];
    console.log("countries", countries);
    const options = []
    for(let i=0; i<countries.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeCountry(e,countries[i])}><div>{countries[i]}</div></DropdownItem>);
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
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
  changeCountry(e, n) {
    console.log(e);
    console.log(this);
    console.log(n)
    this.setState({country: n});
    if(this.state.agg != "select" && this.state.from != "select" && this.state.to != "select"){
        fetch('http://127.0.0.1:5000/db', {
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
    let a;
    switch(n){
        case "Y":
            a = 1
        case "2Y":
            a = 2
        case "3Y":
            a = 3
        case "5Y":
            a = 5
    }
    if(this.state.country != "select" && this.state.from != "select" && this.state.to != "select"){
        fetch('http://127.0.0.1:5000/db', {
            method: 'POST',
            body: JSON.stringify({
              country: this.state.country,
              agg: a,
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
            fetch('http://127.0.0.1:5000/db', {
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
            fetch('http://127.0.0.1:5000/db', {
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
                    <div>
                        <h1 className='graphTitle text-white'>Graph Title</h1>
                    </div>
                </Row>
              </container>
            </section>  
            <section>
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
                                    <DropdownMenu>
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
                                <DropdownMenu>
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
                                <h2>Date Range</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                <h4 className='text-black'>From</h4>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.from}
                                </DropdownToggle>
                                <DropdownMenu>
                                        {this.yearList("from")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col>
                                <div align="center">
                                <h4 className='text-black'>To</h4>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.to}
                                </DropdownToggle>
                                <DropdownMenu>
                                        {this.yearList("to")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="align-self-center">
                        <Chart x={this.state.xData} y1={this.state.yData1} y2={this.state.yData2}/>
                    </Col>
                    <Col className="align-self-center">
                        <div>
                            <p>Something something something Something something something Something something something Something something something Something something something Something something something Something something something</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
            <Divider></Divider>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Graph;
