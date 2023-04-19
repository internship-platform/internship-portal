import { React, useState, useEffect } from "react";

const InternshipForm = ({ formValues, handleInputChange, handleSubmit }) => {
  return (
    <section className="bg-white px-4 md:px-8 mt-8 md:px-32 h-[800px] w-full flex rounded-md shadow  flex-col justify-center items-start">
      <h2 className="text-3xl ">Internship Form</h2>
      <p className="mt-4 text-gray-500">
        create a new internship to hire candidates{" "}
      </p>

      <section className="my-8 flex flex-col md:my-16 md:grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col ">
          <small className="my-2 text-small font-semibold text-gray-700">
            {" "}
            Internship title{" "}
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            City
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="city"
            value={formValues.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            {" "}
            Salary{" "}
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="salary"
            value={formValues.salary}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <small className="my-2 text-small font-semibold text-gray-700">
            Type
          </small>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            name="type"
            value={formValues.type}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col col-span-2">
          <small className="my-2 text-small font-semibold text-gray-700">
            Description
          </small>
          <textarea
            type="text"
            className="p-2 border border-gray-200 rounded-sm"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            style={{ maxHeight: "200px" }}
          />
        </div>
      </section>

      <section className="">
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-[#1d2633] hover:bg-[#4285F4]/90  focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
          Post Internship
        </button>
      </section>
    </section>
  );
};

export default InternshipForm;
