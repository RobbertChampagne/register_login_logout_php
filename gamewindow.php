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
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="fairygamewindowstyle.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="fairygamescript.js"></script>
</head>
<body>

    <?php include "navbar.php"; ?>

    <img src="images\fairygame\background.jpg" id="canvasBackgroundImg" width="200" height="100" alt="">
    <div id="scoreLabel">Score: </div>
    <div id="scoreCount"></div>
    <img id="fairy" src="images\fairygame\fairy.png" alt="">
    <a id="restartButton"><img id="restartButtonImg" src="images\fairygame\restart.png"></a>
    
    
    

</body>
</html>