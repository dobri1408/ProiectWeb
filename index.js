function myFunction() {
  var x = document.getElementById("navItems");
  console.log("enter");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  e.preventDefault();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function openModal(e) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  e.preventDefault();
}
