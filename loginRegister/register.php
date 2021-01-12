<?php include('server.php') ?> <!--include PHP page-->

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="../style.css" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body >
    <a href="index.php"> <img src="..\images\back.png" width="50" height="50"> </a>

    <form action="register.php" method="post">

        <?php include('error.php') ?> <!--include errors page (shows errors)-->

        <div id="loginregisterdiv">
            <img src="..\images\inlogregistericon1.png" id="inlogregistericon">
            <br><br>
            Username
            <br>
            <input name="name" class="loginregisterinputs" type="text" id="usernameinput" placeholder="Enter your username" required >
            <br><br>
            Email
            <br>
            <input name= "email" class="loginregisterinputs" type="text" id="emailinput" placeholder="Enter your email" required >
            <br><br>
            Password
            <br>
            <input name= "password" class="loginregisterinputs" type="text" id="passwordinput" placeholder="Enter your password" required >
            <br><br>
            Password (repeat)
            <br>
            <input name= "passwordrepeat" class="loginregisterinputs" type="text" id="passwordinput" placeholder="Enter your password" required >
            <br><br>
            <button type="submit" value="register" class="loginregisterbuttons" name="registerbutton">Register</button>
            <br><br>
        </div>
    </form>

</body>
</html>