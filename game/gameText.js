class GameText {
  constructor(font) {
    textFont(font);
    strokeWeight(5);
    stroke(51);
    fill("white");
    textAlign(CENTER);
  }

  scoreText(score) {
    textSize(50);
    text(score, 0, 100, WIDTH);
  }

  startText() {
    textSize(40);
    text("Click or press", 0, HEIGHT / 2 + 100, WIDTH);
    text("press Space", 0, HEIGHT / 2 + 150, WIDTH);
    text("to fly.", 0, HEIGHT / 2 + 200, WIDTH);
    text("Press G for", 0, HEIGHT / 2 + 250, WIDTH);
    text("Godmode", 0, HEIGHT / 2 + 300, WIDTH);
  }

  gameOverText(score, bestScore) {
    textSize(40);
    text("Game Over", 0, HEIGHT / 2 - 100, WIDTH);
    text("Score: " + score, 0, HEIGHT / 2, WIDTH);
    text("Best: " + bestScore, 0, HEIGHT / 2 + 50, WIDTH);
  }

  resetText() {
    textSize(30);
    return text("Replay", 0, HEIGHT / 2 + 140, WIDTH);
  }
}
