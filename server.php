<?php
session_start();

// Unset all of the session variables 
//(so when logged out you can't go bak with the back button)
$_SESSION = array();

//INITIALISING VAR
$errors = array();
$name = "";
$email = "";
$password = "";


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


//REGISTER USER
if (isset($_POST['registerbutton'])) {
    $name = mysqli_real_escape_string($connection, $_POST['name']); //so that escape characters are removed
    $email = mysqli_real_escape_string($connection, $_POST['email']); 
    $password = mysqli_real_escape_string($connection, $_POST['password']);
    $password2 = mysqli_real_escape_string($connection, $_POST['passwordrepeat']);


    //FORM VALIDATION
    if(empty($name)) {array_push($errors, "Username is required!");}
    if(empty($email)) {array_push($errors, "Email is required!");}
    if(empty($password)) {array_push($errors, "Password is required!");}
    if($password != $password2) {array_push($errors, "Passwords need to be the same!");}

    //CHECK DB FOR SAME USER WITH SAME username
    $name_check_query = "SELECT * FROM gamers WHERE name = '$name' LIMIT 1"; //stops after finding 1
    $result = mysqli_query($connection, $name_check_query); //use query on DB
    $user = mysqli_fetch_assoc($result); //user result

    if($user){
        if($user['name'] === $name){array_push($errors, "Username already in use.");}
    }


    //REGISTER USER IF NO ERROR
    if(count($errors) == 0){
        $password = md5($password); //encrypt password
        $query = "INSERT INTO gamers (name, email, password) VALUES ('$name', '$email', '$password')"; 
        mysqli_query($connection, $query); //run query on DB

        $_SESSION['name'] = $name;
        $_SESSION['success'] = "You are now logged in";

        header('location: home.php');
    }
}



//LOGIN USER
if(isset($_POST['loginbutton'])){
    $name = mysqli_real_escape_string($connection, $_POST['name']); //so that escape characters are removed
    $password = mysqli_real_escape_string($connection, $_POST['password']);

    //FORM VALIDATION
    if(empty($name)) {array_push($errors, "Username is required!");}
    if(empty($password)) {array_push($errors, "Password is required!");}

    if(count($errors) == 0) {
        $password = md5($password);
        $query = "SELECT * FROM gamers WHERE name ='$name' AND password='$password' ";
        $results = mysqli_query($connection, $query);

        if(mysqli_num_rows($results) == 1){
            $_SESSION['name'] = $name;
            $_SESSION['success'] = "Logged in succesfully";
            header("location: home.php");
        }else{
            array_push($errors, "Wrong username/password combination");
        }
    }
}
?>