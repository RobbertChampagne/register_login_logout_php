import Brick from "./brick.js";
import { detectCollision } from "./collisionDetection.js";


export default class Donut{
    
    constructor(game){
        this.image = document.getElementById("donut");
        
        this.size = 65;
        this.windowWidth = game.windowWidth;
        this.windowHeight = game.windowHeight;

        this.game = game;

        this.reset();
    }

    reset(){
        this.speed = { x: 2, y: 2};
        this.position = { x: 150, y: 152};
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }

    

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //donut
        let sizeOfDonut = this.size;
        let leftTopOfDonutY = this.position.y;
        let leftBottomOfDonutY = leftTopOfDonutY + sizeOfDonut;
        let leftTopOfDonutX = this.position.x;
        let rightTopOfDonutX = this.position.x + sizeOfDonut;

        // wall on right or left
        if (rightTopOfDonutX > this.windowWidth || leftTopOfDonutX < 0) {
            this.speed.x = -this.speed.x; //going in a different directions
        }
  
        // wall on top
        if ( leftTopOfDonutY < 0) {
            this.speed.y = -this.speed.y;
        }

        //bottom
        if(leftBottomOfDonutY > this.windowHeight){
            this.game.lives--;
            this.reset();
        }

        this.checkCollisionWithRalph();
            
    }

    checkCollisionWithRalph(){

        //donut
        let sizeOfDonut = this.size;
        let leftTopOfDonutY = this.position.y;
        let leftBottomOfDonutY = leftTopOfDonutY + sizeOfDonut;
        let leftTopOfDonutX = this.position.x;
        let rightTopOfDonutX = this.position.x + sizeOfDonut;

        //ralph
        let ralphWidth = this.game.ralph.width;
        let ralphHeight = this.game.ralph.height;
        let leftTopOfRalphY= this.game.ralph.position.y;      //left top
        let leftTopOfRalphX = this.game.ralph.position.x;     //left top
        let rightTopOfRalphX = leftTopOfRalphX + ralphWidth;  //right top
        let leftBottomOfORalphY = leftTopOfRalphY + ralphHeight; 

        //check collision with ralph
        if(leftBottomOfDonutY >= leftTopOfRalphY){
            //top
            if(leftTopOfDonutX >= leftTopOfRalphX 
                && leftTopOfDonutX <= rightTopOfRalphX
                && rightTopOfDonutX >= leftTopOfRalphX
                && rightTopOfDonutX <= rightTopOfRalphX){ 
                    this.speed.y = -this.speed.y;
                    console.log("top"); 
                    return;  
            }

            //left
            if(leftTopOfDonutX <= leftTopOfRalphX 
                && rightTopOfDonutX >= leftTopOfRalphX
                && rightTopOfDonutX <= rightTopOfRalphX){  
                    this.speed.y = -this.speed.y; 
                    if(this.speed.x > 0){ //comes from the left down
                        this.speed.x = -this.speed.x; //back up to the left
                    }else{ //comes from the right down
                        this.speed.x = this.speed.x; //back up to the right
                    }
                    console.log("left"); 
                    return;  

            }

            //right
            if(leftTopOfDonutX >= leftTopOfRalphX 
                && leftTopOfDonutX <= rightTopOfRalphX
                && rightTopOfDonutX >= rightTopOfRalphX){  
                this.speed.y = -this.speed.y;
                if(this.speed.x > 0){ //comes from the left down
                    this.speed.x = this.speed.x; //back up to the right
                }else{ //comes from the right down
                    this.speed.x = -this.speed.x; //back up to the left
                }
                console.log("right"); 
                return;  

            }   
        }
    }
    
}