<?php

session_start();

//IF NOT LOGGED IN YET
if(!isset($_SESSION['name'])){
    $_SESSION['msg'] = "You must log in first to view this page"; //message not logged in 
    header("location: login.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../style.css">
    <link rel="stylesheet" type="text/css" href="brickBreakerWindowStyle.css">
    <script type="module"  src="./brickBreakerScript.js"></script>
    <!--jQuery link to use AJAX-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

    <title>BrickBreaker Game</title>
</head>
<body>
    <?php include "../navbar.php"; ?>
    <img id="ralph" src="..\images\brickbreaker\ralph.png" alt="" hidden>
    <canvas id="gameScreen" width="780" height="450"></canvas>

</body>
</html>