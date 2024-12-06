// Exercise 1
// • Create a function that accepts an array of strings as a parameter
// • The function should return a new array (it should NOT modify the original 
// array)
// • The new array returned should have the same elements as the original array 
// but each element is lowerCase


// let elements =["Red","Green","Yellow","Blue","Black"];
// function getArray(elements){
//     let newElement=elements.join(",").toLowerCase()
//     return (newElement.split(","))
// }
// console.log(getArray(elements))
// console.log(elements)

// ----------------------------------------------------------------------------------------------------------------------------------
// EX 2:
// • Create a function that accepts 3 numbers. The function should return the 
// sum of those 3 numbers.
//  • All arguments are optional, if the user passes 3 numbers, it should return 
// their sum. If he passes 2 numbers, it should return the sum of those 2. if he 
// passes only 1 number, it should return that same number. If he does not pass 
// any arguments at all, it should return 0
//  • You should then display the result in the span with id="result"


// let total=document.getElementById("result")

// let btn=document.getElementById("btn")

// function calcSum(num1, num2, num3) {
//     let result = num1 + num2 + num3;
//     return result;
//   }
//   btn.addEventListener("click", function () {

//     let num1 = Number(document.getElementById("num1").value) || 0; // تحويل إلى رقم أو 0 إذا كان الحقل فارغًا
//     let num2 = Number(document.getElementById("num2").value) || 0;
//     let num3 = Number(document.getElementById("num3").value) || 0;


//     total.innerHTML = `The sum is: ${calcSum(num1, num2, num3)}`;
//   });

  // ----------------------------------------------------------------------------------------------------------------------------------
// EX 3:
// • create div with initial height 10px and width 10px and opacity 0.5
// • create 4 button each of them with a  click handler grow, shrink, fadeout, fadein
// • If the user clicks grow, then the div with id=“target” should animate and grow in 
// both width and height to (500px * 500px)
// • If the user clicks shrink, then the div with id=“target” should animate and its width 
// and height should decrease to (50px * 50px)


// let shape=document.getElementById("target")
// let grow=document.getElementById("grow")
// let shrink=document.getElementById("shrink")
// let fadeout=document.getElementById("fadeout")
// let fadein=document.getElementById("fadein")

// grow.addEventListener('click',function(){
// shape.style.width="500px"
// shape.style.height="500px"
// })

// shrink.addEventListener('click',function(){
//     shape.style.width="50px"
//     shape.style.height="50px"
//     })


//     fadeout.addEventListener("click", function () {
//         shape.style.opacity = "0.1"; 
//       });
    

//       fadein.addEventListener("click", function () {
//         shape.style.opacity = "1";
//       });

  // ----------------------------------------------------------------------------------------------------------------------------------
// EX 4:
// create div with id timer and start button
//  • When the user clicks  the "start" button should display on screen 
// timer from 0 and increase every second by 1 And the button's 
// text should be "stop"  
// • When the user clicks the button again, it should stop counting. 
// And the button's text should be "start"  
// • If the user clicks button again, continue the count from the last 
// count the timer reached 
// • [the timer this time will be the innertext from elem with id timer 
// not from 0]


let timer = document.getElementById("timer")
let button =document.getElementById("btn")

let count = 0; 
let countInterval = null; 

function setTimer() {
  if (button.innerText === "Start") {
 
    button.innerText = "Stop";
    countInterval = setInterval(() => {
      count++; 
      timer.innerText = count;
    }, 1000);
  } else {

    button.innerText = "Start";
    clearInterval(countInterval); 
  }
}


button.addEventListener("click", setTimer);