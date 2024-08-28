"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from the backend
  const fetchTodos = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8080/getTodos")
      .then((response) => {
        console.log("Data fetched:", response.data); // Debug log
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Add a new todo
  const addTodo = () => {
    // Validate input fields
    if (title.trim() === "" || description.trim() === "") return;

    const newTodo: Omit<Todo, "id"> = {
      title,
      description,
      completed,
    };

    axios
      .post("http://127.0.0.1:8080/addTodo", newTodo)
      .then((response) => {
        setSuccessMessage("Todo added successfully!");
        setTitle("");
        setDescription("");
        setCompleted(false);
        fetchTodos(); // Fetch todos to update the list
        setTimeout(() => setSuccessMessage(""), 3000); // Hide message after a few seconds
      })
      .catch((error) => {
        console.error("There was an error adding the todo!", error);
      });
  };

  // Update a todo
  const updateTodo = () => {
    if (editTodoId === null) return;

    const updatedTodo: Todo = {
      id: editTodoId,
      title,
      description,
      completed,
    };

    axios
      .put(`http://127.0.0.1:8080/updateTodo/${editTodoId}`, updatedTodo)
      .then(() => {
        setSuccessMessage("Todo updated successfully!");
        setTitle("");
        setDescription("");
        setCompleted(false);
        setEditTodoId(null);
        fetchTodos(); // Fetch todos to update the list
        setTimeout(() => setSuccessMessage(""), 3000); // Hide message after a few seconds
      })
      .catch((error) => {
        console.error("There was an error updating the todo!", error);
      });
  };

  // Delete a todo
  const deleteTodo = (todoId: number) => {
    axios
      .delete(`http://127.0.0.1:8080/deleteTodo/${todoId}`)
      .then(() => {
        setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
      })
      .catch((error) => {
        console.error("There was an error deleting the todo!", error);
      });
  };

  // Edit a todo - populate fields for editing
  const editTodo = (todo: Todo) => {
    setId(todo.id.toString());
    setTitle(todo.title);
    setDescription(todo.description);
    setCompleted(todo.completed);
    setEditTodoId(todo.id);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">TODO App</h1>

        {successMessage && (
          <div className="mb-4 text-green-600 font-semibold">
            {successMessage}
          </div>
        )}

        <div className="mb-4">
          <input
            type="text"
            placeholder="ID (for editing)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            disabled
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          ></textarea>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mr-2"
            />
            <label>Completed</label>
          </div>
        </div>

        {editTodoId === null ? (
          <button
            onClick={addTodo}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Add TODO
          </button>
        ) : (
          <button
            onClick={updateTodo}
            className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
          >
            Update TODO
          </button>
        )}

        <button
          onClick={fetchTodos}
          className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition mt-4"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get All Todos"}
        </button>

        <ul className="mt-6">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-4 mb-2 border rounded ${
                todo.completed ? "bg-green-100" : "bg-gray-50"
              }`}
            >
              <h2 className="text-xl font-semibold">{todo.title}</h2>
              <p className="text-gray-700">{todo.description}</p>
              <p className="text-sm">ID: {todo.id}</p>
              <p className="text-sm">
                Completed: {todo.completed ? "Yes" : "No"}
              </p>
              <div className="flex space-x-4 mt-2">
                <button
                  onClick={() => editTodo(todo)}
                  className="text-sm p-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-sm p-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
