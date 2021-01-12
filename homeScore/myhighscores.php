<?php

session_start();

//IF NOT LOGGED IN YET
if(!isset($_SESSION['name'])){
    $_SESSION['msg'] = "You must log in first to view this page"; //message not logged in 
    header("location: ../loginRegister/login.php");
}


?>
<!DOCTYPE html>
<html>
    <head>
    <title>My Highscores</title>
    <link rel="stylesheet" type="text/css" href="../style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="myhighscorescript.js"></script>
    <!--jQuery link to use AJAX-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

</head>
<body>

    <?php include "../navbar.php"; ?>

    <div id="fairyGameHighscoreContainer">
        <h3 class="highscoreTitle">My HighScores </h3>
        <table id="fairyGameHighscoreTable">
            <tr>
                <th>Game</th>
                <th>Score</th>
            </tr>
            <tr>
                <td>Fairy Game</td>
                <td id="fairyGameScore"></td>
            </tr>
        </table>
    </div>
    
    
    

</body>
</html>