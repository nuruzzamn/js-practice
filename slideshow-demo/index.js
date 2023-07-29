//find total how many eliment in slide show element 
const slideshowElements = document.querySelectorAll(".slideshow-element");

// count sothat we can control start new slider after finish last slider 
let countElements = 1;

setInterval(() => {
// show every new element and countElements count this number 
  countElements++;

  // find current element class and remove from slider 
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  // call for next slider. check and if countElements getter than total element length then update  
  if (countElements > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 3000); 