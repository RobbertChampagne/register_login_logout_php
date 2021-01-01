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
</head>
<body>

    <?php include "navbar.php"; ?>

    <canvas id="canvas" width="200" height="100"></canvas>

    <script src="fairygamescript.js"></script>

</body>
</html>