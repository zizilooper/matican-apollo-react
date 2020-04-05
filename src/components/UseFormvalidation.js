import React from "react";

function UseFormvalidation(validate) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    username: "",
    password2: "",
    email1: "",
    password1: ""
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmiting, setSubmiting] = React.useState(false);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    setSubmiting(true);
  }

  React.useEffect(() => {
    if (isSubmiting) {
      const noError = Object.keys(errors).length === 0;
      const Noerror = Object.keys(
        errors.email1 === 0 && errors.password1.length === 0
      );
      if (noError || Noerror) {
        setSubmiting(false);
        console.log("authenticated!");
        alert("dear user you are login");
      } else {
        setSubmiting(false);
      }
    }
  }, [errors, isSubmiting]);

  function handleBlur() {
    const validation = validate(values);
    setErrors(validation);
  }

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    isSubmiting
  };
}

export default UseFormvalidation;
