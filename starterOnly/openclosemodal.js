function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close") //constant which retrieves the element corresponding to the cross

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}  


//waiting for a click on the close class and then launching the function closeModal
close.addEventListener('click', closeModal); 


//function allowing to close the modal when clicking on the cross
function closeModal() {
  modalbg.style.display = "none";
}
