var r = document.querySelector(':root');
// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--primary'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  
  r.style.setProperty('--primary', '#6D213C');
  r.style.setProperty('--background', '#946846');
  r.style.setProperty('--secondary-light', '#BAAB68');
  r.style.setProperty('--secondary-light', '#E3C16F');
}


const toggle = ()=>{
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navLinks.classList.add('open');
    menuOpen=true;
  } else {    
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
    menuOpen=false;
  }
}



const menuBtn = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

let menuOpen = false;
menuBtn.addEventListener('click', toggle);
navLinks.addEventListener('click', toggle);
