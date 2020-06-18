class ResetButton{
    constructor(text, spriteImage) {
        this.gameText = text;
        this.image = spriteImage;
    }

    resetButton() {
        image(this.image, WIDTH / 2 - 85, HEIGHT / 2 + 100, 160, 60, 200, 170, 160, 60);
        this.gameText.resetText();
    }
}
