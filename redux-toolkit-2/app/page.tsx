"use client";

import CreateTodo from "@/components/CreateTodo";
import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((store: any) => {
    return store.todoSlice.todos;
  });
  console.log("Store data : ", data);
  return (
    <main className="mt-8 items-center flex flex-col">
      <h1 className="font-bold text-3xl my-3">List of Todos</h1>
      <CreateTodo />
      {data?.map((todo: any) => {
        return (
          <div
            key={todo.id}
            className="my-3 p-3 border border-gray-200 rounded-md"
          >
            <h2 className="font-semibold text-lg">{todo.id}</h2>
            <h2 className="font-semibold text-lg">{todo.title}</h2>
            <p className="text-gray-500">{todo.description}</p>
            <p className="text-gray-800">{todo.completed ? "Yes" : "No"}</p>
          </div>
        );
      })}
      <hr />
    </main>
  );
}
