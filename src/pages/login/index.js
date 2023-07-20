import "./style.css";
import { useState } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export const LoginForm = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState("");

  const [state, setSatte] = useState('stsadsa');
  const [city, setCity] = useState("sdsad");

  const login = (e) => {

    let item = { name, password, address: { state, city } }
    console.log(item);

  }

  const onSubmitHandler = (e) => {
    let item = { name, password, address: { state, city } }
    console.warn(item);
    e.preventDefault();
    if (name.trim() === "") {
      showMsg("please enter Instagrame ID");
    } else if (password.trim() === "") {
      showMsg("please enter your password");
    } else {
      // alert(name + " " + password);
        // <Link to="/register"/>someurl/somepage?var1="+ "......

        localStorage.setItem('login', "yes");

        window.location.href = "/";
    }
  }

  function showMsg(msg) {
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

  const handleChange = (event, tag) => {

    if (tag == 'name')
      setName(event.target.value);
    else if (tag == 'password')
      setPassword(event.target.value);

    console.log(event.target.value);
    console.log(tag);
  };

  return (
    <div id="loginform">
      <Card className="card" style={{ borderColor: "orange", borderWidth: 3 }}>
        <FormHeader title="Login" />



        <div>
          <form onSubmit={(e) => { onSubmitHandler(e) }}>

            <div id="label" class="row" onChange={event => handleChange(event, 'name')}>
              <label>Insta-Id (insta user name)</label>
              <input style={{ marginLeft: 16 }}
                id="name"
                name="name"
                value={name}

              />
            </div>

            <div id="label" class="row">
              <label>Enter your password</label>
              <input
                style={{ marginLeft: 16 }}
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={event => handleChange(event, 'password')}
              />
            </div>
            <FormButton title="Log in" type="submit" />
          </form>
        </div>
        <OtherMethods />
      </Card>

    </div>
  );

};

const FormHeader = props => (
  //   <Link  className="navbar-brand nav_ac">
  //             {props.title}
  //           </Link>
  <p id="headerTitle" style={{ marginBottom: 16 }} className="nav_ac" >{props.title}</p>
);

const FormButton = props => (
  <div id="button" class="row" style={{ margin: 10 }}>
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div id="label" class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign:</label>
    <div id="iconGroup">
      <Facebook />
    </div>
  </div>
);

const Facebook = props => (
  <Button style={{ backgroundColor: "black", color: "#fff" }}>
    <Link to="/register"><label style={{ backgroundColor: "black", color: "#fff" }}>Create new Account</label></Link>
  </Button>
);

// ReactDOM.render(<App />, document.getElementById('container'));