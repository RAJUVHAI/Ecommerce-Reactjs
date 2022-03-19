import React from 'react';
import { Container, Row, Col, Navbar, Nav, Offcanvas, Form, Button, FormControl, Carousel } from "react-bootstrap";
import { FaSignInAlt, FaCommentDots, FaDollyFlatbed, FaOpencart, FaSistrix } from "react-icons/fa";
import Carrousel from "./HomeInfo/HomeCarrousel";
import HmWeeklyProducts from "./HomeInfo/HmWeeklyProducts";
import HmHealthMedical from "./HomeInfo/HmHealthMedical";
import HmJustForYou from "./HomeInfo/HmJustForYou";


import Logo from '../Images/brand.png'
const Home = () => {
    return (
        <>
            <div className="bg-light shadow-sm">
                <Container>
                    <Row>
                        <Col>

                            <Navbar expand={false}>
                                <Container fluid>
                                    <Navbar.Brand href="#"><img className='w-50' src={Logo} alt="notFound" /></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                                    <Navbar.Offcanvas
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel">Ecommerce Lab</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3 HeaderRight__menu">
                                                <Nav.Link className="navlink" href="#action1"><FaSignInAlt className="icons" />Sign In</Nav.Link>
                                                <Nav.Link className="navlink" href="#action2"><FaCommentDots className="icons" />Message</Nav.Link>
                                                <Nav.Link className="navlink" href="#action1"><FaDollyFlatbed className="icons" />Order</Nav.Link>
                                                <Nav.Link className="navlink" href="#action2"><FaOpencart className="icons" />Cart</Nav.Link>

                                            </Nav>
                                            <Form className="d-flex">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button className="searchBtn">< FaSistrix /></Button>
                                            </Form>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>

                </Container>



            </div>



            <div >
                <Carousel fade>
                    {Carrousel.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt='notfound'
                            />
                            <Carousel.Caption>
                                <h3>{item.heading}</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div class="Weekly__deal">
                <Container>
                    <Row>
                        <Col>
                            <div className="weekly__dealheading">
                                <h1 className="wdeal__heading underline ">Weekly deal</h1>
                                <marquee behavior="scroll" direction="up" scrollamount="2"> <p className="text-center mt-4">First time we are provide the mega gift Cards Projects. </p></marquee>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-3">

                        {
                            HmWeeklyProducts.map((items, index) => {
                                return (
                                    <>
                                        <Col lg={4} key={index}>
                                            <div className="weekly__products d-flex weeklyproductbg shadow-lg">
                                                <div className='w-100 '>
                                                    <img src={items.image1} alt="not found" />
                                                    <button className="viewmore__btn my-2 px-3 py-1  bg-primary">{items.viewbtn}</button>
                                                </div>

                                                <div className='w-100 '>
                                                    <img src={items.image2} alt="not found" />
                                                    <span className="text-center">{items.price}</span> <br />
                                                    <del className=" text-danger text-center fs-6">{items.decprice}</del>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }

                    </Row>
                </Container>

                <Container className="my-5" >
                    <Row>
                        <Col className="my-2">
                            <h1 class="HealthHeader">HEALTH & MEDICAL</h1>
                        </Col>
                    </Row>

                    <Row >
                        <Col lg={3} >
                            <div className="healthTrendingimg mt-2">
                                <h2 className="mt-5">Treanding Health and medical </h2>
                                <button className="viewmore__btn my-2 px-3 py-2 my-2  bg-primary">Source Now</button>
                            </div>
                        </Col>



                        {
                            HmHealthMedical.map((items, index) => {
                                return (
                                    <>
                                        <Col lg={3} key={index}>
                                            <div className="hlmedicalproducts shadow-lg p-3 my-2 text-center bg-white d-flex justify-content-center">
                                                <div>
                                                    <h3>{items.heading}</h3>
                                                    <p>{items.pragr}</p>
                                                    <img src={items.healthimg} alt="img not found" />
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }

                    </Row>
                </Container>



                <Container className="my-5" >
                    <Row>
                        <Col className="my-2">
                            <h1 class="HealthHeader requestquotes">REQUEST FOR QUOTATION</h1>
                        </Col>
                    </Row>

                    <Row className="bg-light shadow-sm p-4">
                        <Col lg={5} >
                            <div className=" requestquote bg-light shadow-sm p-5 mt-2" >
                                <div className="quote__heading">

                                </div>
                                <div className="reqs__avg d-flex justify-content-between">
                                    <div className="reqs">
                                        <h3> 12000<sup>+</sup></h3>
                                        <span>Reqs</span>
                                    </div>
                                    <div className="avg">
                                        <h3>12h</h3>
                                        <span>Quotation durational</span>
                                    </div>

                                </div>

                                <div className="supliers__industries d-flex justify-content-between">
                                    <div className="supliers">
                                        <h3>34000<sup>+</sup></h3>
                                        <span>Active Supliers</span>
                                    </div>
                                    <div className="industries">
                                        <h3>9990</h3>
                                        <span>Passtionate Industries</span>
                                    </div>
                                </div>

                                <div className="buttonmore">
                                    <button className="px-4 py-1 my-3 bg-primary btn text-white">
                                        More
                                    </button>
                                </div>

                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="oneques__ans ">
                                <div className="qus__ans__heading">
                                    <h1>One Request, Multiple Quotes</h1>
                                </div>
                                <div className="searching__input">
                                    <input className="w-100 py-2 px-2" type="search" placeholder="what's on your mind." name="search" id="search_input" />
                                    <div className="quantity__price d-flex justify-content-between">
                                        <input className="w-100 my-3 mx-2 py-2" type="number" id="quantity" />
                                        <input className="w-100 my-3 mx-2 py-2" type="text" name="prices" id="" />
                                    </div>
                                    <div className="req__quotation text-center">
                                        <button className="px-4 py-2 text-white bg-primary btn " type="submit">Request for Quotation </button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>

                <Container>
                    <Row>
                        {
                            HmJustForYou.map((items) => {
                                return (
                                    <>
                                        <Col lg={2} key={items.id}>
                                            <div className="bg-light shadow-md m-2">
                                                <div>

                                                    <img className="w-100 p-2" src={items.foruimg} alt="img not found" />
                                                    <h6 className="p-2">{items.heading}</h6>
                                                    <p className="p-2" >{items.price}</p>
                                                    <span className="p-2">{items.quantity}(min. orders)</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="tradeservices">
                            <h3>
                                OUR TRADE SERVICES ARE HERE FOR YOU
                            </h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home;