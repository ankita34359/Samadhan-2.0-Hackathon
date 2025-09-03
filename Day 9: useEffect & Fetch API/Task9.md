```javascript

import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/students'); // Your backend URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the function
    fetchStudents();
  }, []); // Empty dependency array means this runs only once on mount

  if (isLoading) {
    return <p>Loading students...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Student Directory</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.major}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

```
