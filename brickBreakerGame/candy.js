import { detectCollision } from "./collisionDetection.js";


export default class Candy{
    constructor(game, position, nr){
        this.nr = nr;
        this.getImg();
        this.position = position
        this.width = 50;
        this.height = 50;
        this.windowWidth = game.windowWidth;
        this.windowHeight = game.windowHeight;

        this.game = game;
        this.markedForDeletion = false; //so when donut hits brick it will be removed
    }

    getImg(){
        
        let candyImg = this.nr;


        if(candyImg === 2){
            this.image = document.getElementById("candy1");
            
        }else if(candyImg === 3){
            this.image = document.getElementById("candy2");
            
        }else{
            this.image = document.getElementById("candy3");
            
        }
    }

    update(){
        //check collision of donut with brick
        if(detectCollision(this.game.donut, this)){
            this.game.donut.speed.y = this.game.donut.speed.y; 
            this.game.donut.update(); //when hit moves the other way
            this.markedForDeletion = true;   
        }
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}