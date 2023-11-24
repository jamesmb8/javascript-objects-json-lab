(function(){ 
console.info("Hello JS"); 

const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode);


const updateTime = function(){

const myDate = new Date();
myNode.innerHTML = myDate.toLocaleTimeString();

};

setInterval(updateTime, 1000);
updateTime();


})();