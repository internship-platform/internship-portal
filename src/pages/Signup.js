import { React, useState, useEffect } from "react";
import { signUp } from "../firebase/actions/authActions";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import RegisterationForm from "../components/Register/RegisterationForm.js";
import register_image from "./../images/register.svg";

const Signup = () => {
  return (
    <section className="grid md:grid-cols-3 h-screen w-screen">
      <div className="hidden md:flex bg-blue-500 style={{ width: '80%' }}">
        <img src={register_image} alt="Example SVG" />
      </div>

      <div class="col-span-2">
        <Register />
      </div>
    </section>
  );
};

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    major: "",
    university: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsRegistered(false);
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
    const universityEmailRegex = /@([a-z]+\.)+(edu|ac\.[a-z]{2})$/;

    if (!formValues.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!universityEmailRegex.test(formValues.email)) {
      errors.email = "Please enter a valid university email address";
    }

    if (!formValues.password.trim()) {
      errors.password = "Password is required";
    }

    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", formValues);
      const register = await signUp(formValues);
      if (register) {
        setIsRegistered(true);
      }
    } else {
      console.log("Form has errors:", errors);
      // Display the errors to the user or update your form state to display errors
    }
  };

  if (isRegistered) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <RegisterationForm
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default Signup;
