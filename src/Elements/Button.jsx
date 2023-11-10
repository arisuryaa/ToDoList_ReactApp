import React from "react";

const Button = ({ variant = "bg-blue-500 text-white px-5 py-1 rounded-md", children, onClick }) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
