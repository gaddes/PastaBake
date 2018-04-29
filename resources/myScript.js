
function toggleNav() {
    var x = document.getElementById("menu-btn");
    if (x.className === "btn hide") {
      /* Open sidenav */
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
      x.className = "btn show"; // Change class name of menu button to reflect the fact that the sidenav is VISIBLE
    } else {
      /* Close sidenav */
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight = "0";
      x.className = "btn hide"; // Change class name of menu button to reflect the fact that the sidenav is NOT VISIBLE
    }
}
