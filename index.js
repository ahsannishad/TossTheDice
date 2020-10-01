//dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
var imageSrc1 = document.querySelectorAll("img")[0];
imageSrc1.setAttribute("src", randomDiceImg1);


//dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

//who wins check

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";

} else {
    document.querySelector("h1").innerHTML = "Draw";
}