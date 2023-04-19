import React from "react";

const MCard = ({
  imageUrl,
  title,
  company,
  description,
  location,
  timeAgo,
  status,
}) => {
  return (
    <div className="m-16 flex flex-col max-w-[300px] min-h-[180px] shadow">
      <div className="flex flex-row items-center justify-between">
        <img
          src={imageUrl}
          alt="Job"
          className="mt-4 w-8 h-8 object-cover rounded-full ml-4 "
        />
        <p className="mt-4 mr-4 text-gray-500  font-semibold">{status}</p>
      </div>
      <div className="flex flex-col p-4">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-gray-500 my-2 font-semibold">{company}</p>
        <p className="text-sm text-gray-600 line-clamp-4">{description}</p>
        <p className="mt-4 text-gray-400">{location}</p>
      </div>
      <div className="flex flex-row p-4 bg-gray-100 rounded-b-lg">
        <p className="text-xs text-gray-500 ml-auto">{timeAgo}</p>
      </div>
    </div>
  );
};

export default MCard;
