import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";
import { Form, Input, Button, FormGroup } from "reactstrap";
import unnamed from "./styles/unnamed.png";
import "./styles/style.css";

const Registration = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const { addData } = useContext(DataContext);

  const onsubmit = e => {
    e.preventDefault();

    const newdata = {
      userName,
      email,
      password
    };

    addData(newdata);
  };

  return (
    <React.Fragment>
      <div id="login-box">
        <div className="left">
          <Form onSubmit={onsubmit}>
            <h2 className="topic">Registration</h2>
            <Link to="/registration"></Link>
            <FormGroup>
              <Input
                onChange={event => {
                  setUserName(event.target.value);
                }}
                type="text"
                name="username"
                placeholder="Username"
              />

              <Input
                onChange={event => {
                  setEmail(event.target.value);
                }}
                type="text"
                name="email"
                placeholder="E-mail"
              />

              <Input
                onChange={event => {
                  setPassword(event.target.value);
                }}
                type="password"
                name="password"
                placeholder="Password"
              />

              <Input
                onChange={event => {
                  setPassword2(event.target.value);
                }}
                type="password"
                name="password2"
                placeholder="Retype password"
              />
              <Button type="submit" name="signup_submit" className="btn">
                submit
              </Button>
            </FormGroup>
          </Form>
        </div>
        <div className="right">
          <img src={unnamed} alt="unnamed" className="image"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registration;
