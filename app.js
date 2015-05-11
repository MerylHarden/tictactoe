var score = 0;
var boxes = document.getElementsByClassName('box');

initialize();

function randomNumber(){
	return Math.floor(Math.random() * 9);
}

function initialize(){
	boxes[randomNumber()].innerHTML = "<img src='x.jpeg'>"

}

for(var i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('click', function(){
			if(this.innerHTML !== ""){
				this.innerHTML = "";
				score++;
				document.getElementById('score').innerHTML = score;
				boxes[randomNumber()].innerHTML = "<img src='x.jpeg'>"
			}
		});
	}

function () {

}
