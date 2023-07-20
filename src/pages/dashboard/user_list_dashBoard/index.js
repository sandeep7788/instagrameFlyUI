import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../../../service/actions/actions";
import { introdata, metaTwo } from "../../../content_option";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import img1 from '../../../assets/images/boysg1.png';
import ReactCardSlider from 'react-card-slider-component';
import axios from "axios";

const countUrl = "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json";

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

// const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];

const myList = [
    {
        name: "Ram mohen", address: {
            city: "jaipur", state: "rajasthan", country: "India"
        }, hobby: "game, music", gender: "Male", instaId: "myInstagrameId@id"
    }, {
        name: "Ram mohen", address: {
            city: "jaipur", state: "rajasthan", country: "India"
        }, hobby: "game, music", gender: "Male", instaId: "myInstagrameId@id"
    }, {
        name: "Ram mohen", address: {
            city: "jaipur", state: "rajasthan", country: "India"
        }, hobby: "game, music", gender: "Male", instaId: "myInstagrameId@id"
    }, {
        name: "Ram mohen", address: {
            city: "jaipur", state: "rajasthan", country: "India"
        }, hobby: "game, music", gender: "Male", instaId: "myInstagrameId@id"
    }, {
        name: "Ram mohen", address: {
            city: "jaipur", state: "rajasthan", country: "India"
        }, hobby: "game, music", gender: "Male", instaId: "myInstagrameId@id"
    }
];

const sliderClick = (slider) => {
    alert("hello world");
}


