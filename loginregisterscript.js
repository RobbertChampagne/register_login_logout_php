document.getElementById("loginbutton").addEventListener("click", gotologinpage);

function gotologinpage(){
    window.location.href = "login.php";
}

document.getElementById("registerbutton").addEventListener("click", gotoregisterpage);

function gotoregisterpage(){
    window.location.href = "register.php";
}