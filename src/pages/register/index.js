import React, { useEffect, useState } from "react";
import "./style.css";
import { toast } from 'react-toastify';
import { Button, ButtonGroup, FormCheck, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { register, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Select from "react-select";
import axios from 'axios';
import favImg from '../../assets/images/fav.svg';

export const Register = () => {

  const countUrl = "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json";
  const [name, setName] = useState("");
  const [instaId, setInstaId] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState('1');
  const [relationShip, setRelationShip] = useState('1');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const [hobby, setHobby] = useState([]);

  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState("India");
  const [getState, setState] = useState([]);
  const [getCity, setCity] = useState([]);
  const [getSelectedState, setSelectedState] = useState("");
  const [getSelectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios.get(countUrl)
      .then(res => setData(res.data))
      .catch(err => console.log("error: " + err))
  }, [])
  const country = [...new Set(data.map(item => item.country))]
  country.sort();
  console.log(country);
  const handleCountry = (e) => {
    let states = data.filter(state => state.country === e.target.value);
    log(states);
    states = [... new Set(states.map(item => item.subcountry))];
    states.sort();
    log(states);
    setState(states);
  }
  const handleState = (e) => {
    let cities = data.filter(city => city.subcountry === e.target.value)
    console.log(cities);
    cities = [... new Set(cities.map(item => item.name))];
    cities.sort();
    setCity(cities);
    setSelectedState(e.target.value);
  }
  const handleCity = (e) => {
    setSelectedCity(e.target.value);
  }
  const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );

  const FormLable = props => (
    <div class="row">
      <label>{props.title}</label>
    </div>
  );

  const FormLableMin = props => (
    <div class="rowMin startPadding">
      <label>{props.title}</label>
    </div>
  );

  const onChangeHandler = (fieldName, value) => {
    log(fieldName);
    log(value);
    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "instaId") {
      setInstaId(value);
    } else if (fieldName === "mobile") {
      setMobile(value);
    } else if (fieldName === "hobby") {
      setHobby(value);
    } else if (fieldName === "password") {
      setPassword(value);
    } else if (fieldName === "conPassword") {
      setConPassword(value);
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    log("value " + getSelectedState.trim());
    const blank = "";
    if (blank === name) {
      myToast("please enter your name!");
    } else if (blank === instaId) {
      myToast("please enter your instagrame ID!");
    } else if (blank === mobile) {
      myToast("please enter your mobile number!");
    } else if (hobby.length == 0) {
      myToast("please select your hobby!");
    } else if ((getSelectedCity == "" || getSelectedState == "")) {
      myToast("please select your location!");
    } else if (blank === password) {
      myToast("please enter your password!");
    } else if (blank === conPassword) {
      myToast("please enter your confirm password!");
    } else if (password != conPassword) {
      myToast("password and confirm password is not same!");
    }

    else {
      alert(name + " " + instaId);

    }
  }

  function myToast(msg) {
    toast('🦄 ' + msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const radiosGender = [
    { name: 'Male', value: '1' },
    { name: 'Female', value: '2' },
  ];
  const listHobby = [
    { label: 'game', value: '1' },
    { label: 'music', value: '2' },
    { label: 'cricket', value: '2' },
    { label: 'basketboll', value: '2' },
    { label: 'dance', value: '2' },
    { label: 'time pass', value: '2' },
    { label: 'time west', value: '2' },
    { label: 'drink', value: '2' },
    { label: 'smocking', value: '2' },
    { label: 'chill', value: '2' },
    { label: 'travel', value: '2' },
    { label: 'foody', value: '2' },
  ];
  const radiosRelation = [
    { name: 'Single', value: '1' },
    { name: 'Commited', value: '2' },
  ];

  function log(msg) {
    console.log(msg);
  }



  const handleOnHobbyChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list
      setHobby(prev => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setHobby(prev => prev.filter(x => x !== value));
    }
  }
  const onChangee = (index, stringValue) => (event) => {
    console.log("............");
    console.log('index?: ' + index + ' and value' + stringValue);
  };

  return (
    <div className="intro_sec d-block d-lg-flex align-items-center ">
      <div
        className="h_bg-image order-1 order-lg-2 h-100 "
       
      
      >
        <img src={favImg} className="gradientdiv"/>
      </div>
      <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
        <div >
          <div className="intro mx-auto" style={{ overflow: "scroll" }}>
            <h2 className="mb-1x">{register.title}</h2>
            <h1 className="fluidz-48 mb-1x">
              <Typewriter
                options={{
                  strings: [
                    register.animated.first,
                    register.animated.second,
                    register.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h1>
            <p className="mb-1x">{register.description}</p>
            <div className="intro_btn-action pb-5">

              <div >
                <div>
                  <form onSubmit={(e) => { onSubmitHandler(e) }}>

                    <div class="row">
                      <label>Enter your name</label>
                      <input
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your Name"
                        onChange={event => onChangeHandler('name', event.target.value)}
                      />
                    </div>

                    <div class="row">
                      <label>Instagrame Id</label>
                      <input
                        id="instaId"
                        name="instaId"
                        value={instaId}
                        placeholder="Enter your insta id @xyz"
                        onChange={event => onChangeHandler('instaId', event.target.value)}
                      />
                    </div>

                    <div class="row">
                      <label>Mobile Number</label>
                      <input
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        placeholder="Enter your number +XX XXXXXXXXXX"
                        onChange={event => onChangeHandler('mobile', event.target.value)}
                      />
                    </div>

                    <div class="row">
                      <label>Your gender</label><br />
                      <ButtonGroup className="mb-2">
                        {radiosGender.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radioGender"
                            value={radio.value}
                            checked={gender === radio.value}
                            onChange={(e) => setGender(e.currentTarget.value)}
                            style={{ fontSize: "16px", padding: "8px", margin: "10px" }}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>

                    <div class="row">
                      <label>RelationShip Status</label><br />
                      <ButtonGroup className="mb-2">
                        {radiosRelation.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio_-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radioRelationShip"
                            value={radio.value}
                            checked={relationShip === radio.value}
                            onChange={(e) => setRelationShip(e.currentTarget.value)}
                            style={{ fontSize: "16px", padding: "8px", margin: "10px" }}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>

                    <FormLable title="What's you like?" />
                    <FormLableMin
                      title={hobby.length ? "Selected: " + hobby.join(', ') : null} />

                    <div style={{ height: "200px", overflow: "scroll", display: "grid", marginRight: "10px" }} className="rowDd label startPadding">
                      {listHobby.map((x, i) => <label key={i}>
                        <input
                          inline
                          type="checkbox"
                          name="hobby"
                          value={x.label}
                          onChange={handleOnHobbyChange}
                        /> {x.label}
                      </label>)}
                    </div>

                    <FormLable title="Your Location" />
                    <div class="row startPadding" onChange={(e) => handleCountry(e)}>
                      <select class="row label">
                        {country.map(items => <option key={items}> {items} </option>)}
                        value=getCountry
                      </select>
                    </div>

                    <div className="row startPadding" style={{ width: 200 }} onChange={(e) => handleState(e)}>
                      <select class="row label" >
                        {getState.map(items => <option key={items}> {items} </option>)}
                        value=getSelectedState
                      </select>
                    </div>

                    <div className="row startPadding" style={{ width: 200 }} onChange={(e) => handleCity(e)}>
                      <select class="row label">
                        {getCity.map(items => <option key={items}> {items} </option>)}
                        value=getSelectedCity
                      </select>
                    </div>

                    <div class="row">
                      <label>Create password</label>
                      <input
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your new password"
                        onChange={event => onChangeHandler('password', event.target.value)}
                      />
                    </div>
                    <div class="row">
                      <label>Confirm password</label>
                      <input
                        id="conPassword"
                        name="conPassword"
                        value={conPassword}
                        placeholder="Enter your confirm password"
                        onChange={event => onChangeHandler('conPassword', event.target.value)}
                      />
                    </div>
                    <FormButton title="Log in" type="submit" />
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
    </div >
  );

};
