import React from "react";
const CompanyCard = ({
  jobTitle,
  description,
  location,
  status,
  timestamp,
}) => {
  return (
    <section className="col-span-1">
      <div className="my-16 flex flex-col max-w-[320px] min-h-[180px] shadow">
        <div className="flex flex-col p-4">
          <p className="font-semibold text-base">{jobTitle}</p>
          <p className="text-sm mt-4 text-gray-600 line-clamp-4">
            {description}
          </p>
          <div className="flex flex-row justify-between">
            <p className="mt-4 text-gray-500">{location}</p>
            <p className="mt-4 mr-4 text-green-500 text-sm">{status}</p>
          </div>
        </div>
        <div className="flex flex-row p-4 bg-gray-100 rounded-b-lg">
          <p className="text-xs text-gray-500 ml-auto">{timestamp}</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyCard;
