import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InternshipForm from "../components/PostInternship/InternshipForm";
import { db, auth } from "../firebase/firebase";

const PostInternship = () => {
  return (
    <section className="bg-gray-100 grid flex flex-row justify-center h-screen w-screen">
      <div className="col-span-2">
        <Post />
      </div>
    </section>
  );
};

const Post = () => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);
  const [formValues, setFormValues] = useState({
    title: "",
    city: "",
    salary: "",
    type: "",
    description: "",
    status: "active",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.title.trim()) {
      errors.title = " title is required";
    }

    if (!formValues.city.trim()) {
      errors.city = "city is required";
    }

    if (!formValues.salary.trim()) {
      errors.salary = "salary is required";
    }

    if (!formValues.type.trim()) {
      errors.type = "type is required";
    }
    if (!formValues.description.trim()) {
      errors.description = "description is required";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", formValues);
      const currentDate = new Date(Date.now()).toString();
      const internshipData = {
        ...formValues,
        companyId: currentUserId,
        timestamp: currentDate,
      };
      const docRef = await db.collection("internships").add(internshipData);
      const internshipId = docRef.id;
      await docRef.update({ internshipId: internshipId });

      const companyRef = db.collection("companies").doc(currentUserId);
      const postedInternshipsRef = companyRef
        .collection("postedInternships")
        .doc(internshipId);
      await postedInternshipsRef.set(internshipData);
      console.log(
        "Document created with ID:",
        internshipId,
        "and added to postedInternships subcollection of company with ID:",
        currentUserId
      );
      navigate("/company");
    } else {
      console.log("Form has errors:", errors);
      // Display the errors to the user or update your form state to display errors
    }
  };

  return (
    <InternshipForm
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default PostInternship;
