const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  //   document.getElementById('skill-set').scrollLeft += 20;
  document.getElementById("project-details").scrollBy({
    left: 250,
    behavior: "smooth",
  });
};
buttonLeft.onclick = function () {
  //   document.getElementById('skill-set').scrollLeft -= 20;
  document.getElementById("project-details").scrollBy({
    left: -250,
    behavior: "smooth",
  });
};