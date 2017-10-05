/*************************************************/
/*********DECLARING ALL GLOBAL VARIABLES**********/

var seconds;
var temp;
var div = document.getElementById("box");
var points = 0;
var span = document.getElementById("score");
var trans = "rotate(360deg)";
//var colors = ["red","blue","yellow","purple","limegreen"]
var anchor = document.getElementById("anchors");

/*************************************************/
/*************************************************/


div.onclick = move;     /*<--EVENT LISTENER*****************************/
anchor.onclick = cowboyYell;     /*<--EVENT LISTENER*****************************/


/*************************************************/
/*MAIN FUNCTION TRIGGERED WHEN DIV IS CLICKED*****/

function move(){
  div.style.marginTop = Math.floor(Math.random()* 620)+ "px";
  div.style.marginLeft = Math.floor(Math.random()* 8300)+ "px";
  points += 1;
  span.innerHTML = points;
  gunShot();
  if(div.style.transform !== trans){
    div.style.transform = trans;
  }else{
    div.style.transform = null;
  }
  /*var randomColor = colors[Math.floor(colors.length * Math.random())];
  if(points == true){
  }else if(randomColor === "red"){
    div.style.backgroundColor = "red";
  }else if(randomColor === "blue"){
    div.style.backgroundColor = "blue";
  }else if(randomColor === "yellow"){
    div.style.backgroundColor = "yellow";
  }else if(randomColor === "purple"){
    div.style.backgroundColor = "purple";
  }else if(randomColor === "limegreen"){
    div.style.backgroundColor = "limegreen";
  }
  else{
    console.log("its going to work");
  }*/
  gameFinished();
}
/**********************************************************************************/
/*END OF THE EVENT LISTENING FUNCTION THIS BELOW IS THE GAME FINISHED FUNCTION*****/

function gameFinished(){
  if(points === 45){
    alert("Thanks for playing");
  }else{
    console.log("keep going till you reach 20!");
  }
}

/*************************************************/
/**FUNCTION MAKING THE GUN SHOT AUDIO BE PLAYED***/

function gunShot(){
  var m4 = document.getElementById("m4");
  m4.play();
}


/*************************************************/
/**FUNCTION MAKING COWBOY AUDIO BE PLAYED***/

function cowboyYell(){
    var yeeHaw = document.getElementById("cowboy");
    yeeHaw.play();
  }


/*************************************************/
/**FUNCTION MAKING THE COUNTDOWN TIMER WORK*******/

  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseFloat(seconds, 37);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "Game-over";
      return;
    }else{
      console.log("time up")
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 
 
  countdown();
            

/********************************************************
****************JQUERY FOR PAGE TRANSITION**************/

$(function() {
    var request = window.location.hash;
    if(request == '#page-2') {
        $('.page.current').removeClass('current');
        $('.page').eq(1).addClass('current');
    }
    $('nav a').click(function(){
        var speed = 200;
        var i = $(this).index();
        $('.page.current').animate({opacity: 0, marginTop:80},speed,function(){
            $(this).removeClass('current');
            $('.page').eq(i).css('marginTop',30).animate({opacity:1,marginTop: 20},speed).addClass('current');
        });
    });
});