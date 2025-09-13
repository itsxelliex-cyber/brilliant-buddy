
document.getElementById("nextButton").addEventListener("click", function() {
  const nameInput = document.getElementById("nameInput");
   const name = nameInput.value.trim();
   if (!name) {
      alert("Please enter your name.");
      nameInput.focus();
      return;
   }
  let target = document.getElementById("roleSelect").value === "student"
    ? "studentportal.html"
    : "teacherportal.html";
  window.location.href = `${target}?name=${name}`;

});



let studentNameInput;

document.getElementById("submitGradeButton").onclick = (function() {
  studentNameInput= document.getElementById("studentNameInput").value;
  console.log(studentNameInput);
  const gradeInput = document.getElementById("gradeInput");
  const studentName = studentNameInput.value.trim();
  const grade = gradeInput.value.trim();
  if (!studentName || !grade) {
    alert("Please enter both student name and grade.");
    return;
  }
  if (isNaN(grade) || grade < 0 || grade > 100) {
    alert("Please enter a valid grade between 0 and 100.");
    gradeInput.focus();
    return;
  }
  const grades = JSON.parse(localStorage.getItem("grades")) || [];
  grades.push({ name: studentName, grade });
  localStorage.setItem("grades", JSON.stringify(grades));
let tableHTML = "<table border='1'><tr><th>Student Name</th><th>Grade (%)</th></tr>";
grades.forEach(({ name, grade }) => {
  tableHTML += `<tr><td>${name}</td><td>${grade}</td></tr>`;
});
tableHTML += "</table>";

document.body.innerHTML += tableHTML;
  window.location.href = "allgrades.html";
})
  

