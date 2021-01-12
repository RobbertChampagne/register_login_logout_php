<?php

session_start();

//IF NOT LOGGED IN YET
if(!isset($_SESSION['name'])){
    $_SESSION['msg'] = "You must log in first to view this page"; //message not logged in 
    header("location: ../loginRegister/login.php");
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
    header("location: ../loginRegisterlogin.php");
}

?>

<!DOCTYPE html>
<html>
    <head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="../style.css" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
   
    <?php include "../navbar.php"; ?>

    <div id=homepagecontainer>
        <div class=games>
            <a id="link1" class="gameiconpreview" href="../fairyGame/gamewindow.php"> <img id="fairygameimg" src="..\images\fairygame\fairy.png" > </a> 
            <a id="link2" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
            <a id="link3" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
        </div>

        <div class=games>
            <a id="link4" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
            <a id="link5" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
            <a id="link6" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
        </div>

        <div class=games>
            <a id="link7" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
            <a id="link8" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
            <a id="link9" class="gameiconpreview" href=""> <img class="constructionimg" src="..\images\construction.png" > </a> 
        </div>
    </div>

    

</body>
</html>