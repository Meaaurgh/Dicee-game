//...................FIRST DICE...................//


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png, we are using concatenation 

var randomImageSource = "images/" + randomDiceImage; //we do this cause the pngs are in images file, we will need this to change attributes further on

// we need to change the source of the image from attributes accoring to randomImageSource

var image1 = document.querySelector(".img1"); // the first dice [0]

image1.setAttribute("src", randomImageSource);



//....................SECOND DICE...................//

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage2= "dice"+ randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelector(".img2"); //we could also do this with document.querySelectorAll("img")[1]; or getElementByClassName

image2.setAttribute("src", randomImageSource2);



//..................WHO WON?......................//

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";  //we change the content of h1 with innerHTML
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}