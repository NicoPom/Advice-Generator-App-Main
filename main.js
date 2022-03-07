/* BUTTON ANIMATION */
const button = document.getElementsByClassName('dice-button')[0];
const dice = document.getElementsByClassName('dice')[0];
const diceColor = document.getElementsByTagName('path')[0];
let degrees = 0;

button.addEventListener("mouseup", Roll);
button.addEventListener("mouseenter", Glow);
button.addEventListener("mouseleave", Reverse);


function Roll() { // turn 180 deg every click
    degrees += 180;
    dice.style.transform = "rotate(" + degrees + "deg)";
    dice.style.transition = "1s";
}
function Glow() { // glow button
    button.style.animation = "glowOut 0.5s forwards";
}
function Reverse(){ //reverse glow button
    button.style.animation ="glowIn 0.5s ";
}

/* insert new advice and id number on click from "advice json api" */

const quote = document.getElementById('quote');
const num = document.getElementById('num');
const main = document.getElementsByTagName('main')[0];


button.addEventListener("mouseup", refresh);

function refresh(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        quote.innerHTML ='"' + data.slip.advice + '"';
        num.innerHTML= data.slip.id;
    });
    // fade in animation - add a class then remove it when animation ends
    quote.classList.add('fadeIn');
    num.classList.add('fadeIn');

      
    quote.addEventListener("animationend", ()=> {
        quote.classList.remove('fadeIn');
    });
    num.addEventListener("animationend", ()=> {
        num.classList.remove('fadeIn');
    });

}
   
// Change divider src on window resize

const divider = document.getElementsByClassName('divider')[0];

window.addEventListener("resize", resize)

function resize(){
    if (window.innerWidth > 700){
        divider.src = "images/pattern-divider-desktop.svg";
    }
    else {
        divider.src = "images/pattern-divider-mobile.svg";
    };
}
