### Mini task: API returning a list of students (JSON)

```javascript

// Step 1: Import express
const express = require("express");
const app = express();
const PORT = 3000;

// Step 2: Sample students data
const students = [
  { id: 1, name: "Ankita", age: 20 },
  { id: 2, name: "Rahul", age: 22 },
  { id: 3, name: "Priya", age: 19 }
];

// Step 3: Create GET route
app.get("/students", (req, res) => {
  res.json(students); // send JSON response
});

// Step 4: Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

```
