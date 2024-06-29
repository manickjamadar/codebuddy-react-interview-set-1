import React from "react";

const FirstForm = () => {
  return (
    <div className="gap-22 flex flex-col gap-6 rounded-lg bg-white p-6 shadow-lg">
      <h1 className="text-center text-lg">Form Header</h1>
      <form className="flex flex-col gap-4">
        <input className="base-input" type="text" placeholder="Enter your email" />
        <input className="base-input" type="password" placeholder="Enter your password" />
        <div className="flex justify-center gap-4">
          <button className="base-button" disabled>
            Next
          </button>
          <button className="base-button" disabled>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstForm;
