import Game from "./game.js";

export default class InputHandler{
    constructor(ralph, game){

        document.addEventListener('keydown', (event) => {

            if(event.keyCode === 37){
                ralph.moveLeft();
            }else if(event.keyCode === 39){
                ralph.moveRight();
            }else if(event.keyCode === 32){
                game.togglePause();
            }else if(event.keyCode === 13){
                game.start();
                game.restartGame();
            }

        });

        document.addEventListener('keyup', (event) => {

            if(event.keyCode === 37){
                if(ralph.speed < 0){ //less lag, works fine whitout it
                    ralph.stop();
                }
            }else if(event.keyCode === 39){
                if(ralph.speed > 0){ //less lag, works fine whitout it
                    ralph.stop();
                }
            }

        });


    }
}