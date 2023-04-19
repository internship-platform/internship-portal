import React from "react";

const EmptyInternship = () => {
  return (
    <section className="bg-white w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-4 rounded-md">
        <p className="text-gray-800 text-center">
          You have not applied to any internships !
        </p>
      </div>
    </section>
  );
};

export default EmptyInternship;
