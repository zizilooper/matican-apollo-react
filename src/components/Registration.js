// import React, { useState, useContext } from "react";
// import { DataContext } from "./DataContext";
import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Form } from "reactstrap";
import unnamed from "./styles/unnamed.png";
import "./styles/style.css";
import UseFromValidation from "./UseFormvalidation";
import ValidateAuth from "./ValidateAuth";

const Registration = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    isSubmiting
  } = UseFromValidation(ValidateAuth);

  // const onsubmit = e => {
  //   e.preventDefault();

  //   const newdata = {
  //     userName,
  //     email,
  //     password
  //   };

  //   addData(newdata);
  // };

  return (
    <div id="login-box">
      <div className="left">
        <div>
          <Link to="/registration"></Link>
          <h2 className="topic">Registration</h2>
          <Form onSubmit={handleSubmit} noValidate>
            <Input
              onBlur={handleBlur}
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}

            <Input
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <Input
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <Input
              onBlur={handleBlur}
              type="password"
              name="password2"
              placeholder="Retype password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && (
              <p className="error-text">{errors.password2}</p>
            )}
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
        <img src={unnamed} alt="unnamed" className="image"></img>
      </div>
    </div>
  );
};

export default Registration;
