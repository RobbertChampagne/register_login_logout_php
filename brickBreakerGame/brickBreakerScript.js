
window.addEventListener("load", loaded);
//window.addEventListener("resize", windowresize);

import Ralph from './ralph.js'  
import InputHandler from './input.js'  

function loaded(){

    let canvas = document.getElementById("gameScreen");
    let ctx = canvas.getContext("2d");

    const GAME_WIDTH = 780;
    const GAME_HEIGHT = 450;


    let ralph = new Ralph(GAME_WIDTH, GAME_HEIGHT) //create ralph
    ralph.draw(ctx); //draw the first ralph


    new InputHandler(ralph);



    let lastTime = 0; //what was the last time? start at 0

    function gameLoop(timeStamp){   //timeStamp : time of execute
        let deltaTime = timeStamp - lastTime; //how mutch time has passed
        lastTime = timeStamp;

        ctx.clearRect(0,0,780,450);     //clear full canvas 
        ralph.update(deltaTime);        //update ralph
        ralph.draw(ctx);                //draw new ralph
        
        //requestAnimationFrame from the browser 
        //-> when the next frame is ready call gameloop again and pass the timeStamp
        requestAnimationFrame(gameLoop); 
    }

    gameLoop();


}


