// import React, { useContext, useState } from "react";
import React from "react";
// import { DataContext } from "./DataContext";
import { Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import inkscape from "./styles/inkscape.png";
import "./styles/style.css";
import UseFromValidation from "./UseFormvalidation";
import ValidateAuth from "./ValidateAuth";

const Login = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    isSubmiting
  } = UseFromValidation(ValidateAuth);

  // const { addData } = useContext(DataContext);

  // const onsubmit = e => {

  //   // const newdata = {
  //   //   {values.userName}
  //   //   {values.password}
  //   // };

  //   // addData(newdata);
  // };

  return (
    <div id="login-box">
      <div className="left">
        <div>
          <Link to="/"></Link>
          <h2 className="topic">Sign up</h2>

          <Form onSubmit={handleSubmit} noValidate>
            <Input
              onBlur={handleBlur}
              type="email"
              name="email1"
              placeholder="email"
              value={values.email1}
              onChange={handleChange}
            />
            {errors.email1 && <p className="error-text">{errors.email1}</p>}

            <Input
              onBlur={handleBlur}
              type="password"
              name="password1"
              placeholder="Password"
              value={values.password1}
              onChange={handleChange}
            />
            {errors.password1 && <p className="error-text">{errors.password1}</p>}
            <Button
              disabled={isSubmiting}
              type="submit"
              name="signup_submit"
              className="btn"
            >
              submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="right">
        <img src={inkscape} alt="unnamed" className="image"></img>
      </div>
    </div>
  );
};

export default Login;
