"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState(""); // Initialize state for tasks and descriptions
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, description }]); // Add task to the task list
    setTask(""); // Clear input fields after submission
    setDescription("");
  };

  const handleDelete = (index) => {
    const updatedTasks = mainTask.filter((_, i) => i !== index); // Remove task by index
    setMainTask(updatedTasks);
  };

  let renderTask = mainTask.length ? (
    mainTask.map((item, index) => (
      <li
        key={index}
        className="bg-white p-4 rounded-md m-2 shadow-md flex justify-between items-center"
      >
        <div className="w-full flex justify-between items-center">
          <div className="font-bold">{item.task}</div>
          <div className="text-gray-600 ml-6 flex-1 text-right">{item.description}</div>
        </div>
        <button
          onClick={() => handleDelete(index)}
          className="bg-red-500 text-white px-2 py-1 rounded-md ml-4"
        >
          Delete
        </button>
      </li>
    ))
  ) : (
    <h2>No Task Available</h2>
  );

  return (
    <>
      <h1 className="bg-black text-white p-10 text-4xl font-bold text-center">
        Tapaswi's Todo List
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-black bg-white border rounded border-black m-6 px-4 py-2"
          placeholder="Enter your Task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          className="text-black bg-white border rounded border-zinc-900 m-6 px-4 py-2"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="bg-zinc-900 text-white px-4 py-2 m-5">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
