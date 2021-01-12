window.addEventListener("load", loaded);

function loaded(){
    //AJAX request to the highscores from the fairygame of the DB
    let fairyGameHighscoreTable = document.getElementById("fairyGameHighscoreTable");
    let display = true;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let highscores = JSON.parse(this.response); //get arrays with strings of query from PHP
            
            for(let row of highscores){
                console.log(row);

                //create elements
                let scoreRow = document.createElement('tr');
                let scoreColumnName = document.createElement('td');
                let scoreColumnScore = document.createElement('td');
                let name = document.createTextNode(row[0]);
                let score = document.createTextNode(row[1]);

                scoreColumnName.appendChild(name)
                scoreColumnScore.appendChild(score)
                scoreColumnScore.setAttribute("class", "score");
                scoreRow.appendChild(scoreColumnName);
                scoreRow.appendChild(scoreColumnScore);
                fairyGameHighscoreTable.appendChild(scoreRow);

            }
        }
    };
    xhttp.open("POST", "score.php?display="+display, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}