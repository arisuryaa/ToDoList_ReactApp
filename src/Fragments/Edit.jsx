import React, { useState } from "react";
import Button from "../Elements/Button";

const Edit = ({ Modal }) => {
  const [click, setClick] = useState(Modal);

  const HandleOnClick = () => {
    setClick(!click);
  };

  return (
    click && (
      <div className="fixed top-0 left-0 h-screen w-screen z-10 flex items-center justify-center">
        <div className="bg-black h-full w-full opacity-50 absolute top-0 left-0 z-10"></div>
        <div className="bg-white w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-8">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="font-bold text-2xl">Edit Data</h1>
            <input type="text" className="bg-slate-600 text-white w-2/3 h-10 rounded-md placeholder:text-white px-5" placeholder="Masukkan data" />
            <div className="flex gap-5">
              <Button>Submit</Button>
              <Button variant="bg-red-500 text-white px-5 py-1 rounded-md" onClick={HandleOnClick}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Edit;
