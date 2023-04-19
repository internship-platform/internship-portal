import React from "react";

const EmptyInernshipAlert = () => {
  return (
    <section className="bg-white w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-4 rounded-md">
        <p className="text-gray-800 text-center">
          You do not have any open positions.
        </p>
      </div>
    </section>
  );
};

export default EmptyInernshipAlert;
