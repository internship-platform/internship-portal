import { Description } from "@mui/icons-material";
import React from "react";

const InternshipDetails = ({
  imageUrl,
  title,
  company,
  description,
  location,
  timeAgo,
  status,
}) => {
  return (
    <section className="bg-white flex flex-col max-w-[500px] shadow rounded-lg overflow-y-auto max-h-[700px]">
      <div className=" w-full min-h-[100px] bg-blue-100"></div>
      <div className="p-4">
        <img
          src={imageUrl}
          alt="Job"
          className="mt-[-45px] w-16 h-16 object-cover rounded-full ml-4 "
        />
        <p className="mt-8 font-semibold text-lg">{title}</p>
        <p className="text-gray-700 my-1  ">{company}</p>
        <div className="flex flex-row justify-between items-center">
          {" "}
          <div className="flex flex-row">
            <p className="text-gray-500">{location}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 ml-auto">{timeAgo}</p>
          </div>
        </div>
        <p className="mt-8 font-semibold text-md">Overview</p>
        <p className="text-sm text-gray-400"> {description} </p>
        <button
          type="button"
          className="w-full mt-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-sm text-sm px-2 py-2.5 text-center"
        >
          Apply
        </button>
      </div>
    </section>
  );
};

export default InternshipDetails;
