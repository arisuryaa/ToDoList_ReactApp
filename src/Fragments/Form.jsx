import React, { useState } from "react";

const Form = ({ submit }) => {
  const [datas, setDatas] = useState("");

  const HandleOnChanges = (e) => {
    setDatas(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submit(datas);
    setDatas("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-5 w-4/5 lg:w-1/2 ">
      <input type="text" value={datas} placeholder="Tambah Data" className="w-full rounded-md px-5 shadow-lg bg-slate-400 placeholder:text-white text-white outline-none" onChange={HandleOnChanges} />
      <button type="submit" className="bg-blue-300 px-5 py-1 rounded-md text-black border-2 border-black shadow-lg ">
        Submit
      </button>
    </form>
  );
};

export default Form;
