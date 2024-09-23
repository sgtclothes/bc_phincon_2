document.getElementById("toggleCollapse").addEventListener("click", () => {
    var x = document.getElementById("topNavigationBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
});
