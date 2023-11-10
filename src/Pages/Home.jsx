import React from "react";
import Button from "../Elements/Button";
import Form from "../Fragments/Form";
import { useState } from "react";

const Home = () => {
  const [database, setDatabase] = useState([
    {
      id: 1,
      text: "aku ingin jadi kaya",
    },

    {
      id: 2,
      text: "aku ingin membuat semua orang kaget!",
    },
    {
      id: 3,
      text: "aku ingin membuat semua orang kaget!",
    },
  ]);

  const delData = (id) => {
    const yakin = confirm("yakin?");
    return yakin ? setDatabase(database.filter((e) => e.id !== id)) : "";
  };

  const addData = (datas) => {
    console.log("OK");
  };

  return (
    <div className="w-full h-screen flex flex-col bg-slate-300">
      <div className="flex justify-center w-full pt-5">
        <h1 className="text-4xl">To Do List Item</h1>
      </div>
      <div className="mt-5 flex flex-col gap-5 justify-center items-center w-full h-full">
        {database.map((e, i) => (
          <div className="w-1/2 bg-white h-12 rounded-md flex justify-between px-4 items-center" key={i}>
            <h2>{e.text}</h2>
            <div className="flex gap-2">
              <Button>Edit</Button>
              <Button variant="bg-red-500 text-white px-5 py-1 rounded-md" onClick={() => delData(e.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Form></Form>
      </div>
    </div>
  );
};

export default Home;
