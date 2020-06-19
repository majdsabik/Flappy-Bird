let background;
let spriteImage;
let birdyFont;
let gameStart;
let gameOver;
let bird;
let pipe;
let floor;
let resetButton;
let gameText;
let score;
let storage;
let bestScore;
let sfxHit;
let sfxPoint;
let sfxWing;
let gameOverPlayed = false;
let godmode = false;

function preload() {
  background = loadImage("./assets/background.png");
  spriteImage = loadImage("./assets/sprite.png");
  birdyFont = loadFont("./assets/FlappyBirdy.ttf");
  soundFormats("mp3", "ogg");
  sfxHit = loadSound("./assets/sfx_hit.mp3");
  sfxPoint = loadSound("./assets/sfx_point.mp3");
  sfxWing = loadSound("./assets/sfx_wing.mp3");
}

function resetGame() {
  gameStart = false;
  gameOver = false;
  gameOverPlayed = false;
  bird = new Bird(spriteImage);
  pipe = new Pipe(spriteImage);
  floor = new Floor(spriteImage);
  gameText = new GameText(birdyFont);
  resetButton = new ResetButton(gameText, spriteImage);
  storage = new Storage();
  score = 0;
  pipe.generateFirst();
  bird.draw();
  floor.draw();
  let dataFromStorage = storage.getStorageData();

  if (dataFromStorage === null) {
    bestScore = 0;
  } else {
    bestScore = dataFromStorage.bestScore;
  }
}

function canvasClick() {
  if (mouseButton === "left") {
    if (gameOver === false) bird.jump();
    if (gameStart === false) gameStart = true;
    if (
      gameOver &&
      mouseX > WIDTH / 2 - 85 &&
      mouseX < WIDTH / 2 + 75 &&
      mouseY > HEIGHT / 2 + 100 &&
      mouseY < HEIGHT / 2 + 160
    )
      resetGame();
  }
}

function setup() {
  var canvas = createCanvas(WIDTH, HEIGHT);
  canvas.mousePressed(canvasClick);
  resetGame();
}

function draw() {
  image(background, 0, 0);

  if (gameStart && gameOver === false) {
    pipe.move();
    pipe.draw();
    bird.update();
    bird.draw();
    floor.update();
    floor.draw();
    gameOver = pipe.checkCrash(bird) || bird.isDead();
    if (pipe.getScore(bird)) score++;
  } else {
    pipe.draw();
    bird.draw();
    floor.draw();
    if (gameOver) bird.update();
    else {
      floor.update();
    }
  }
  if (gameStart === false) {
    gameText.startText();
  }

  if (gameOver) {
    if (!gameOverPlayed) {
      sfxHit.play();
      gameOverPlayed = true;
    }
    if (score > bestScore) {
      bestScore = score;
      storage.setStorageData({ bestScore: score });
    }

    gameText.gameOverText(score, bestScore);

    resetButton.resetButton();
  } else {
    gameText.scoreText(score);
  }
}

function keyPressed(key) {
  if (key.key === " ") {
    if (gameOver === false) bird.jump();
    if (gameStart === false) gameStart = true;
  }
}

function keyTyped() {
  if (key.key === "r") {
    if (gameOver) {
      resetGame();
    }
  }
  if (key === "g") {
    console.log("Godmode");
    godmode = !godmode;
  }
}
