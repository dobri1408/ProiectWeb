function myFunction() {
  var x = document.getElementById("navItems");
  console.log("enter");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
