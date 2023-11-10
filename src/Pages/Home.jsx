import React from "react";
import Button from "../Elements/Button";
import Form from "../Fragments/Form";
import { useState } from "react";

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
              <Button>Edit</Button>
              <Button variant="bg-red-500 text-white px-5 py-1 rounded-md" onClick={() => delData(e.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Form submit={addData}></Form>
      </div>
    </div>
  );
};

export default Home;
