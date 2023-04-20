import React from "react";
import { Link } from "react-router-dom";
const CompanyCard = ({ internship }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">
          {internship.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-4">
          {internship.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">{internship.city}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-4 flex justify-between">
        <span className="text-sm font-medium text-gray-900">
          {internship.status}
        </span>
        <Link
          to={`/applications/${internship.id}`}
          className="text-sm font-medium text-indigo-500 hover:text-indigo-400"
        >
          View Applications
        </Link>
      </div>
    </div>
  );
};
export default CompanyCard;
