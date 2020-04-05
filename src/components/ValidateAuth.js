export default function ValidateAuth(values) {
  const errors = {};
  // username erorrs
  if (!values.username) {
    errors.username = "is Required";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //
  if (!values.email1) {
    errors.email1 = "is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email1)) {
    errors.email1 = "Invalid email address";
  }

  // password Errors
  if (!values.password) {
    errors.password = "is Required";
  } else if (values.password.length < 6) {
    errors.password = "password must be at least 6 characters ";
  }
  //

  // password2 Errors
  if (!values.password2) {
    errors.password2 = "is Required";
  } else if (values.password2.length < 6) {
    errors.password2 = "password must be at least 6 characters ";
  }
  //
  if (!values.password1) {
    errors.password1 = "is Required";
  } else if (values.password1.length < 6) {
    errors.password1 = "password must be at least 6 characters ";
  }
  return errors;
}
