
function topBarResponsive() {
    var topBarId = document.getElementById("responsiveTopBar");
    if (topBarId.className === "topBar") {
        topBarId.className += " responsive";
    } else {
        topBarId.className = "topBar";
    }
}

// Qualification JavaScript Code

document.getElementById("workButton").style.backgroundColor = "#000000";
document.getElementById("workButton").style.color = "#C7E9B0";

function work() {
    let education = document.getElementById("eduContent");
    let work = document.getElementById("workContent");
    education.style.display = "none";
    work.style.display = "grid";
    document.getElementById("workButton").style.backgroundColor = "#000000";
    document.getElementById("workButton").style.color = "#C7E9B0";
    document.getElementById("eduButton").style.color = "#000000";
    document.getElementById("eduButton").style.backgroundColor = "#C7E9B0";
}

function education() {
    let education = document.getElementById("eduContent");
    let work = document.getElementById("workContent");
    work.style.display = "none";
    education.style.display = "grid";
    document.getElementById("eduButton").style.backgroundColor = "#000000";
    document.getElementById("eduButton").style.color = "#C7E9B0";
    document.getElementById("workButton").style.color = "#000000";
    document.getElementById("workButton").style.backgroundColor = "#C7E9B0";
}

// Expertise JavaScript Code

const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  //   document.getElementById('skill-set').scrollLeft += 20;
  document.getElementById("skill-set").scrollBy({
    left: 250,
    behavior: "smooth",
  });
};
buttonLeft.onclick = function () {
  //   document.getElementById('skill-set').scrollLeft -= 20;
  document.getElementById("skill-set").scrollBy({
    left: -250,
    behavior: "smooth",
  });
};