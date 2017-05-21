//
// function setHead0(){
//   var element = document.getElementsByClassName('head');
//   element[0].style.backgroundImage = 'url(images/head0.png)';}
//
// function setHead1(){
//   var element = document.getElementsByClassName('head');
//   element[0].style.backgroundImage = 'url(images/head1.png)';}
//
//   function setHead2(){
//   var element = document.getElementsByClassName('head');
//   element[0].style.backgroundImage = 'url(images/head2.png)';}
//
//   function setHead3(){
//   var element = document.getElementsByClassName('head');
//   element[0].style.backgroundImage = 'url(images/head3.png)';}
//
//   function setHead4(){
//   var element = document.getElementsByClassName('head');
//   element[0].style.backgroundImage = 'url(images/head4.png)';}

  var interval;
  var leftPressed = false;
  var rightPressed = false;
  var upPressed = false;
  var downPressed = false;

    function setHead(){
      var element = document.getElementsByClassName('head');
      element[0].style.backgroundImage = 'url(images/'+ this.id +'.png)';
    }
    function setBody(){
      var element = document.getElementsByClassName('body');
      element[0].style.backgroundImage = 'url(images/'+ this.id +'.png)';
    }

    function standPlayer(event){
      if(event.keyCode == 37)
      leftPressed = true;
      if(event.keyCode == 38)
      upPressed = true;
      if(event.keyCode == 39)
      rightPressed = true;
      if(event.keyCode == 40)
      downPressed = true;
  }
  function changeToFalse(event){
    if(event.keyCode == 37)
    leftPressed = false;
    if(event.keyCode == 38)
    upPressed = false;
    if(event.keyCode == 39)
    rightPressed = false;
    if(event.keyCode == 40)
    downPressed = false;
    movementRelease();
  }

  function movementRelease(){
    var element = document.getElementById('player');
    if(element.className == 'character standLeft walkLeft')
    element.className = 'character standLeft';

    if(element.className == 'character standUp walkUp')
    element.className = 'character standUp';

    if(element.className == 'character standRight walkRight')
    element.className = 'character standRight';

    if(element.className == 'character standDown walkDown')
    element.className = 'character standDown';
  }

  function movement(){
    if(leftPressed==true)
    walkLeft();
    if(upPressed==true)
    walkUp();
    if(rightPressed==true)
    walkRight();
    if(downPressed==true)
    walkDown();
  }
  function walkLeft(){
    var element = document.getElementById('player');
    element.className = 'character standLeft walkLeft';
    var position = element.offsetLeft;
    element.style.left = position - 2 +'px';
  }
  function walkUp(){
    var element = document.getElementById('player');
    element.className = 'character standUp walkUp';
    var position = element.offsetTop;
    element.style.top = position - 2 +'px';
  }
  function walkRight(){
    var element = document.getElementById('player');
    element.className = 'character standRight walkRight';
    var position = element.offsetLeft;
    element.style.left = position + 2 +'px';
  }
  function walkDown(){
    var element = document.getElementById('player');
    element.className = 'character standDown walkDown';
    var position = element.offsetTop;
    element.style.top = position + 2 +'px';
  }

function myLoad(){
  var heads = document.getElementsByClassName('heads');
  var element = heads[0].getElementsByTagName('li');
  for(var i=0; i< element.length; i++){
    element[i].addEventListener('click', setHead);}

    var bodies = document.getElementsByClassName('bodies');
    var element = bodies[0].getElementsByTagName('li');
    for(var i=0; i< element.length; i++){
      element[i].addEventListener('click', setBody);
  }

  document.addEventListener('keydown', standPlayer);
  document.addEventListener('keyup', changeToFalse);

  setInterval(movement, 10);
}
document.addEventListener('DOMContentLoaded', myLoad);
