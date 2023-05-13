// open rules and player name modal on window load

window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector("#start-modal").style.display = "block";
  }, 100);

  var closeButton = document.querySelector("#close-button");
  closeButton.addEventListener("click", function (event) {
    var startCloak = document.querySelector(".start-cloak");
    startCloak.style.display = "none";
    document.querySelector("#start-modal").style.display = "none";
  });
});

// timer function - click 'Start' and timer starts

let int = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const timeTaken = document.getElementById("time-taken");
const startButton = document.getElementById("start-button");

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
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timeTaken.innerHTML = `${m}:${s}`;
}

startButton.addEventListener("click", timer);

// User pressing 'K' key to dismiss message //

document.body.addEventListener("keydown", dismissMessage);

function dismissMessage(event) {
  if (event.keyCode === 75) {
    message = document.getElementById("if-not-desktop");

    document.getElementById("game-container").style.opacity = "100";
    document.getElementById("start-button-container").style.opacity = "100";

    message.style.width = "0";
    message.style.height = "0";
    message.style.opacity = "0";
  }
}

// Make start button and timer appear after play button is pressed on start modal //

document.getElementById("close-button").addEventListener("click", playButton)

function playButton(event) {
  document.getElementById("timer").style.opacity = ("100")
  document.getElementById("start-button").style.opacity = ("100")
}

// Game functionality //

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
// difing canvas width and height
let canvas_width = (canvas.width = 800);
let canvas_height = (canvas.height = 400);
let frameX = 0;
let frameY = 4;
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 5;
let spriteX = 0;
let spriteY = 100;
let vaderX = 300;
let vaderY = 200;
let vaderWidth = 50;
let vaderHeight = 54;
let ctX = 500;
let ctY = 145;
let bfX = 400;
let bfY = 125;
let tfX = 0;
let tfY = 285;
let speed = 5;
let vaderSpeedX = 4;
let vaderSpeedY = 4;
let ctSpeedX = 5;
let ctSpeedY = 5;
let bfSpeedX = 7;
let bfSpeedY = 7;
let tfSpeedX = 3;
let tfSpeedY = 3;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

let score = 0;
let lives = 3;



const playerImage = new Image();
playerImage.src = "assets/media/bluels.png";

const darthImage = new Image();
darthImage.src = "assets/media/vader_helmet.png";

const ctImage = new Image();
ctImage.src = "assets/media/clone_trooper.png";

const bfImage = new Image();
bfImage.src = "assets/media/bf_helmet.png";

const tieFighter = new Image();
tieFighter.src = "assets/media/tief.png";

const gameOverModal = document.getElementById("gameOverModal");
const restartButton = document.getElementById("restartButton");

function animate(event) {
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;
  ctx.drawImage(playerImage, spriteX, spriteY, 100, 13);
  ctx.drawImage(darthImage, vaderX, vaderY, vaderWidth, vaderHeight);
  ctx.drawImage(ctImage, ctX, ctY, 54, 50);
  ctx.drawImage(bfImage, bfX, bfY, 54, 50);
  ctx.drawImage(tieFighter, tfX, tfY, 100, 100);
  gameFrame++;
  inputs();
  boundryCollision();
  vaderBoundryCol();
  ctBoundryCol();
  bfBoundryCol();
  tfBoundryCol();
  vaderMove();
  ctMove();
  bfMove();
  tfMove();
  vaderCollision();
  ctCollision();
  bfCollision();
  tfCollision();
  vaderCtCollision();
  requestAnimationFrame(animate);
}

function updateScore(points) {
  score += points;
  // This will need more logic, perhaps when items are built
}

function boundryCollision() {
  if (spriteX < 0) {
    spriteX = 0;
  }
  if (spriteX >= 700) {
    spriteX = 700;
  }
  if (spriteY < 0) {
    spriteY = 0;
  }
  if (spriteY >= 350) {
    spriteY = 350;
  }
}

function vaderBoundryCol(){
  if (vaderX <= 0) {
    vaderX = 0;
  }
  if (vaderX >= 700) {
    vaderX = 700;
  }

  if (vaderY <= 0) {
    vaderY = 0;
  }
  if (vaderY >= 320) {
    vaderY = 320;
  }
}

function ctBoundryCol() {
  if (ctX <= 0) {
    ctX = 0;
  }

  if (ctX >= 700) {
    ctX = 700;
  }

  if (ctY <= 0) {
    ctY = 0;
  }
  if (ctY >= 320) {
    ctY = 320;
  }
}

function bfBoundryCol() {
  if (bfX <= 0) {
    bfX = 0;
  }
  if (bfX >= 700) {
    bfX = 700;
  }

  if (bfY <= 0) {
    bfY = 0;
  }
  if (bfY >= 320) {
    bfY = 320;
  }
}

function tfBoundryCol() {
  if (tfX <= 0) {
    tfX = 0;
  }
  if (tfX >= 700) {
    tfX = 700;
  }

  if (tfY <= 0) {
    bfY = 0;
  }
  if (tfY >= 320) {
    bfY = 320;
  }
}

