// server.js

```javascript
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// In-memory todo store
let todos = [
  { id: uuidv4(), text: "Learn React + API", completed: false, createdAt: new Date().toISOString() },
  { id: uuidv4(), text: "Build To-Do App", completed: false, createdAt: new Date().toISOString() },
];

// GET /todos
app.get("/todos", (req, res) => {
  // optional query ?q=search
  const q = (req.query.q || "").toLowerCase();
  const results = q ? todos.filter(t => t.text.toLowerCase().includes(q)) : todos;
  res.json(results);
});

// POST /todos
app.post("/todos", (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: "text required" });

  const newTodo = { id: uuidv4(), text: text.trim(), completed: false, createdAt: new Date().toISOString() };
  todos.unshift(newTodo); // newest first
  res.status(201).json(newTodo);
});

// DELETE /todos/:id
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  todos.splice(idx, 1);
  res.status(204).send();
});

// Optional: PATCH to toggle complete
app.patch("/todos/:id/toggle", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  todo.completed = !todo.completed;
  res.json(todo);
});

app.listen(PORT, () => console.log(`Todo API running on http://localhost:${PORT}`));
```
