import React from 'react'
import { Tab, Tabs, Form, Col, Row, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import './testOnecss.css'
class TestOne extends React.Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h4>Add New Request</h4>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="profile" title="Summry" className="tabeLink">
                        <br />

                        <span style={{ font: "12px" }}>Requested Id: </span>
                        <span style={{ font: "12px", fontWeight: "700" }}>3456783456789</span>
                        <br />
                        <hr style={{ position: "relative" }}></hr>
                        <span
                            style={{
                                position: "absolute",
                                paddingLeft: "13px",
                                paddingRight: "13px",
                                marginTop: "-31px",
                                background: "white",
                                marginLeft: "80px",
                                fontWeight: "500",
                            }}
                        >Request Information</span>
                        <br />
                        <Form>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={5}>
                                           <span style={{color:"red"}}>*</span> 
                                           Person Requesting
                                        </Form.Label>
                                        <Col sm={7}>
                                            <Form.Control type="type" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={5}>
                                           <span style={{color:"red"}}>*</span> 
                                           Person Requesting
                                        </Form.Label>
                                        <Col sm={7}>
                                            <Form.Control type="type" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={5}>
                                           <span style={{color:"red"}}>*</span> 
                                           Person Requesting
                                        </Form.Label>
                                        <Col sm={7}>
                                            <Form.Control type="type" placeholder="" />
                                        </Col>
                                    </Form.Group>

                                </Col>
                                <Col sm={6}>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={6}>
                                        <span style={{color:"red"}}>*</span> 
                                        Phone Number/Extension
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={6}>
                                        <span style={{color:"red"}}>*</span> 
                                        Phone Number/Extension
                                        </Form.Label>
                                        <Col sm={6}>
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={6}>
                                        <span style={{color:"red"}}>*</span> 
                                        Phone Number/Extension
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>

                                </Col>
                            </Row>



                            {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                </Col>
                            </Form.Group> */}

                            {/* <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group> */}

                            
                        </Form>
                        <hr style={{ position: "relative" }}></hr>
                        <span
                            style={{
                                position: "absolute",
                                paddingLeft: "13px",
                                paddingRight: "13px",
                                marginTop: "-31px",
                                background: "white",
                                marginLeft: "80px",
                                fontWeight: "500",
                            }}
                        >Supplier Details</span>
                        <br /> <Form>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={5}>
                                           <span style={{color:"red"}}>*</span> 
                                           Supplier Name
                                        </Form.Label>
                                        <Col sm={7}>
                                            <Form.Control type="type" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                   
                                </Col>
                                <Col sm={6}>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={6}>
                                        <span style={{color:"red"}}>*</span> 
                                        Supplier Address
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                   
                                </Col>
                            </Row>



                            {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                </Col>
                            </Form.Group> */}

                            {/* <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group> */}

                            
                        </Form>
                        <hr style={{ position: "relative" }}></hr>
                        <span
                            style={{
                                position: "absolute",
                                paddingLeft: "13px",
                                paddingRight: "13px",
                                marginTop: "-31px",
                                background: "white",
                                marginLeft: "80px",
                                fontWeight: "500",
                            }}
                        >Shipping Details</span>
                        <br /> <Form>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={5}>
                                           <span style={{color:"red"}}>*</span> 
                                           Shipping Address
                                        </Form.Label>
                                        <Col sm={7}>
                                            <Form.Control type="type" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                   
                                </Col>
                                <Col sm={6}>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={6}>
                                        <span style={{color:"red"}}>*</span> 
                                        Delivery To
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>
                                   
                                </Col>
                            </Row>



                            {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                </Col>
                            </Form.Group> */}

                            {/* <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group> */}

                            
                        </Form>
                        <hr style={{ position: "relative" }}></hr>
                        <span
                            style={{
                                position: "absolute",
                                paddingLeft: "13px",
                                paddingRight: "13px",
                                marginTop: "-31px",
                                background: "white",
                                marginLeft: "80px",
                                fontWeight: "500",
                            }}
                        > <button style={{color:"white", background:"#1c6eb5", border:"0px solid", borderRadius:"5px", paddingLeft: "10px",
                        paddingRight: "12px",
                        paddingBottom: "6px",
                        paddingTop: "6px"}}> + &nbsp; Add Items </button></span>


                    </Tab>
                    <Tab eventKey="Home" title="Procure" class="tabeLink">
                        Procure
                    </Tab>
                    <Tab eventKey="contact" title="Approval" class="tabeLink">
                        Approval
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TestOne