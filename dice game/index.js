var images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
 function changeimage()
{
    var image1 = document.getElementById("myImage1")[0];
    var image2 = document.getElementById("myImage2")[1];
    var random_number1=Math.floor(Math.random()*6)+1
    var random_number2=Math.floor(Math.random()*6)+1


    image1.src = images[random_number1];
    image2.src = images[random_number2];




}