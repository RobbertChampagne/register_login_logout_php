
export default class InputHandler{
    constructor(ralph){

        document.addEventListener('keydown', (event) => {

            if(event.keyCode === 37){
                ralph.moveLeft();
            }else if(event.keyCode === 39){
                ralph.moveRight();
            }

        });
    }
}