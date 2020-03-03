import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";
import { Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import inkscape from './styles/inkscape.png'
import "./styles/style.css";



const Login = () => {
  const { addData } = useContext(DataContext);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onsubmit = e => {
    e.preventDefault();

    const newdata = {
      userName,
      password
    };

    addData(newdata);
  };

  return (
    <React.Fragment>
      <Form id="login-box" onSubmit={onsubmit}>
        <div className="left">
          <Link to="/"></Link>
          <h2 className='topic'>Sign up</h2>

          <Input
            onChange={event => {
              setUserName(event.target.value);
            }}
            type="text"
            name="username"
            placeholder="Username"
          />

          <Input
            onChange={event => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <Button type="submit" name="signup_submit" className="btn">
            submit
          </Button>
        </div>
        <div className="right">
              <img src={inkscape} alt="unnamed" className="image"></img>
            </div>
      </Form>
    </React.Fragment>
  );
};

export default Login;
