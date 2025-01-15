import clsx from "clsx";
import React from "react";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={clsx("px-3 py-2 outline-none", className)}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
