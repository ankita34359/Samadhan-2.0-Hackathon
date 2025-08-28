### Mini task: Simple Student Marks Calculator

```javascript.  

// Function: Student Marks Calculator
function studentMarksCalculator(name, marks) {
  let total = 0;
  let highest = marks[0];

  // Loop through marks
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }

  let average = total / marks.length;

  // Print details
  console.log("Student Marks Calculator");
  console.log("Name       :", name);
  console.log("Marks      :", marks.join(", "));
  console.log("Total      :", total);
  console.log("Average    :", average.toFixed(2));
  console.log("Highest    :", highest);
}


// Example usage
studentMarksCalculator("Ankita Gupta", [85, 92, 78, 96, 88]);

Student Marks Calculator
Name       : Ankita Gupta
Marks      : 85, 92, 78, 96, 88
Total      : 439
Average    : 87.80
Highest    : 96

```
