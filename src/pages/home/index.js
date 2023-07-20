import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
// import dh1 from '../../assets/images/dh1.gif';
// import dh2 from "../../assets/images/dh2.gif";
import dh3 from "../../assets/images/dh3.gif";
// import dh4 from "../../assets/images/dh4.gif";
// import dh5 from "../../assets/images/dh5.gif";
// import dh6 from '../../assets/images/dh6.gif';
import dh7 from '../../assets/images/dh7.gif';
import favImg from '../../assets/images/fav.svg';

// backgroundImage: `url(${introdata.your_img_url})` ,

function randomProperty(obj) {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}


export function Home() {


  // const [randomNumber, setRandomNumber] = useState([dh1, dh2, dh3, dh4, dh5, dh6, dh7])
  const [randomNumber, setRandomNumber] = useState([favImg, dh3, dh7])
  const [num, setNum] = useState(0)
  const [isLogin, setLogin] = useState(false)


  const countN = useRef(0);
  


  useEffect(() => {
    console.log(
      "useEffect called.", localStorage.getItem("login")
    );
    setNum(Math.floor(Math.random() * randomNumber.length));
    setLogin(localStorage.getItem("login") == "yes");

  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center " style={{backgroundColor: "#dabfdf" }}>
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "

          >
            <img src={randomNumber[num]} className="fullSize" />
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

                    {
                      isLogin ?
                      <Link to="/home" className="text_2">
                      <div id="button_p" className="ac_btn btn login_btn"  style={{marginTop:10,marginBottom:10}}>
                      Continue
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  :
                  <Link to="/login" className="text_2">
                    <div id="button_p" className="ac_btn btn login_btn"  style={{marginTop:10,marginBottom:10}}>
                    LogIn
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                 
                }

                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
