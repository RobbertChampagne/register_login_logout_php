import Ralph from './ralph.js' ; 
import InputHandler from './input.js';
import Donut from './donut.js' ;
import Brick from './brick.js' ;
import {buildLevel, level1, level2} from './levels.js';


const GAMESTATE = {

    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4,
    GAMEFINISHED: 5,

}


export default class Game{
    
    constructor(windowWidth, windowHeight){

        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.gamestate = GAMESTATE.MENU; //start game in menu

        this.ralph = new Ralph(this)     //create ralph   this === windowWidth, windowHeight

        this.donut = new Donut(this);    //create donut

        this.gameObjects = [];
        this.bricks = [];       //so we can know what bricks are destroyed
        this.candies = [];      //so we can know what candies are destroyed

        this.lives = 8;                 //how many lives
        this.levels = [level1, level2]; //levels
        this.currentLevel = 0;          //index of levels array
        this.maxLevel = 1;              //max amount of levels (index)

        new InputHandler(this.ralph, this);

    }
    
    start(){
        
        if (this.gamestate !== GAMESTATE.MENU                   //so when you hit enter in game it does not rebuild level &&
            && this.gamestate !== GAMESTATE.NEWLEVEL) return;   //if gamestate is not newlevel

        
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.candies = buildLevel(this, this.levels[this.currentLevel]);

        this.donut.reset(); //with start of new level

        this.gameObjects = [this.ralph, this.donut];
        this.gamestate = GAMESTATE.RUNNING;
    }


    update(deltaTime){

        if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER; //no more lives? game over


        if(this.gamestate === GAMESTATE.PAUSED  //Don't run game when paused / in menu / game over
            || this.gamestate === GAMESTATE.MENU 
            || this.gamestate === GAMESTATE.GAMEOVER
        ) {return}; 


        if (this.bricks.length === 0) { //no more bricks -> NEW LEVEL
            if(this.currentLevel !== this.maxLevel){ //stops at last level
                this.currentLevel++;
                this.gamestate = GAMESTATE.NEWLEVEL;
                this.start();
            }else{
                this.gamestate = GAMESTATE.GAMEFINISHED;
            }
        }



        [...this.gameObjects, ...this.bricks, ...this.candies].forEach((element) => element.update(deltaTime)); // instead of each separately -> this.ralph.update(deltaTime); 



        this.bricks = this.bricks.filter(element => !element.markedForDeletion); //new array with only objects with markedForDeletion is false 
        this.candies = this.candies.filter(element => !element.markedForDeletion); //new array with only objects with markedForDeletion is false
    
    }
    

    draw(ctx){

        [...this.gameObjects, ...this.bricks, ...this.candies].forEach((element) => element.draw(ctx)); // instead of each separately -> this.donut.draw(ctx); 
        
        //PAUSE
        if(this.gamestate == GAMESTATE.PAUSED){ //if game is paused show screen darker
            ctx.rect(0,0, this.windowWidth, this.windowHeight);
            ctx.fillStyle = "rgba(243, 210, 235)";
            ctx.fill();

            ctx.font = "30px Arial"; //pause text 
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.windowWidth / 2, this.windowHeight / 2);
        }

        //MENU
        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.windowWidth, this.windowHeight);
            ctx.fillStyle = "rgba(243, 210, 235)";
            ctx.fill();
      
            ctx.font = "30px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Press ENTER To Start",this.windowWidth / 2, this.windowHeight / 2);
          }
        
        //GAMEOVER
        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.windowWidth, this.windowHeight);
            ctx.fillStyle = "rgba(243, 210, 235)";
            ctx.fill();
      
            ctx.font = "30px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.windowWidth / 2, this.windowHeight / 2);
            
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Press ENTER to RESTART!", this.windowWidth / 2, this.windowHeight / 2 + 30);
        }

        //GAMEFINISHED
        if (this.gamestate === GAMESTATE.GAMEFINISHED) {
            ctx.rect(0, 0, this.windowWidth, this.windowHeight);
            ctx.fillStyle = "rgba(243, 210, 235)";
            ctx.fill();

            let finishedImg = document.getElementById("finished"); 
            let finishedImgWidth = this.ralph.width + 100;
            let finishedImgHeight = this.ralph.height + 100;
            let finishedImgX = this.windowWidth / 2 - (finishedImgWidth / 2);
            let finishedImgY = this.windowHeight  - finishedImgHeight;  //10 off the bottom

            ctx.drawImage(finishedImg,finishedImgX,finishedImgY,finishedImgWidth,finishedImgHeight);         
      
            ctx.font = "30px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("GAME IS FINISHED!", this.windowWidth / 2, this.windowHeight / 2);
            
            
        }
    }


    togglePause(){
        //when the game is pauzed and the pause button is clicked again the game will start
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }else{ //else the game will be paused
            this.gamestate = GAMESTATE.PAUSED;
        }
    }

    restartGame(){
        //when the game is over and the enter button is clicked the game will restart
        if(this.gamestate == GAMESTATE.GAMEOVER || this.gamestate == GAMESTATE.GAMEFINISHED){
            location.reload(); //reload page
        }
    }
}
