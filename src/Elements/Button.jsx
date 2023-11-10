import React from "react";

const Button = ({ variant = "  bg-red-500 text-white px-5 py-1 rounded-md", children, onDel }) => {
  return (
    <button className={variant} onClick={onDel}>
      {children}
    </button>
  );
};

export default Button;
