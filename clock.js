(function(){ 
console.info("Hello JS"); 

const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);

const myDate = new Date();
console.dir(myDate);


})();