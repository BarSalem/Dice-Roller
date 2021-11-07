
function roll()
{
  randomNumber1=Math.floor(Math.random()*6)+1;
  randomNumber2=Math.floor(Math.random()*6)+1;
  var randomDiceImage1="dice" + randomNumber1 + ".png";
  var randomDiceImage2="dice" + randomNumber2 + ".png";
  var randomImageSource1="images/" + randomDiceImage1;
  var randomImageSource2="images/" + randomDiceImage2;
  var image1=document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomImageSource1);
  var image2=document.querySelectorAll("img")[1];
  image2.setAttribute("src",randomImageSource2);

  if (randomNumber1>randomNumber2)
  {
    document.getElementById("test").innerHTML="Player 1 wins!";
  }
  else if(randomNumber1<randomNumber2) {
    document.getElementById("test").innerHTML="Player 2 wins!";
  }
  else {
    document.getElementById("test").innerHTML="Draw!";
  }

}
