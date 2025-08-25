// Function to find highest marks

```javascript

function findHighestMarks(marks) {
  let highest = marks[0]; // assume first is highest

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }

  return highest;
}

// Example usage
const marks = [85, 92, 78, 96, 88, 73];
console.log("Highest Marks:", findHighestMarks(marks));

```
