import React from "react";

const RegisterationForm = ({ formValues, handleInputChange, handleSubmit }) => {
  return (
    <section className="px-8 mt-8 md:px-32 h-full w-full flex flex-col justify-center items-start">
      <h2 className="text-3xl ">Register</h2>
      <p className="mt-4">Access and manage all your internship </p>

      <section className="my-16 grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            {" "}
            First Name{" "}
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            Last Name
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            {" "}
            Major{" "}
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="major"
            value={formValues.major}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            Email
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            Password
          </small>
          <input
            type="password"
            className="p-2 border border-gray-200 rounded-sm"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            Confirm password
          </small>
          <input
            type="password"
            className="p-2 border border-gray-200 rounded-sm"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            Country
          </small>
          <input
            type="text"
            className="p-2 border border-gray-200 rounded-sm"
            name="country"
            value={formValues.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            University
          </small>
          <input
            type="text"
            className="p-2 border border-gray-200 rounded-sm"
            name="university"
            value={formValues.university}
            onChange={handleInputChange}
          />
        </div>
      </section>

      <section>
        <div class="flex items-center">
          <a
            href="/login"
            class="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Login Here
          </a>
          <label
            for="link-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            if you already have an account
          </label>
        </div>
      </section>

      <section className="my-8">
        <button
          type="button"
          onClick={handleSubmit}
          class="text-white bg-[#1d2633] hover:bg-[#4285F4]/90  focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
          Register Account
        </button>
      </section>
    </section>
  );
};

export default RegisterationForm;
