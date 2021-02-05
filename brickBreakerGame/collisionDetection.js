
export function detectCollision(donut, gameObject){
    
    //check collision
    let sizeOfDonut = donut.size;
    let leftTopOfDonutY = donut.position.y;
    let leftBottomOfDonutY = leftTopOfDonutY + sizeOfDonut;
    let leftTopOfDonutX = donut.position.x;
    let rightTopOfDonutX = donut.position.x + sizeOfDonut;

    let leftTopOfObjectY = gameObject.position.y;
    let leftTopOfObjectX = gameObject.position.x;
    let rightTopOfObjectX = leftTopOfObjectX + gameObject.width;
    let leftBottomOfObjectY = leftTopOfObjectY + gameObject.height;
     
    

        if(leftTopOfDonutY <= leftBottomOfObjectY 
            &&  leftTopOfDonutX <= rightTopOfObjectX && rightTopOfDonutX >= rightTopOfObjectX){ 
            return true;
    
        }else{
    
            return false;
    
        }
    
    
}