<?php

session_start();

//CONNECT TO DB
$dbPassword = "robgamesbert1";
$dbUserName = "games";
$dbServer = "localhost";
$dbName = "games";

$connection = mysqli_connect($dbServer, $dbUserName, $dbPassword, $dbName);

if($connection ->connect_errno) //when there is no connection
{
    exit("Connection DB failed. Reason: ".$connection->connect_error);
}

//HIGHSCORE CONTROL
if(isset($_REQUEST['score'])){

    $score = $_REQUEST['score']; //value comes from request js 
    $name = $_SESSION['name'];

    if($score !== ""){
        $score = (int)$score;
        $query = "SELECT game1 FROM gamers WHERE name = '$name'"; //query to get the current highscore
        $result = mysqli_query($connection, $query); //uses query on DB
        $post = mysqli_fetch_assoc($result); //result as a Associative Array
        $currentHighScore = (int)$post['game1']; //to int
        
        if($currentHighScore < $score){
            $query = "UPDATE gamers SET game1 = '$score' WHERE name = '$name'"; //query to set the new highscore
            $result = mysqli_query($connection, $query); //uses query on DB
        }
    }
}


// DISPLAY HIGHSCORES 
if(isset($_REQUEST['display'])){
   
    $display = $_REQUEST['display']; //value comes from request js 
    
    if($display){ //if display is true / request is made
        $query = "SELECT game1, name FROM gamers ORDER BY game1 DESC LIMIT 4"; //query to get all the highscores
        $result = $connection->prepare($query); //prepares query
        $result->execute(); //uses query on DB
        $result->bind_result($gameScore, $rowName); //save output query in these variables
        $result->store_result(); //save result

        $resultHighscore;
        
        if($result->num_rows > 0){ //only when there is output
            while($result->fetch()){ // use each row from query 
                $resultHighscore[] = array($rowName,$gameScore); //add to array
            }
            echo json_encode($resultHighscore); //'return' array to JS
        }
    }
}

// DISPLAY MY HIGHSCORES 
if(isset($_REQUEST['displayMyHighScores'])){
   
    $displayMyHighScores = $_REQUEST['displayMyHighScores']; //value comes from request js 
    $name = $_SESSION['name'];
    
    if($displayMyHighScores){ //if display is true / request is made
        $query = "SELECT game1 FROM gamers WHERE name = '$name'"; //query to get the highscore
        $result = $connection->prepare($query); //prepares query
        $result->execute(); //uses query on DB
        $result->bind_result($highScore); //save output query in variable
        $result->store_result(); //save result

        $resultHighscore;
        
        if($result->num_rows > 0){ //only when there is output
            while($result->fetch()){ // use each row from query 
                $resultHighscore[] = $highScore; //add to array
            }
            echo json_encode($resultHighscore); //'return' array to JS
        }
    }
}

?>