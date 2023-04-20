import { React, useState, useEffect } from "react";
import { coRegister } from "../firebase/actions/authActions";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import CoRegisterationForm from "../components/Register/CoRegisterationForm.js";
import register_image from "./../images/register.svg";

const CoRegister = () => {
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
    companyName: "",
    country: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formValues.companyName.trim()) {
      errors.companyName = "Company name is required";
    }

    if (!formValues.country.trim()) {
      errors.country = "Country is required";
    }

    if (!formValues.city.trim()) {
      errors.city = "City is required";
    }

    if (!formValues.email.trim()) 
      errors.email = "Email is required";

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
      const register = await coRegister(formValues);
      if (register) {
        setIsRegistered(true);
      }
    } else {
      console.log("Form has errors:", errors);
      // Display the errors to the user or update your form state to display errors
    }
  };

  if (isRegistered) {
    return <Navigate replace to="/company" />;
  } else {
    return (
      <CoRegisterationForm
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default CoRegister;
