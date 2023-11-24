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


<div id="clockFace">
              <div id="secondHand"></div>
              <div id="minHand"></div>
              <div id="hrHand"></div>
              <div id="pin"></div>
</div>

const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
hrHand.style.backgroundColor = '#0f0';
<div id="secondHand" style="transform: rotate(12deg);"></div>

const seconds = myDate.getSeconds();
const rotSeconds = seconds * 6 - 90;

})();