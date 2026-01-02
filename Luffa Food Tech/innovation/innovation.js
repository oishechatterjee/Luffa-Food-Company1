// Selecting the Elements
const modals = document.querySelectorAll(".model-content");
const btns = document.querySelectorAll(".learn-more");
const closeBtns = document.querySelectorAll(".close-btn");




//'index'ensures the 1st button open the 1st modal,2nd button open the 2nd modal,etc.
btns.forEach((btn,index) =>{
btn.onclick = function() {
  if(modals[index])
  {
  modals[index].style.display = "block";
}
};
});

//Loop through each close button to hide the modal
 
closeBtns.forEach((closeBtn,index) => {
  

closeBtn.onclick = function() { if (modals[index]){

  modals[index].style.display = "none";
}
};
});


// Close the box if the user clicks anywhere outside of it
window.onclick = function(event) {modals .forEach((modal) => {
  

  if (event.target == modal) {
    modal.style.display = "none";
  }
});};


