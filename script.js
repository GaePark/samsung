const controller = new ScrollMagic.Controller();
const revealElements = document.getElementsByClassName("fade-in");

for (let i=0; i<revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 20,					
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    .addTo(controller);
}

let acc = document.getElementsByClassName("sort-wrap");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
document.getElementById("first").click();

let rot = document.getElementsByClassName("sort-angle");