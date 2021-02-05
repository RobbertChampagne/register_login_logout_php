import Brick from './brick.js' 
import Candy from './candy.js' 

export function buildLevel(game, level){
    let bricks = [];

    level.forEach((row, rowIndex) => {  //loop level to get each row
      row.forEach((brick, brickIndex) => { //loop each row

        if (brick === 1) { //set brick

          let position = {
            x: 50 * brickIndex,
            y: 50 * rowIndex
          };

          bricks.push(new Brick(game, position)); //add new brick 

        }else if(brick === 2 || brick === 3 || brick === 4){ //set candy

            let position = {
                x: 50 * brickIndex,
                y: 50 * rowIndex
              };
    
            bricks.push(new Candy(game, position, brick)); //add new brick 
        }

      });
    });
  
    return bricks;
}



export const level1 = [
    [0,1,1,1,0,1,0,1,0,1,1,2,1,0,1]
    //[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0] 
];

export const level2 = [
  [0,1,1,1,0,1,0,1,0,1,1,2,1,0,1],
  [1,1,2,1,1,1,1,1,1,3,1,1,1,1,1]
  //[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0] 

];