window.addEventListener("load", loaded);

function loaded(){
    //AJAX request to the highscores from the fairygame of the DB
    let fairyGameHighscore = document.getElementById("fairyGameScore");
    let displayMyHighScores = true;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let highscores = JSON.parse(this.response); //get arrays with strings of query from PHP
            
            let score = document.createTextNode(highscores[0]);
            fairyGameHighscore.appendChild(score)
            
        }
    };
    xhttp.open("POST", "score.php?displayMyHighScores="+displayMyHighScores, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}