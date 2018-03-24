var p1button = document.getElementById("p1");
var p1score = 0;
var p1display = document.getElementById("p1display");

var p2button = document.getElementById("p2"); 
var p2score = 0;
var p2display = document.getElementById("p2display"); 

var scoreDisplay = document.getElementById("finalScore");

var numInput = document.querySelector("input"); 

var resetButton = document.getElementById("reset");

var gameOver = false; 
var winningScore = 5; 


//change score to win
numInput.addEventListener("change", function(){

	scoreDisplay.textContent = Number(numInput.value);
	winningScore = Number(numInput.value);
	reset();

});
//player 1 score
p1button.addEventListener("click", function(){
	if(!gameOver){
		p1score++; 
		if(p1score === winningScore){
			gameOver = true; 
			p1display.classList.add("winner"); 
		}
		p1display.textContent = p1score;
	}
	  
});
//player 2 score
p2button.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore) {
			gameOver = true; 
			p2display.classList.add("winner"); 
		}
		p2display.textContent = p2score;
	}	
});

//reset button
resetButton.addEventListener("click", function(){
	reset();
});

//reset function
function reset() {
	gameOver = false;
	p1score = 0;
	p1display.textContent = p1score; p1display.classList.remove("winner"); 
	p2score = 0;
	p2display.textContent = p2score; p2display.classList.remove("winner");	
}

