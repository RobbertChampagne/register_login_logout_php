import Game from "./game.js";

window.addEventListener("load", loaded);
//window.addEventListener("resize", windowresize);

 

function loaded(){

    let canvas = document.getElementById("gameScreen");
    let ctx = canvas.getContext("2d");

    let background = document.getElementById("bg"); //background img
    

    const GAME_WIDTH = 750;
    const GAME_HEIGHT = 450;

   
    let game = new Game(GAME_WIDTH, GAME_HEIGHT); //create game


    let lastTime = 0; //what was the last time? start at 0

    function gameLoop(timeStamp){   //timeStamp : time of execute
        let deltaTime = timeStamp - lastTime; //how mutch time has passed
        lastTime = timeStamp;

        ctx.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);     //clear full canvas 
        ctx.drawImage(background,0,0,750,450);          //background img
        game.update(deltaTime);
        game.draw(ctx);


        //requestAnimationFrame from the browser 
        //-> when the next frame is ready call gameloop again and pass the timeStamp
        requestAnimationFrame(gameLoop); 
    }

    requestAnimationFrame(gameLoop); //call gameloop when screen is ready


}


