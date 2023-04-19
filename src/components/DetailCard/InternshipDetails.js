import { Description } from "@mui/icons-material";
import React from "react";
import ApplyModal from "../ApplyModal";
import { capitalizeString } from "../../utils";

const InternshipDetails = ({
  imageUrl,
  title,
  company,
  description,
  location,
  status,
  internshipId,
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
        <p className="mt-8 font-semibold text-lg">
          {capitalizeString(title || "")}
        </p>
        <p className="text-gray-700 my-1  ">{company}</p>
        <div className="flex flex-row justify-between items-center">
          {" "}
          <div className="flex flex-row">
            <p className="text-gray-500">{location}</p>
          </div>
          <div className="flex flex-row">
            <p className="text-gray-500">{status}</p>
          </div>
        </div>
        <p className="mt-8 font-semibold text-md">Overview</p>
        <p className="text-sm text-gray-400"> {description} </p>
        <ApplyModal internshipId={internshipId} />
      </div>
    </section>
  );
};

export default InternshipDetails;
