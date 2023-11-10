import React from "react";

const Form = () => {
  return (
    <form action="" className="flex gap-5 w-1/2">
      <input type="text" placeholder="Tambah Data" className="w-full rounded-md px-5 shadow-lg" />
      <button className="bg-blue-300 px-5 py-1 rounded-md text-black border-2 border-black shadow-lg ">Submit</button>
    </form>
  );
};

export default Form;
