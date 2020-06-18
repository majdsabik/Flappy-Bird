class Floor {
    constructor(spriteImage) {
        this.image = spriteImage;
        this.startX = 0;
    }
    draw() {
        for (var i = 0; i <= 40; i++)
            image(this.image,this.startX + i*30, 580, 30, 150, 200, 60, 30, 150);
    }
    update() {
        for (var i = 0; i <= 40; i++)
            image(this.image,this.startX + i*30, 580, 30, 150, 200, 60, 30, 150);
         this.startX -= 2;
         if(this.startX <= -59)
         this.startX =0;
    }
}