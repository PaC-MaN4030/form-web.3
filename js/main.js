document.getElementById("show-form-btn").addEventListener("click", function () {
  document.getElementById("form").style.display = "block";
  this.disabled = true;
});

document
  .getElementById("close-form-btn")
  .addEventListener("click", function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("show-form-btn").disabled = false;
  });

document.getElementById("calculate").addEventListener("click", function () {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let hours = document.getElementById("hours").value;
  let tax = document.getElementById("tax").value;
  let salary = hours * 1000000 - tax;
  let finalSalary = Math.round(salary);
  document.getElementById(
    "result"
  ).innerText = `hi ${firstName} ${lastName} your salary is ${finalSalary}`;
});
