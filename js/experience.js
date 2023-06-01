document.getElementById("work-btn").style.color = "#6e57e0";

function work() {
  let education = document.getElementById("education-content");
  let work = document.getElementById("work-content");
  education.style.display = "none";
  work.style.display = "block";
  document.getElementById("work-btn").style.color = "#6e57e0";
  document.getElementById("education-btn").style.color = "white";
}

function education() {
  let education = document.getElementById("education-content");
  let work = document.getElementById("work-content");
  work.style.display = "none";
  education.style.display = "block";
  document.getElementById("education-btn").style.color = "#6e57e0";
  document.getElementById("work-btn").style.color = "white";
}