function vaderMove() {
  if (vaderY === 0 || vaderY + 80 === 400) {
    vaderSpeedY = -vaderSpeedY;
  }

  if (vaderX === 0 || vaderX + 80 === 700) {
    vaderSpeedX = -vaderSpeedX;
  }

  vaderY += vaderSpeedY;
  vaderX += vaderSpeedX;
}

function ctMove() {
  if (ctY === 0 || ctY + 80 === 400) {
    ctSpeedY = -ctSpeedY;
  }

  if (ctX === 0 || ctX + 80 === 700) {
    ctSpeedX = -ctSpeedX;
  }

  ctY += ctSpeedY;
  ctX += ctSpeedX;
}

function bfMove() {
  if (bfY === 0 || bfY + 80 === 400) {
    bfSpeedY = -bfSpeedY;
  }

  if (bfX === 0 || bfX + 80 === 700) {
    bfSpeedX = -bfSpeedX;
  }

  bfY += bfSpeedY;
  bfX += bfSpeedX;
}

function tfMove(){
  if (tfX === 0 || tfX + 100 === 700) {
    tfSpeedX = -tfSpeedX;
  }
  
  tfX += tfSpeedX;
}

function vaderCollision (){
  if (spriteX + 50 >= vaderX  &&
      spriteY + 50 >= vaderY &&
     spriteX <= vaderX + 50 &&
     spriteY <= vaderY + 50){
       vaderX = 0;
  }
}

function ctCollision() {
  if (
    spriteX + 50 >= ctX &&
    spriteY + 50 >= ctY &&
    spriteX <= ctX + 50 &&
    spriteY <= ctY + 50
  ) {
    ctX = 0;
  }
}

function bfCollision() {
  if (
    spriteX + 50 >= bfX &&
    spriteY + 50 >= bfY &&
    spriteX <= bfX + 50 &&
    spriteY <= bfY + 50
  ) {
    bfX = 0;
  }
}

function tfCollision (){
  if (spriteX + 50 >= tfX  &&
    spriteY + 50 >= tfY &&
   spriteX <= tfX + 50 &&
   spriteY <= tfY + 50){
     spriteX = 0;
     spriteY = 0;

  }
}

function vaderCtCollision(){
    if (
      vaderX + 50 >= ctX &&
      vaderY + 50 >= ctY &&
      vaderX <= ctX + 50 &&
      vaderY <= ctY + 50
    ) {
     vaderX = 0;
     ctX = 400;
    }
}
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function inputs() {
  if (upPressed) {
    spriteY = spriteY - speed;
  }
  if (downPressed) {
    spriteY = spriteY + speed;
  }
  if (leftPressed) {
    spriteX = spriteX - speed;
  }
  if (rightPressed) {
    spriteX = spriteX + speed;
  }
}

function keyDown(event) {
  if (event.keyCode == 40) {
    downPressed = true;
  }

  if (event.keyCode == 38) {
    upPressed = true;
  }
  if (event.keyCode == 37) {
    leftPressed = true;
  }

  if (event.keyCode == 39) {
    rightPressed = true;
  }
}

function keyUp(event) {
  if (event.keyCode == 40) {
    downPressed = false;
  }

  if (event.keyCode == 38) {
    upPressed = false;
  }
  if (event.keyCode == 37) {
    leftPressed = false;
  }

  if (event.keyCode == 39) {
    rightPressed = false;
  }
}

// Branch "keiron" -- created score + lives variables with basic functions.
// You don't have to use any of this code - just thought I'd write some to help out.


const lifeContainer = document.getElementById('lifeContainer');

function createLifeIcons() {
  for (let i = 0; i < lives; i++) {
    const lifeIcon = document.createElement('div');
    lifeIcon.classList.add('life-icon');
    lifeContainer.appendChild(lifeIcon);
  }
}

function removeLifeIcon() {
  const lifeIcons = lifeContainer.getElementsByClassName('life-icon');
  if (lifeIcons.length > 0) {
    lifeContainer.removeChild(lifeIcons[lifeIcons.length - 1]);
  }
}

// Call the createLifeIcons() function to initialize the life icons
createLifeIcons();

// Call the removeLifeIcon() function whenever the player loses a life
// For example, in a collision detection function or game logic
function decreaselives() {
  lives--;

  // Check if the player has run out of lives
  if (lives <= 0) {
    gameOver(); // Call your game over function when the player runs out of lives
  }

  removeLifeIcon();
}

function updateLives() {
  lives--;
  // This will need more logic, perhaps any super items that increase lives?
  // Not a necessity but just something I thought I'd add

  if (lives <= 0) {
    gameOver();
    // If lives end up at 0, gameOver function called (still not created)
  }
}

function gameOver() {
  // Alert/Modal = Game Over
  gameOverModal.style.display = 'block';
  // Button - Retry = Start
  restartButton.addEventListener('click', restartGame);
}

function restartGame() {
  // Variables need to be reset(?)

  // This hides the gameOver() modal
  modal.style.display = 'none';

  // Start the game again - not sure how to target this at the moment
  // Perhaps animate() needs to be called again?
}

// Have the start button call the animate() function to start the game //

document.getElementById("start-button").addEventListener("click", animate)