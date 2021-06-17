export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(values.email)) {
    errors.email = `Error message`;
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6 || !/[0-9]/.test(values.password) || !/[a-zA-Z]/.test(values.password)) {
    errors.password = "Error message";
  }

  return errors;
}
