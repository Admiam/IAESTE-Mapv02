// interface ButtonProps {
//   text: string;
//   onPress: () => void;
//   containerStyles?: object;
// }
import React, { useState } from "react";

const LogInForm = (
  setType: string,
  setOnChange: () => void,
  setTitle: string,
  setValue: any
) => {
  return (
    <label className="block max-w-1/3 ">
      <span className="block text-sm font-medium text-slate-700">
        {setTitle}
      </span>
      <input
        type={setType}
        name={setType}
        value={setValue}
        onChange={setOnChange}
        className="mt-1 block w-full h-10 p-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
        required
      />
    </label>
  );
};
export default LogInForm;
