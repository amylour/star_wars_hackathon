// open rules modal on window load

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
  
  function resetTimer() {
    clearInterval(int);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timeTaken.innerHTML = "00:00";
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
  
  const canvas = document.getElementById("game-canvas-2");
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
  let spriteY = 0;
  let vaderX = 400;
  let vaderY = 350;
  let vaderWidth = 50;
  let vaderHeight = 54;
  let ctX = 100;
  let ctY = 300;
  let bfX = 550;
  let bfY = 125;
  let tfX = 360;
  let tfY = 285;
  let speed = 5;
  let vaderSpeedX = 3;
  let vaderSpeedY = 3;
  let ctSpeedX = 3;
  let ctSpeedY = 3;
  //let bfSpeedX = 1;
  //let bfSpeedY = 1;
  let tfSpeedX = 4;
  let tfSpeedY = 4;
  
  let upPressed = false;
  let downPressed = false;
  let leftPressed = false;
  let rightPressed = false;
  
  let points = 0;
  let lives = 3;
  
  
  
  const playerImage = new Image();
  playerImage.src = "assets/media/bluels.png";
  
  const darthImage = new Image();
  darthImage.src = "assets/media/vader_helmet.png";
  
  const ctImage = new Image();
  ctImage.src = "assets/media/clone_trooper.png";
  
  /*const bfImage = new Image();
  bfImage.src = "assets/media/bf_helmet.png"; */ 
  
  const tieFighter = new Image();
  tieFighter.src = "assets/media/tief.png";
  
  const gameOverModal = document.getElementById("gameOverModal");
  const gameWonModal = document.getElementById("gameWonModal");
  
  const restartButtonGameOver = document.getElementById("restartButtonGameOver");
  const restartButtonGameWon = document.getElementById("restartButtonGameWon");
  
  function animate(event) {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let position = Math.floor(gameFrame / staggerFrames) % 6;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, spriteX, spriteY, 100, 13);
    ctx.drawImage(darthImage, vaderX, vaderY, vaderWidth, vaderHeight);
    ctx.drawImage(ctImage, ctX, ctY, 54, 50);
    ctx.drawImage(tieFighter, tfX, tfY, 100, 100);
    gameFrame++;
    inputs();
    boundryCollision();
    vaderBoundryCol();
    ctBoundryCol();
    tfBoundryCol();
    vaderMove();
    ctMove();
    tfMove();
    vaderCollision();
    ctCollision();
    tfCollision();
    vaderCtCollision();
    vaderTfCollision();
    ctTfCollision();
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
  

  
  function tfBoundryCol() {
    if (tfX <= 0) {
      tfX = 0;
    }
    if (tfX >= 700) {
      tfX = 700;
    }
  
    if (tfY <= 0) {
      tfY = 0;
    }
    if (tfY >= 320) {
      tfY = 320;
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
  
  
  function tfMove(){
    if (tfY === 0 || tfY + 80 === 400) {
        tfSpeedY = -tfSpeedY;
      }
    
    tfY += tfSpeedY;
  }
  
  function vaderCollision (){
    if (spriteX + 100 >= vaderX  &&
        spriteY + 13 >= vaderY &&
       spriteX <= vaderX + 50 &&
       spriteY <= vaderY + 54){
         vaderX = 400;
         spriteX = 0;
         removeLifeIcon();
       }
  }
  
  function ctCollision() {
    if (
      spriteX + 100 >= ctX &&
      spriteY + 13 >= ctY &&
      spriteX <= ctX + 54 &&
      spriteY <= ctY + 50
    ) {
      ctX = 200;
      spriteX = 0;
      points += 10;
      updatePointsDisplay();
     }
  }
  
  
  function tfCollision (){
    if (spriteX + 100 >= tfX  &&
      spriteY + 13 >= tfY &&
     spriteX <= tfX + 100 &&
     spriteY <= tfY + 100){
       spriteX = 0;
       spriteY = 0;
  
    }
  }
  
  function vaderCtCollision(){
      if (
        vaderX + 51 >= ctX &&
        vaderY + 51 >= ctY &&
        vaderX <= ctX + 51 &&
        vaderY <= ctY + 51
      ) {
       vaderX = 0;
       ctX = 400;
      }
  }
  
  
  function vaderTfCollision(){
    if (
      vaderX + 50 >= tfX &&
      vaderY + 50 >= tfY &&
      vaderX <= tfX + 50 &&
      vaderY <= tfY + 50
    ) {
     vaderX = 0;
     vaderY = 100;
  
    }
  }
  
  function ctTfCollision(){
    if (
      ctX + 50 >= tfX &&
      ctY + 50 >= tfY &&
      ctX <= tfX + 50 &&
      ctY <= tfY + 50
    ) {
     ctX = 0;
     ctY = 100;
  
    }
  }
  
  function bfTfCollision(){
    if (
      bfX + 50 >= tfX &&
      bfY + 50 >= tfY &&
      bfX <= tfX + 50 &&
      bfY <= tfY + 50
    ) {
     bfX = 0;
     bfY = 100;
  
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
  
  function updatePointsDisplay() {
    const pointsDisplay = document.getElementById("pointsCount");
    pointsDisplay.textContent = points;
    if (points >= 100) {
      gameWon();
    }
  };
  
  function createLifeIcons() {
    if (lifeContainer.children.length >= 3) {
      return; 
    } 
  
    const iconsToAdd = Math.min(lives, 3 - lifeContainer.children.length);
    for (let i = 0; i < iconsToAdd; i++) {
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
    if (lifeIcons.length <= 0) {
      gameOver();
      // If lives end up at 0, gameOver function called
    }
  }
  
  // Call the createLifeIcons() function to initialize the life icons
  createLifeIcons();
  
  function gameOver() {
    // // Alert/Modal = Game Over
    gameOverModal.style.display = 'block';
    // // Button - Retry = Start
    restartButtonGameOver.addEventListener('click', restartGame);
    // // Stop the sprites from moving anymore
    ctSpeedX = 0
    ctSpeedY = 0
    vaderSpeedX = 0
    vaderSpeedY = 0
    tfSpeedX = 0
    tfSpeedY = 0
  
  }
  
  function gameWon() {
    gameWonModal.style.display = 'block';
    restartButtonGameWon.addEventListener('click', restartGame);
  };
  
  function restartGame() {
    // Reset game variables and state
    points = 0;
    updatePointsDisplay();
    createLifeIcons();
    resetTimer();
    timer();
    // The below variables won't update - sprites keep getting faster.
    // Perhaps Shaun might know how to set them to default?
    // // Hi! Jacob Here. Here's the things you need to target to change
    // // the speed on the various enemies
    ctSpeedX = 3;
    ctSpeedY = 3;
    vaderSpeedX = 3;
    vaderSpeedY = 3;
    tfSpeedX = 3;
    tfSpeedY = 3;
  
    
  
    // Hide game over modal
    if (gameOverModal) {
      gameOverModal.style.display = 'none'
    } if (gameWonModal) {
      gameWonModal.style.display = 'none'
    }
  
    
    
  }
  
  // restartButton.addEventListener('click', restartGame);
  
  // Sound toggle functionality. //
  
  document.getElementById("sound-slider").addEventListener("click", toggleMusic);
  
  function toggleMusic(event) {
    let saberSong = document.getElementById("music-player");
    // execute song pause/play for mute button
    return saberSong.paused ? saberSong.play() : saberSong.pause();
  }
  
  // Have the start button call the animate() function to start the game //
  
  document.getElementById("start-button").addEventListener("click", animate);