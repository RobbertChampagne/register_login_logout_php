window.addEventListener("load", loaded);

function loaded(){
    //EVENTLISTENER
    window.addEventListener("resize", windowresize);
    document.addEventListener("keydown", jump);
    
    let restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restart);


    //ELEMENTS
    let fairy = document.getElementById("fairy");
    let scoreCount = document.getElementById("scoreCount");
    
    
    //ATTRIBUTES
    let bottom = parseInt(Number( (window.getComputedStyle(document.querySelector('#fairy')).bottom).slice(0,-2))); //value set in css 
    let leftsideOfForest = Number( (window.getComputedStyle(document.querySelector('#canvasBackgroundImg')).left).slice(0,-2));
    let forestWidth = Number( (window.getComputedStyle(document.querySelector('#canvasBackgroundImg')).width).slice(0,-2));
    
    let isJumping = false; 
    let position = bottom;

    let fairyWidth = Number( (window.getComputedStyle(document.querySelector('#fairy')).width).slice(0,-2)); //same as hight
    let fairyTopLeft = Number( (window.getComputedStyle(document.querySelector('#fairy')).left).slice(0,-2) );//left top side of the fairy
    let fairyTop = Number( (window.getComputedStyle(document.querySelector('#fairy')).top).slice(0,-2) );//left TOP side of the fairy
    
    let isGameOver = false;
    let score = 0;
    let hit = false;
    


    //FAIRY JUMP
    function jump(e){
        if(!isJumping){ //if she is already jumping she can't jump again

            if (e.keyCode === 38){ //up arrowkey up

                let count = 0; //to see how high she is
                isJumping = true; //now she is jumping

                let timerId = setInterval(() => {                         
                    
                    //move down
                    if(count === 25){

                        clearInterval(timerId); //clear the timer from moving up so she cant go higher

                        let downTimerId = setInterval(() => { //starts new timer to go down

                            if(count === 0){ //back on start position
                                clearInterval(downTimerId);//stopts timer for going down
                                isJumping = false; //when she is on the bottom she can jump again
                            }
                            else{
                                position -= 10;
                                count--;
                                fairy.style.bottom = position + 'px';
                                fairyTop += 10; //so we can check if she is hits a obstacle
                            }
                        }, 40); //fairy goes down slower 
                    }
                    
                    //move up
                    position += 10;
                    count++;
                    fairy.style.bottom = position + 'px';
                    fairyTop -= 10; //so we can check if she is hits a obstacle

                }, 20); //every 20 milliseconds function will be called
            }
        }
    }
    


    //OBSTACLES
    function generateObstacles(){

        if(!isGameOver){
            //after this random millisec a new obstacle will be generated +  minimum width so fairy can jump inbetween
            let randomGenerateTime = parseInt(Math.random() * 3000); 
            if(randomGenerateTime < 2000){
                randomGenerateTime = 2000;
            }
            
            
            let obstaclePositionLeft = leftsideOfForest + forestWidth - 100; //start position away from the fairy 
            const obstacle = document.createElement('img');
            document.body.appendChild(obstacle);
            obstacle.setAttribute('class', 'obstacle');
            obstacle.setAttribute('width', '100px');
            let obstacleWidthAndHight = 100;
            obstacle.style.left = obstaclePositionLeft + 'px';


            //choose a random obstacle pictogram
            let randomObstacleImg = Math.random();
            randomObstacleImg = parseInt(randomObstacleImg * 3);
            if(randomObstacleImg === 0){
                obstacle.setAttribute('src', 'images/fairygame/centaur.png');
            }else if(randomObstacleImg === 1){
                obstacle.setAttribute('src', 'images/fairygame/dragon.png');
            }else{
                obstacle.setAttribute('src', 'images/fairygame/tree.png');
            }
            

            //move obstacles every 20 millisec
            let timerId = setInterval(function(){

                //when it gets at the end of the screen it will be removed
                if(obstaclePositionLeft <= leftsideOfForest ){
                    clearInterval(timerId); //so not all tree's get removed
                    let obstacleToRemove = document.body.querySelector(".obstacle");
                    obstacleToRemove.remove();
                }

                //move obstacle to the left
                obstaclePositionLeft -= 2;
                obstacle.style.left = obstaclePositionLeft + 'px' ;

                //add to score if not hit
                if(!hit){
                    score += 0.1;
                    scoreCount.textContent = parseInt(score);
                }
                

                //check if he hits the fairy
                let obstacleTop = Number( (window.getComputedStyle(document.querySelector('.obstacle')).top).slice(0,-2) );
                
                let rect1 = {x: fairyTopLeft, y: fairyTop, width: fairyWidth, height: fairyWidth}
                let rect2 = {x: obstaclePositionLeft, y: obstacleTop, width: obstacleWidthAndHight, height: obstacleWidthAndHight}


                // WHERE THE HIT TAKES PLACE NEEDS SOME MORE FINE TUNING
            
                //fairy does not jump
                if (rect1.x + rect1.width >= rect2.x ) { //righttop F >= lefttop O
                    if(rect1.y + rect1.height >= rect2.y){ //leftbottom F >= lefttop O
                        isGameOver = true; //stops the game loop
                        hit = true; //so score count stops
                        fairy.style.visibility = "hidden"; //hides fairy after hit
                        restartButton.style.visibility = "visible";//show restart button 
                        
                    }
                }

                //if fairy jumps to late 
                if(rect1.y + rect1.height >= rect2.y && rect1.y + rect1.height < rect2.y + rect2.height ){ //leftbottom F is in the middle of the obstacle
                    if(rect1.x + rect1.width >= rect2.x && rect1.x <= rect2.x){ //righttop F >= lefttop O && lefttop F <= lefttop O
                        isGameOver = true;
                        hit = true;
                        fairy.style.visibility = "hidden";
                        restartButton.style.visibility = "visible";
                    
                    }
                }
 
            },10)

            setTimeout(generateObstacles, randomGenerateTime) //calls the function again every random generated milliseconds
        }
    }
    
    generateObstacles();


    //WINDOW RESIZE
    function windowresize(){ //when the window resize there will be a other bottom for the elements
        location.reload(); //same as reload window
    }

    function restart(){ //when pressing the restartbutton after getting hit
        location.reload(); //same as reload window
    }

}
    
    
    

