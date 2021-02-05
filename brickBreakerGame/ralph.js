
export default class Ralph{ //'export default' so we can use class in brickBreakerScript.js

    constructor(game){
        this.width = 105;
        this.height = 120;
        this.windowWidth = game.windowWidth;

        this.maxSpeed = 5;
        this.speed = 0;

        this.position = {
            x: game.windowWidth / 2 - (this.width / 2) , //midden van het scherm
            y: game.windowHeight  - this.height  ,  //10 off the bottom
        };
    }
    
    draw(ctx){
        let img = document.getElementById("ralph");
        ctx.drawImage(img, this.position.x, this.position.y, this.width, this.height);
    }


    update(deltaTime){ //deltaTime = changing time (how mutch time has past since last time this is updated)
        
        this.position.x += this.speed; //moves in the way the speed is declared neg. or pos.

        if(this.position.x < 0){ //does not leaves the screen at the left side it stops
            this.position.x = 0;
        }

        if(this.position.x + this.width > this.windowWidth ){ //does not leaves the screen at the left side it stops
            this.position.x = this.windowWidth - this.width;
        }
    }


    moveLeft(){
        this.speed  = -this.maxSpeed; //speed becomes negative so it moves to the left
    }


    moveRight(){
        this.speed  = this.maxSpeed; //speed becomes positive so it moves to the right
    }

    stop(){
        this.speed  = 0 //when the key is released ralph stops moving
    }
}
