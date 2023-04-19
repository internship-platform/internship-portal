import { React, useState, useEffect } from "react";
import { login } from "../firebase/actions/authActions";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import LoginForm from "../components/Register/LoginForm";
import loginImage from "./../images/login.svg";

const Signup = () => {
  return (
    <section className="grid md:grid-cols-3 h-screen w-screen">
      <div className="hidden md:flex bg-blue-500 style={{ width: '80%' }}">
        <img src={loginImage} alt="Example SVG" />
      </div>

      <div class="col-span-2">
        <Login />
      </div>
    </section>
  );
};

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formValues.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const register = await login(formValues);
      console.log(register);
      if (register) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    } else {
      // Display the errors to the user or update your form state to display errors
    }
  };

  if (isRegistered) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <LoginForm
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default Signup;
