
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
  

