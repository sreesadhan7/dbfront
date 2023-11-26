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
import Chart_m_1_1 from "../components/Chart_m_1_1.js";
import Chart_m_1_2 from "../components/Chart_m_1_2.js";
import Chart_m_1_3 from "../components/Chart_m_1_3.js";
import Divider from "../components/Divider.js"


class GlobalTemp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        m_1_1: {
            country: "United States",
            agg: "Y",
            from: "1960",
            to: "2018",
            data: null
        },
        m_1_2: {
            from: "1960",
            to: "2018",
            data: null
        },
        m_1_3: {
            country: "United States",
            from: "1970",
            to: "2020",
            data: null
        }
    };
    // this.get_m_1_2 = this.get_m_1_2.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
    this.changeAgg = this.changeAgg.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.countryList = this.countryList.bind(this);
  }

  componentDidMount() {
    this.fetchData('mockup_1_1', this.state.m_1_1.country, this.state.m_1_1.agg, this.state.m_1_1.from, this.state.m_1_1.to);
    setTimeout(() => {
        this.fetchData('mockup_1_2', 'junk', 'junk', this.state.m_1_2.from, this.state.m_1_2.to);
    }, 600); // Delay the second request by 500ms
    setTimeout(() => {
        this.fetchData('mockup_1_3', this.state.m_1_3.country, 'junk', this.state.m_1_3.from, this.state.m_1_3.to);
    }, 1200); // Delay the second request by 500ms
  }

  fetchData(url, country, agg, from, to) {
    fetch(`http://127.0.0.1:5000/${url}`, {
      method: 'POST',
      body: JSON.stringify({country, agg, from, to}),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response) => response.json())
    .then((data) => {
      switch(url) {
        case 'mockup_1_1':
          this.setState({ m_1_1: { ...this.state.m_1_1, data: data.data } });
          break;
        case 'mockup_1_2':
          this.setState({ m_1_2: { ...this.state.m_1_2, data: data.data } });
          break;
        case 'mockup_1_3':
          this.setState({ m_1_3: { ...this.state.m_1_3, data: data.data } });
          break;
        // Add more cases here if you have more URLs to handle
        default:
          console.log('Unknown URL');
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
   countryList(url){
    const countries = ['Afghanistan','Albania','Algeria','Angola','Argentina','Australia','Austria','Bahrain','Bangladesh','Barbados','Benin','Bolivia','Botswana','Brazil','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo Republic','Cuba','Cyprus','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eswatini','Finland','France','Gabon','Gambia','Germany','Ghana','Greece','Guatemala','Guinea','Guinea-Bissau','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kenya','Kuwait','Laos','Lebanon','Lesotho','Liberia','Libya','Madagascar','Malawi','Malaysia','Mali','Malta','Mauritania','Mauritius','Mexico','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Saudi Arabia','Senegal','Seychelles','Sierra Leone','South Africa','South Korea','Spain','Sri Lanka','St. Lucia','Sweden','Switzerland','Syria','Tanzania','Thailand','Togo','Trinidad and Tobago','Tunisia','Uganda','United Arab Emirates','United Kingdom','United States','Uruguay','Venezuela','Vietnam','Zambia','Zimbabwe'];
    console.log("countries", countries);
    const options = []
    for(let i=0; i<countries.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeCountry(e,countries[i], url)}><div>{countries[i]}</div></DropdownItem>);
    }
    return options;
  }
  yearList11(param, url){
    const yearList = [1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

  yearList12(param, url){
    const yearList = [1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

  yearList13(param, url){
    const yearList = [1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782,
        1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804,
        1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815,
        1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826,
        1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837,
        1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848,
        1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859,
        1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870,
        1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881,
        1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892,
        1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903,
        1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914,
        1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925,
        1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936,
        1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947,
        1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958,
        1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
        1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980,
        1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
        1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
        2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
        2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

//   get_m_1_2(){
//     fetch('http://127.0.0.1:5000/mockup_1_2', {
//             method: 'POST',
//             body: JSON.stringify({
//               // Add parameters here
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//              .then((response) => response.json())
//              .then((data) => {
//                 console.log(data);
//                 var temp = this.state.m_1_2;
//                 temp.data = data.data;
//                 this.setState({m_1_2:temp});
//                 // Handle data
//              })
//              .catch((err) => {
//                 console.log(err.message);
//              });
//   }
  changeCountry(e, n, url) {
    var param_country = null;
    var param_agg = null;
    var param_from = null;
    var param_to = null;
    switch(url){
        case "mockup_1_1":
            this.state.m_1_1.country=n;
            param_country = n;
            param_agg = this.state.m_1_1.agg;
            param_from = this.state.m_1_1.from;
            param_to = this.state.m_1_1.to;
            break;
        case "mockup_1_3":
            this.state.m_1_3.country=n;
            param_country = n;
            param_from = this.state.m_1_3.from;
            param_to = this.state.m_1_3.to;
            break;
    }
    this.setState({state: this.state});
    if(param_agg != "select" && param_from != "select" && param_to != "select"){
        fetch(`http://127.0.0.1:5000/${url}`, {
            method: 'POST',
            body: JSON.stringify({
                country: param_country,
                agg: param_agg,
                from: param_from,
                to: param_to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                switch(url){
                  case "mockup_1_1":
                    var temp = this.state.m_1_1;
                    temp.data = data.data;
                    this.setState({m_1_1:temp});
                    break;
                  case "mockup_1_3":
                    var temp = this.state.m_1_3;
                    temp.data = data.data;
                    this.setState({m_1_3:temp});
                    break;
                }
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeAgg(e, n, url) {
    var param_country = null;
    var param_agg = null;
    var param_from = null;
    var param_to = null;
    switch(url){
        case "mockup_1_1":
            this.state.m_1_1.agg=n;
            param_country = this.state.m_1_1.country;
            param_agg = n;
            param_from = this.state.m_1_1.from;
            param_to = this.state.m_1_1.to;
            break;
    }
    this.setState({state: this.state});
    if(param_country != "select" && param_from != "select" && param_to != "select"){
        fetch(`http://127.0.0.1:5000/${url}`, {
            method: 'POST',
            body: JSON.stringify({
              country: param_country,
              agg: param_agg,
              from: param_from,
              to: param_to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                switch(url){
                  case "mockup_1_1":
                    var temp = this.state.m_1_1;
                    temp.data = data.data;
                    this.setState({m_1_1:temp});
                    break;
                }
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeYear(e, n, param, url) {
    var param_country = null;
    var param_agg = null;
    var param_from = null;
    var param_to = null;
    if(param=="to"){
        switch(url){
            case "mockup_1_1":
                this.state.m_1_1.to=n;
                param_country = this.state.m_1_1.country;
                param_agg = this.state.m_1_1.agg;
                param_from = this.state.m_1_1.from;
                param_to = n;
                break;
            case "mockup_1_2":
                this.state.m_1_2.to=n;
                param_agg = this.state.m_1_2.agg;
                param_from = this.state.m_1_2.from;
                param_to = n;
                break;
            case "mockup_1_3":
                this.state.m_1_3.to=n;
                param_country = this.state.m_1_3.country;
                param_from = this.state.m_1_3.from;
                param_to = n;
                break;
        }
        this.setState({state: this.state});
    }
    else{
        switch(url){
            case "mockup_1_1":
                this.state.m_1_1.from=n;
                param_country = this.state.m_1_1.country;
                param_agg = this.state.m_1_1.agg;
                param_from = n;
                param_to = this.state.m_1_1.to;
                break;
            case "mockup_1_2":
                this.state.m_1_2.from=n;
                param_agg = this.state.m_1_2.agg;
                param_from = n;
                param_to = this.state.m_1_2.to;
                break;
            case "mockup_1_3":
                this.state.m_1_3.from=n;
                param_country = this.state.m_1_3.country;
                param_from = n;
                param_to = this.state.m_1_3.to;
                break;
        }
        this.setState({state: this.state});
    }
    if(param=="to"){
        if(param_country != "select" && param_from != "select" && param_agg != "select"){
            fetch(`http://127.0.0.1:5000/${url}`, {
                method: 'POST',
                body: JSON.stringify({
                  country: param_country,
                  agg: param_agg,
                  from: param_from,
                  to: param_to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    switch(url){
                      case "mockup_1_1":
                        var temp = this.state.m_1_1;
                        temp.data = data.data;
                        this.setState({m_1_1:temp});
                        break;
                      case "mockup_1_2":
                            var temp = this.state.m_1_2;
                            temp.data = data.data;
                            this.setState({m_1_2:temp});
                            break;
                      case "mockup_1_3":
                        var temp = this.state.m_1_3;
                        temp.data = data.data;
                        this.setState({m_1_3:temp});
                        break;
                    }
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
    else if(param="from"){
        if(param_country != "select" && param_to != "select" && param_agg != "select"){
            fetch(`http://127.0.0.1:5000/${url}`, {
                method: 'POST',
                body: JSON.stringify({
                    country: param_country,
                    agg: param_agg,
                    from: param_from,
                    to: param_to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    switch(url){
                        case "mockup_1_1":
                          var temp = this.state.m_1_1;
                          temp.data = data.data;
                          this.setState({m_1_1:temp});
                          break;
                        case "mockup_1_2":
                            var temp = this.state.m_1_2;
                            temp.data = data.data;
                            this.setState({m_1_2:temp});
                            break;
                        case "mockup_1_3":
                          var temp = this.state.m_1_3;
                          temp.data = data.data;
                          this.setState({m_1_3:temp});
                          break;
                      }
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
            </section>  
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>Atmosphere Temperature VS Surface Temperature</h3>
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
                                    {this.state.m_1_1.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList("mockup_1_1")}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div align="center">
                                    <br></br>
                                <h5 className='text-black'>Aggregation View</h5>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_1_1.agg}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"Y", "mockup_1_1")}>
                                    <div>Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"2Y", "mockup_1_1")}>
                                    <div>2Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"3Y", "mockup_1_1")}>
                                    <div>3Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"5Y", "mockup_1_1")}>
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
                                <br></br>
                                <h5>TIme Range</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col >
                                <div align="right">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_1_1.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList11("from", "mockup_1_1")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col>
                                <div align="left">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_1_1.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList11("to", "mockup_1_1")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_1_1 data={this.state.m_1_1.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p><li>A clear correlation between surface and atmosphere can be observed indicating that rising 
                            atmosphere temperatures can lead to rise in surface temperatures.</li>
                            <li>Both the factors shows an upward trend over the decades.</li>
                            <li>More spikes are observed in recent years indicating the extreme weather events.</li></p>
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
                        <h3>Number of Countries facing extreme weather events</h3>
                    </div>
                </Row>
                <Row>
                    <Col>
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
                                {this.state.m_1_2.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList12("from", "mockup_1_2")}
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
                                {this.state.m_1_2.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList12("to", "mockup_1_2")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_1_2 data={this.state.m_1_2.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center">
                        <div>
                            <p><li>Formula : If the the percentage of temperature change between the consecutive months is
                                more than 35% for atleast 4 months in a year.</li>

                                <li>While there isnt a clear upward trend in the overall data,
                                further drilled down inspection can reveal peaks in certain geograpghic areas.</li></p>
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
                        <h3>Atmospheric Temperature</h3>
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
                                    {this.state.m_1_3.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList("mockup_1_3")}
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
                                {this.state.m_1_3.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList13("from", "mockup_1_3")}
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
                                {this.state.m_1_3.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList13("to", "mockup_1_3")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_1_3 data={this.state.m_1_3.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p><li>The chart display average, minimum, maximum and standard deviation of temperatures within a year.</li>

                            <li>Slight upward trand can be observed in the minimum temperatures.</li></p>
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

export default GlobalTemp;
