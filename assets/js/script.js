// open rules and player name modal on window load
window.addEventListener('load', function () {
  this.setTimeout(function open(event) {
    document.querySelector('#start-modal').style.display = "block";
  }, 100);
  
  var closeButton = document.querySelector('#close-button');
  closeButton.addEventListener('click', function(event) {
    document.querySelector('#start-modal').style.display = "none";
  });
});


// timer function - click 'Start' and timer starts

let int = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const timeTaken = document.getElementById('time-taken');
const startButton = document.getElementById('start-button');

function timer() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(showTime, 10);
}

function showTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  timeTaken.innerHTML = `${m}:${s}`;
}

startButton.addEventListener('click', timer);



const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
// difing canvas width and height
 let canvas_width = canvas.width = 800;
  let canvas_height = canvas.height = 400;
  let frameX = 0;
  let frameY = 4;
  const spriteWidth = 575;
  const spriteHeight = 523;
  let gameFrame = 0;
  const staggerFrames = 5;
  let spriteX = 0;
  let spriteY = 300;
  let vaderX = 300;
  let vaderY = 200;
  let ctX = 500;
  let ctY = 145;
  let bfX = 500;
  let bfY = 400;
  let speed = 5;
  let vaderSpeedX = 4;
  let vaderSpeedY = 4;
  let ctSpeedX = 5;
  let ctSpeedY = 5;
  let bfSpeedX = 6;
  let bfSpeedY = 6;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


  const playerImage = new Image();
  playerImage.src = 'assets/images/bluels.png';

  const darthImage = new Image();
  darthImage.src = 'assets/images/vader_helmet.png';

  const ctImage = new Image();
  ctImage.src = 'assets/images/clone_trooper.png';

  const bfImage = new Image();
  bfImage.src = 'assets/images/bf_helmet.png';
  
  

  function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, spriteX, spriteY, 100, 13);
    ctx.drawImage(darthImage, vaderX, vaderY, 54, 50);
    ctx.drawImage(ctImage, ctX, ctY, 54, 50);
    ctx.drawImage(bfImage, bfX, bfY, 54, 50);
    gameFrame++;
    inputs();
    boundryCollision();
    vaderBoundryCol();
    ctBoundryCol();
    bfBoundryCol();
    vaderMove();
    ctMove();
    bfMove();
    requestAnimationFrame(animate);

  };

  function boundryCollision(){
    if(spriteX < 0){
       spriteX = 0;
    }
   if( spriteX >= 700){
        spriteX = 700;
   }
    if(spriteY < 0){
     spriteY = 0;
   }
   if(spriteY >= 350){
      spriteY = 350;
   }
  }

  function vaderBoundryCol (){
    if(vaderX <= 0){
      vaderX = 0;
      }
  if( vaderX >= 700){
      vaderX = 700;;
   }
     
   if(vaderY <= 0){
    vaderY = 0;
  }
  if(vaderY >= 320){
     vaderY = 320;
  }
  }

  function ctBoundryCol(){
    if(ctX <= 0){
      ctX = 0;
      }

  if( ctX >= 700){
      ctX = 700;
   }
     
   if(ctY <= 0){
    ctY = 0;
  }
  if(ctY >= 320){
     ctY = 320;
  }
  }

  function bfBoundryCol(){
    if(bfX <= 0){
      bfX = 0;
      }
  if( bfX >= 700){
      bfX = 700;
   }
     
   if(bfY <= 0){
    bfY = 0;
  }
  if(bfY >= 320){
     bfY = 320;
  }
  }


  function vaderMove(){
    if(vaderY  === 0 || vaderY + 80 === 400){
      vaderSpeedY = -vaderSpeedY;
  }

  if(vaderX  === 0 || vaderX + 80 === 700){
    vaderSpeedX = -vaderSpeedX;
}
  
   vaderY += vaderSpeedY;
   vaderX += vaderSpeedX;
  }

  function ctMove(){
    if(ctY  === 0 || ctY + 80 === 400){
      ctSpeedY = -ctSpeedY;
  }

  if(ctX  === 0 || ctX + 80 === 700){
    ctSpeedX = -ctSpeedX;
}
  
   ctY += ctSpeedY;
   ctX += ctSpeedX;

  }

  function bfMove(){
    if(bfY  === 0 || bfY + 80 === 400){
      bfSpeedY = -bfSpeedY;
  }

  if(bfX  === 0 || bfX + 80 === 700){
    bfSpeedX = -bfSpeedX;
}
  
   bfY += bfSpeedY;
   bfX += bfSpeedX;

  }
  
 

  
document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function inputs (){
    if (upPressed){
       spriteY = spriteY - speed;
    }
    if(downPressed){
      spriteY = spriteY + speed;
    }
    if (leftPressed){
      spriteX = spriteX - speed;
   }
   if(rightPressed){
     spriteX = spriteX + speed;
   }
  }


function keyDown (event){
    if( event.keyCode == 40){
        downPressed = true;
    }
  
    if( event.keyCode == 38){
      upPressed = true;
  }
  if( event.keyCode == 37){
      leftPressed = true;
  }
  
  if( event.keyCode == 39){
    rightPressed = true;
  }
  }


function keyUp(event){
    if( event.keyCode == 40){
        downPressed = false;
    }
  
    if( event.keyCode == 38){
      upPressed = false;
  }
  if( event.keyCode == 37){
      leftPressed = false;
  }
  
  if( event.keyCode == 39){
    rightPressed = false;
  }
}

  

  animate();
