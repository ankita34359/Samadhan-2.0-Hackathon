// server.js

```javascript
const express = require("express");
const { v4: uuidv4 } = require("uuid"); // npm i uuid
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// simple in-memory store
const students = [];

/**
 * GET /students
 * optional query: ?q=searchName
 */
app.get("/students", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const results = q ? students.filter(s => s.name.toLowerCase().includes(q)) : students;
  res.json(results);
});

/** GET /students/:id */
app.get("/students/:id", (req, res) => {
  const s = students.find(st => st.id === req.params.id);
  if (!s) return res.status(404).json({ error: "Student not found" });
  res.json(s);
});

/** POST /students */
app.post("/students", (req, res) => {
  const { name, roll, course, year } = req.body;
  if (!name || !roll) return res.status(400).json({ error: "name and roll required" });

  const newStudent = { id: uuidv4(), name, roll, course: course || "", year: year || "" };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

/** PUT /students/:id */
app.put("/students/:id", (req, res) => {
  const idx = students.findIndex(s => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Student not found" });

  const { name, roll, course, year } = req.body;
  if (!name || !roll) return res.status(400).json({ error: "name and roll required" });

  students[idx] = { ...students[idx], name, roll, course: course || "", year: year || "" };
  res.json(students[idx]);
});

/** DELETE /students/:id */
app.delete("/students/:id", (req, res) => {
  const idx = students.findIndex(s => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Student not found" });
  students.splice(idx, 1);
  res.status(204).send(); // no content
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```
