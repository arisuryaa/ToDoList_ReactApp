import React from "react";
import Button from "../Elements/Button";
import Form from "../Fragments/Form";
import { useState } from "react";
import Edit from "../Fragments/Edit";

const Home = () => {
  const [database, setDatabase] = useState([
    {
      id: 1,
      text: "aku akan jadi kaya",
    },

    {
      id: 2,
      text: "aku akan buktikan!",
    },
    {
      id: 3,
      text: "Tunggu aku!!!",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const delData = (id) => {
    const yakin = confirm("yakin?");
    return yakin ? setDatabase(database.filter((e) => e.id !== id)) : "";
  };

  const addData = (datas) => {
    const id = database.length + 1;
    const newData = {
      id: id,
      text: datas,
    };

    return datas.length < 1 ? false : setDatabase([...database, newData]);
  };

  const HandleOnOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-slate-300">
      <div className="flex items-center w-full flex-col pt-5">
        <h1 className="text-4xl font-semibold text-slate-500">To Do List Item</h1>
        <h1 className="text-sm pt-3 font-semibold text-slate-500">by Dewa</h1>
      </div>
      <div className="mt-5 flex flex-col flex-wrap gap-5 justify-center items-center w-full h-full">
        {database.map((e, i) => (
          <div className="w-4/5 lg:w-1/2 bg-white h-fit py-3 rounded-md flex justify-between px-4 items-center" key={i}>
            <h2>{e.text}</h2>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-5 py-1 rounded-md" onClick={HandleOnOpen}>
                Edit
              </button>
              <Button onDel={() => delData(e.id)}>Delete</Button>
            </div>
          </div>
        ))}
        <Form submit={addData}></Form>
      </div>
      {openModal && (
        <div className="fixed top-0 left-0 h-screen w-screen z-10 flex items-center justify-center">
          <div className="bg-black h-full w-full opacity-50 absolute top-0 left-0 z-10"></div>
          <div className="bg-white w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-8">
            <div className="flex flex-col gap-5 items-center">
              <h1 className="font-bold text-2xl">Edit Data</h1>
              <input type="text" className="bg-slate-600 text-white w-2/3 h-10 rounded-md placeholder:text-white px-5" placeholder="Masukkan data" />
              <div className="flex gap-5">
                <Button variant="bg-blue-500 text-white px-5 py-1 rounded-md">Submit</Button>
                <button className=" bg-red-500 text-white px-5 py-1 rounded-md" onClick={HandleOnOpen}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
