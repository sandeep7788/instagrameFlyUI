import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../../../service/actions/actions";
import { introdata, metaTwo } from "../../../content_option";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';
import img1 from '../../../assets/images/girlgif1.gif';
import img2 from '../../../assets/images/boygif.gif';
import img3 from '../../../assets/images/boygg.gif';
import bookGif from '../../../assets/images/book.gif';
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})



function MainDashboard(props) {
    console.warn("home: ", props.data)
    console.warn("length: ", props.data.length)
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {metaTwo.title}</title>
                    <meta name="description" content={metaTwo.description} />
                </Helmet>
                <div className="intro_sec d-block d-lg-flex align-items-center ">
                    <div className="h_bg-image order-1 order-lg-2 h-100">

                        <div style={{ display: "flex", marginTop: 4 }}>

                            <Container className='p-1' id="container1">
                                <Col >
                                    <Card className="card" style={{ borderColor: "gold" , borderWidth:3 , margin: 4}}>
                                        <Card.Img variant="top" src={img1} className="cardImg" />
                                        <Card.Body>
                                            <Card.Title className="fontf"><b>Find Girl</b></Card.Title>
                                            <Card.Text className="fontf">
                                                A true relationship is when you can tell each other anything and everything. No secrets and no lies.
                                            </Card.Text>
                                            <Button variant="primary" >
                                                <Link to="/list" state={{ type: 'typeeeeeeee' }} ><label className="button">continue</label></Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Container>
                            <Container className='p-1' id="container2">
                                <Col >
                                    <Card className="card" style={{ borderColor: "orange" , borderWidth:3, margin: 4}}>
                                        <Card.Img variant="top" src={img3} className="cardImg" />
                                        <Card.Body>
                                            <Card.Title className="fontf"><b>Find Boy</b></Card.Title>
                                            <Card.Text className="fontf">
                                                A successful relationship requires falling in love many times, but always with the same person. .......
                                            </Card.Text>
                                            <Button variant="primary" >
                                                <Link to="/register" ><label className="button">continue</label></Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Container>

                            
                        </div>
                        <div id="blog"  className="blogstyle">

                        <Container className='p-1' id="container3">
                                <Col >
                                    <Card className="blogCard" style={{ borderColor: "red" , borderWidth:3, margin: 4}}>
                                        <Card.Img variant="top" src={bookGif} className="cardImg" />
                                        <Card.Body>
                                            <Card.Title className="fontf"><b>Read and Write Blogs</b></Card.Title>
                                            <Card.Text className="fontf">
                                            We read blogs to connect with others who share our interests, to learn new things, to be inspired and entertained, and to broaden our perspectives. Reading blogs can be a form of self-education, a way to stay informed about the world around us, and a means of exploring different ideas and viewpoints.
                                            </Card.Text>
                                            <Button variant="primary" >
                                                <Link to="/register" ><label className="button">continue</label></Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Container>

                            
                        </div>
                    </div>
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center ">
                            <div className="intro mx-auto">
                                <h2 className="mb-1x">{introdata.title}</h2>
                                <h1 className="fluidz-48 mb-1x">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                introdata.animated.first,
                                                introdata.animated.second,
                                                introdata.animated.third,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 10,
                                        }}
                                    />
                                </h1>
                                <p className="mb-1x">{introdata.description}</p>
                                <div className="intro_btn-action pb-5">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard)