<?php

session_start();

//IF NOT LOGGED IN YET
if(!isset($_SESSION['name'])){
    $_SESSION['msg'] = "You must log in first to view this page"; //message not logged in 
    header("location: login.php");
}

//LOGGING OUT
if(isset($_GET['logout'])){
        
    // Unset all of the session variables 
    //(so when logged out you can't go back with the back button)
    $_SESSION = array();
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    
    session_destroy();
    header("location: login.php");
}

?>

<!DOCTYPE html>
<html>
    <head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="style.css" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

   <h1>Home Page</h1>

   <!--success message = "Logged in succesfully"-->
    <?php if(isset($_SESSION['success'])) : ?>
    <h3>
        <?php
            echo $_SESSION['success'];
            unset($_SESSION['success']) //success message gone after refresh page
        ?>
    </h3>
    <?php endif ?>


    <!--if the user logs in print info about him-->
    <?php if(isset($_SESSION['name'])) : ?>
        <h3>Welcome <strong><?php echo $_SESSION['name']; ?></strong></h3>

        <a href="login.php?logout='1'">logout</a>

    <?php endif ?>


    <script src="loginregisterscript.js"></script>

</body>
</html>