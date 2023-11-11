import React from "react";
import Button from "../Elements/Button";
import Form from "../Fragments/Form";
import { useState } from "react";

const Home = () => {
  const [database, setDatabase] = useState([
    {
      id: 1,
      text: "Masukkan Pengingat Mu!!",
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(0);
  const [values, setValues] = useState("");

  const delData = (id) => {
    const yakin = confirm("yakin?");
    return yakin ? setDatabase(database.filter((e) => e.id !== id)) : null;
  };

  const addData = (datas) => {
    const id = database.length + 1;
    const newData = {
      id: id,
      text: datas,
    };

    return datas.length < 1 ? false : setDatabase([...database, newData]);
  };

  const HandleOnOpen = (id, text) => {
    setData(id);
    setValues(text);
    console.log(id);
    setOpenModal(!openModal);
  };

  const editData = (text) => {
    const id = data;
    const newDatas = {
      id: id,
      text: text,
    };
    const updateData = database.map((item) => {
      if (item.id === id) {
        return newDatas;
      }
      return item;
    });
    setDatabase(updateData);
    setOpenModal(!openModal);
  };

  const HandleOnChanges = (e) => {
    setValues(e.target.value);
  };

  return (
    <div className="flex flex-col w-full h-full my-24 bg-slate-300">
      <div className="flex flex-col items-center w-full pt-5">
        <h1 className="text-4xl font-semibold text-slate-500">To Do List Item</h1>
        <h1 className="pt-3 text-sm font-semibold text-slate-500">by Dewa</h1>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-full gap-5 mt-5">
        {database.map((e, i) => (
          <div key={i} className="flex justify-center w-full ">
            <div className="flex items-center justify-between w-full px-4 py-3 mx-8 bg-white rounded-md lg:w-1/2 h-fit">
              <h2>{e.text}</h2>
              <div className="flex gap-2">
                <button className="px-5 py-1 text-white bg-blue-500 rounded-md" onClick={() => HandleOnOpen(e.id, e.text)}>
                  Edit
                </button>
                <Button onDel={() => delData(e.id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
        {openModal && (
          <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen">
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-50"></div>
            <div className="absolute z-20 w-5/6 p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white lg:w-1/2 top-1/2 left-1/2">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-2xl font-bold">Edit Data</h1>
                <input type="text" className="w-2/3 h-10 px-5 text-white rounded-md bg-slate-600 placeholder:text-white" placeholder="Masukkan data" value={values} onChange={HandleOnChanges} />
                <div className="flex gap-5">
                  <button className="px-5 py-1 text-white bg-blue-500 rounded-md" onClick={() => editData(values)}>
                    Submit
                  </button>
                  <button className="px-5 py-1 text-white bg-red-500 rounded-md" onClick={() => setOpenModal(!openModal)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Form submit={addData}></Form>
      </div>
    </div>
  );
};

export default Home;
