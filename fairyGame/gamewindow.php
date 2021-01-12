<?php

session_start();

//IF NOT LOGGED IN YET
if(!isset($_SESSION['name'])){
    $_SESSION['msg'] = "You must log in first to view this page"; //message not logged in 
    header("location: login.php");
}

?>
<!DOCTYPE html>
<html>
    <head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="../style.css">
    <link rel="stylesheet" type="text/css" href="fairygamewindowstyle.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="fairygamescript.js"></script>
    <!--jQuery link to use AJAX-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

</head>
<body>

    <?php include "../navbar.php"; ?>

    <div id="errortext">The game can only be played if the screen is wide enough!</div>

    <img class="gameVisible" src="..\images\fairygame\background.jpg" id="canvasBackgroundImg" width="200" height="100" alt="">
    <div class="gameVisible" id="highScoreLabel">Highscore: </div>
    <div class="gameVisible" id="highScoreCount"></div>
    <div class="gameVisible" id="scoreLabel">Score: </div>
    <div class="gameVisible" id="scoreCount"></div>
    <img class="gameVisible" id="fairy" src="..\images\fairygame\fairy.png" alt="">
    <a class="gameVisible" id="restartButton"><img id="restartButtonImg" src="..\images\fairygame\restart.png"></a>
    
    
    
    

</body>
</html>