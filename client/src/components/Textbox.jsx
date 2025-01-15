import React from "react";
import clsx from "clsx";

// eslint-disable-next-line react/display-name
const Textbox = React.forwardRef(
  (
    // eslint-disable-next-line react/prop-types
    { type, placeholder, label, className, register, name, error },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register}
          aria-invalid={Boolean(error)}
          className={clsx(
            "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
            className
          )}
        />

        {error && (
          <span className="text-xs text-[#f64949fe] mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;
