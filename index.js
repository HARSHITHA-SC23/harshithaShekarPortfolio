
function topBarResponsive() {
    var topBarId = document.getElementById("responsiveTopBar");
    if (topBarId.className === "topBar") {
        topBarId.className += " responsive";
    } else {
        topBarId.className = "topBar";
    }
}