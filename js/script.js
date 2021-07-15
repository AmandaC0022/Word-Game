var textInput = document.querySelector(".word-blanks");  
var timerEl = document.getElementById("countdown"); 
var timeLeft = 10; 
var wins = document.getElementsByClassName(".win"); 
var losses = document.getElementsByClassName(".loss"); 
var startButtonClick = document.querySelector(".start-button"); 

startButtonClick.addEventListener("click", function() {      
  countdown();  
  playGame(); 
});   

//countdown clock 
function countdown() {
    var timeInterval = setInterval(function () {
      
      if (timeLeft >= 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } 
      else {
        clearInterval(timeInterval);
      };  
    }, 1000);
  }  
//Event Listener for keyboard input 
window.addEventListener("keydown", checkKeyPress); 

function addLetters() {
  //changes the array back into a string
  var newStr = myArr.join(" ");  
  //adds new letter to the text 
  textInput.textContent = newStr;
}
function checkKeyPress(e) {
  var str = textInput.textContent = "J _ v _ S c r _ _ t"; 
  // this turns the string into an array
  myArr = str.split(" ");  
  
  // allow user to change the letter 
  if (e.key === "a") {
    myArr[1] = e.key;
    myArr[3] = e.key;
    addLetters(); 
  }
  if (e.key === "i") { 
    myArr[1] = "a"; 
    myArr[3] = "a";
    myArr[7] = e.key; 
    addLetters(); 
  }
  if (e.key === "p") {
    myArr[1] = "a"; 
    myArr[3] = "a"; 
    myArr[7] = "i"; 
    myArr[8] = e.key; 
    addLetters(); 
  }
  return newStr; 
} 
 

function playGame() {
  if (timerEl === 0 && textInput === "J a v a S c r i p t") {
    alert("Yay! You Win!") 
    wins ++; 
    wins.textContent; 
  } else {
    alert("Sorry. Try Again") 
    losses ++; 
    losses.textContent; 
  }
}

 




  
  
  