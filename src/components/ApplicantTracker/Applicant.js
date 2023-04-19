import React from "react";
import { db } from "../../firebase/firebase";

import { FaCheck, FaTimes, FaCalendar } from "react-icons/fa";

const Applicant = ({
  id,
  name,
  appliedTime,
  position,
  description,
  status,
}) => {
  const updateStatus = (newStatus) => {
    db.collection("applicants")
      .doc(id)
      .update({
        status: newStatus,
      })
      .then(() => {
        console.log("Status updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let icons = null;

  if (status === "applied") {
    icons = (
      <div className="flex flex-row">
        <FaCalendar
          className="text-gray-500 mr-2"
          onClick={() => updateStatus("applied")}
        />
        <FaCheck
          className="ml-4 text-green-500 mr-2"
          onClick={() => updateStatus("interview")}
        />
        <FaTimes
          className="ml-4 text-red-500"
          onClick={() => updateStatus("rejected")}
        />
      </div>
    );
  } else if (status === "interview") {
    icons = (
      <div className="flex flex-row">
        <FaCheck
          className="text-green-500 mr-2"
          onClick={() => updateStatus("accepted")}
        />
        <FaTimes
          className="ml-4 text-red-500"
          onClick={() => updateStatus("rejected")}
        />
      </div>
    );
  }

  return (
    <div className="p-4 mt-8 mb-8 flex flex-col rounded-md shadow hover:opacity-85 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <p>{name}</p>
      <p className="text-sm text-gray-500">{appliedTime}</p>

      <p className="mt-4">{position}</p>
      <p className="mt-4 line-clamp-2 text-sm text-gray-500">{description}</p>
      <div className="flex flex-row justify-between mt-4">{icons}</div>
    </div>
  );
};

export default Applicant;
