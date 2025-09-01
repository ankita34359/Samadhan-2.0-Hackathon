### To-Do List (local state only)

```javascript

import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask(""); // clear input
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">✅ To-Do List</h1>

      {/* Input + Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="border p-2 flex-grow rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Render list */}
      <ul className="list-disc pl-5">
        {todos.map((t, index) => (
          <li key={index} className="mb-1">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
