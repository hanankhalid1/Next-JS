"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewTodo } from "@/store/slices/todoSlice";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [completed, setCompleted] = useState("");

  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("onClickHandler is running");
    dispatch(
      createNewTodo({
        id: id,
        title: title,
        description: description,
        completed: completed,
      })
    );
  };

  return (
    <div>
      <h2 className="font-semibold text-lg my-3">Create Todo</h2>
      <input
        type="number"
        placeholder="Enter Id"
        className="border border-gray-200 rounded-md p-2 my-2"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="border border-gray-200 rounded-md p-2 my-2"
      />
      <br />
      <input
        type="text"
        placeholder="Enter Description"
        className="border border-gray-200 rounded-md p-2 my-2"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Is completed"
        className="border border-gray-200 rounded-md p-2 my-2"
        value={completed}
        onChange={(e) => {
          setCompleted(e.target.value);
        }}
      />
      <br />

      <button
        onClick={onClickHandler}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Create Todo
      </button>
    </div>
  );
}

export default CreateTodo;
