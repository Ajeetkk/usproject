import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { FaUserAlt, FaSuperscript } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './homecss.css';
import SideNavPage from './SideNavPage'
import TestOne from './testOne'
import TestTwo from './testTwo'
class Home extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {

        document.getElementsByClassName('contentDsplay')[0].style.display = "none";
        // document.getElementsByClassName('firstListElement')[0].style.backgroundColor = 'yellow';

    }
    onHover(e) {

        document.getElementsByClassName('contentDsplay')[0].style.display = "block";
        document.getElementsByClassName('driwer')[0].style.display = "none";
        document.getElementsByClassName('contentDsplay')[0].style.width = "200px";
    }
    onHoverOut() {
        // document.getElementsByClassName('contentDsplay')[0].style.display="none";
        // document.getElementsByClassName('driwer')[0].style.display="block";
        // document.getElementsByClassName('driwer')[0].style.width="17px";
    }
    hideSideBar() {
        document.getElementsByClassName('contentDsplay')[0].style.display = "none";
        document.getElementsByClassName('driwer')[0].style.display = "block";
        // document.getElementsByClassName('driwer')[0].style.width="17px";
    }
    activeElement() {
        alert("ho");
    }
    activeInactive() {
        document.getElementsByClassName("activeinactive")[0].style.color = "green"
        document.getElementsByClassName("activeinactive")[1].style.color = "green"
    }
    render() {
        return (
            <Router>
                <div>

                    <Container fluid>
                        <Row>
                            <Col sm={12}>
                                <ul
                                    onMouseOver={(e) => { this.onHover(e) }}
                                    className="driwer starting"
                                    onMouseOut={(e) => { this.onHoverOut(e) }}
                                    style={{
                                        borderRight: "1px solid #bdbaba",
                                        paddingTop: "13px",
                                        height: "100%",
                                        marginTop: "12px"

                                    }}>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li className="firstListElement"
                                    // style={{paddingLeft: "32px",
                                    //     background: "#e3f4f5",
                                    //     paddingRight: "32px",
                                    //     paddingTop: "5px",
                                    //     paddingBottom: "5px"
                                    // }}
                                    ><FaUserAlt /> </li>
                                    <li><FaUserAlt /> </li>
                                    <li><FaUserAlt /> </li>
                                    <li><FaUserAlt /> </li>
                                </ul>
                                <ul className=" driwer contentDsplay"
                                    onMouseOut={(e) => { this.onHoverOut(e) }}
                                    style={{
                                        borderRight: "1px solid #bdbaba",
                                        paddingTop: "20px",
                                        height: "100%",
                                        marginTop: "12px"
                                    }} >

                                    <input
                                        type="button"
                                        value="x"
                                        onClick={this.hideSideBar.bind(this)}
                                        style={{ float: "right" }}
                                    />



                                    {/* <li></li>
                                
                                <li className="activeinactive" onClick={this.activeInactive.bind(this)}><FaUserAlt /> &nbsp;</li>
                                <li className="activeinactive"><FaUserAlt /> &nbsp;li2</li> */}
                                    <li><FaUserAlt /> &nbsp;
                                    <Link to="./" className="sideLink">TestOne</Link>
                                    </li>
                                    <li><FaUserAlt /> &nbsp;
                                    <Link to="./testtwo" className="sideLink">TestTwo</Link>
                                    </li>



                                </ul>


                                <Row style={{
                                    borderTop: "1px solid #bdbaba",
                                    marginTop: "25px",
                                    // borderLeft:"1px solid #bdbaba"
                                }}>
                                    <Col sm={12}>


                                        <Switch>
                                            <Route exact path="/">
                                                <TestOne />
                                            </Route>
                                            <Route path="/TestTwo">
                                                <TestTwo />
                                            </Route>

                                        </Switch>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Router>
        )
    }
}
export default Home