const slides = [
    { image: "https://picsum.photos/200/300", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "https://picsum.photos/600/500", title: "This is a second title", description: "This is a second description", clickEvent: sliderClick },
    { image: "https://picsum.photos/700/600", title: "This is a third title", description: "This is a third description", clickEvent: sliderClick },
    { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description", clickEvent: sliderClick },
    { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },

    { image: "https://picsum.photos/200/300", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "https://picsum.photos/600/500", title: "This is a second title", description: "This is a second description", clickEvent: sliderClick },
    { image: "https://picsum.photos/700/600", title: "This is a third title", description: "This is a third description", clickEvent: sliderClick },
    { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description", clickEvent: sliderClick },
    { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },

]


function UserListDashBoard(props) {
    console.warn("home: ", props.data)
    console.warn("length: ", props.data.length)
    // const location = useLocation()
    const location = useLocation()
    console.log("type", location.state.type)

    const [name, setName] = useState("");
    const [instaId, setInstaId] = useState("");
    const [relationShip, setRelationShip] = useState('1');
    const [useLocationFilter, setUseLocationFilter] = useState(false);
    const [useFilter, setFilter] = useState(false);
    const [data, setData] = useState([]);
    const [getCountry, setCountry] = useState("India");
    const [getState, setState] = useState([]);
    const [getCity, setCity] = useState([]);
    const [getSelectedState, setSelectedState] = useState("");
    const [getSelectedCity, setSelectedCity] = useState("");

    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const addToList = () => {
        let tempArr = list;
        tempArr.push(value);
        setList(tempArr);
        setValue("");
    };

    const deleteItem = (index) => {
        let temp = list.filter((item, i) => i !== index);
        setList(temp);
    };

    const radiosRelation = [
        { name: 'Single', value: '1' },
        { name: 'Commited', value: '2' },
    ];



    useEffect(() => {
        axios.get(countUrl)
            .then(res => setData(res.data))
            .catch(err => console.log("error: " + err))
        setList(myList);
    }, [])

    const country = [...new Set(data.map(item => item.country))]
    country.sort();
    console.log(country);
    const handleCountry = (e) => {
        let states = data.filter(state => state.country === e.target.value);
        states = [... new Set(states.map(item => item.subcountry))];
        states.sort();
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
    const onChangeHandler = (fieldName, value) => {

        if (fieldName === "name") {
            setName(value);
        } else if (fieldName === "instaId") {
            setInstaId(value);
        }
    }
    const FormLable = props => (
        <div class="rowTwo">
            <label>{props.title}</label>
        </div>
    );

    const FormButton = props => (
        <div id="button" class="rowTwo" style={{ paddingTop: 4 , float:"right"}}>
            <button style={{ backgroundColor:"black", border:"aqua" }}>{props.title}</button>
        </div>
    );

    const onSubmitHandler = (e) => {
        e.preventDefault();
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

    const Switch = () => {
        return (
            <>
                <input
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                    checked={useLocationFilter}

                    onChange={() => {
                        setUseLocationFilter(!useLocationFilter)
                    }}
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
            </>
        );
    };

    const FilterSwitch = () => {
        return (
            <>
                <input
                    className="react-switch-checkbox"
                    id={`react-switch-filter`}
                    type="checkbox"
                    checked={useFilter}

                    onChange={() => {
                        setFilter(!useFilter)
                    }}
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-filter`}
                >
                    <span className={`react-switch-button`} />
                </label>
            </>
        );
    };
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {metaTwo.title}</title>
                    <meta name="description" content={metaTwo.description} />
                </Helmet>

                <div id="body">
                    {/* <ReactCardSlider slides={slides} /> */}

                    <div >

                        <div style={{ display: "flex" }}>
                            <label style={{ alignSelf: "center", marginRight: 10 }} className="labelFilter">User Filter</label>
                            <FilterSwitch />
                        </div>
                        {
                            useFilter ? <div>
                                <form onSubmit={(e) => { onSubmitHandler(e) }}>

                                    <div className="division">
                                        <div class="rowTwo">
                                            <label>Enter name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={name}
                                                placeholder="Enter Name"
                                                onChange={event => onChangeHandler('name', event.target.value)}
                                            />
                                        </div>

                                        <div class="rowTwo">
                                            <label>Instagrame Id</label>
                                            <input
                                                id="instaId"
                                                name="instaId"
                                                value={instaId}
                                                placeholder="Enter insta id @xyz"
                                                onChange={event => onChangeHandler('instaId', event.target.value)}
                                            />
                                        </div>

                                        <div class="rowTwo" style={{ marginBottom: 10 }}>
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

                                    </div>

                                    <div className="division" style={{paddingTop:32}}>
                                        <div style={{ display: "flex" }}>
                                            <label style={{ alignSelf: "center", marginRight: 10 }} className="labelFilter">Location Filter</label>
                                            <Switch />
                                        </div>

                                        {
                                            useLocationFilter ?

                                                <div className="lablelLocationFilderDiv">
                                                    <div class="rowTwo startPadding" style={{paddingTop:16}} onChange={(e) => handleCountry(e)}>
                                                        <select class="rowTwo label">
                                                            {country.map(items => <option key={items}> <h1 className="font">{items}</h1> </option>)}
                                                            value=getCountry
                                                        </select>
                                                    </div>

                                                    <div className="rowTwo startPadding"  onChange={(e) => handleState(e)}>
                                                        <select class="rowTwo label" >
                                                            {getState.map(items => <option key={items}> {items} </option>)}
                                                            value=getSelectedState
                                                        </select>
                                                    </div>

                                                    <div className="rowTwo startPadding" onChange={(e) => handleCity(e)}>
                                                        <select class="rowTwo label">
                                                            {getCity.map(items => <option key={items}> {items} </option>)}
                                                            value=getSelectedCity
                                                        </select>
                                                    </div>
                                                </div>
                                                : <div></div>
                                        }

                                    </div>

                                    <div className="division" style={{paddingTop:16}}>
                                        <FormButton title="Search" type="submit" />
                                    </div>
                                </form>
                            </div>
                                : <div></div>
                        }
                        <div className="division" style={{paddingTop:16}}>
                            <FormButton title="Rendom" type="submit" />
                        </div>

                        {/* <input
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />{" "} 

                            <button onClick={addToList}> Click to Add </button>*/}
                        <ul className="board ul">
                            {
                                console.warn("list.length  ", list.length)
                            }
                            {list.length > 0 &&
                                list.map((item, i) =>
                                    <div onClick={() => deleteItem(i)} >

                                        <div className="card">
                                            <img src={img1} className="cardImage" />
                                            <div className="card-body">
                                                <h2>{item.name}</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                                <p><b>bold</b></p>
                                                <h5>hobbys: {item.hobby}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </ul>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(UserListDashBoard)