<ul id="navbar">            
        <li id="navbariconli"><a href="../homeScore/home.php"><img id="navbaricon" src="..\images\playpink.PNG"></a></li>
        <li id="navbaremptyspace"></li>

        <li class="navbarright"><a href="../homeScore/highscores.php" class="navbarlink">Highscores</a></li>
        <li class="navbarright"><a href="../homeScore/myhighscores.php" class="navbarlink">My Highscores</a></li>
        <li class="navbarright"> <?php if(isset($_SESSION['name'])) : ?> <a class="navbarlink" href="../loginRegister/login.php?logout='1'">Log Out <?php echo $_SESSION['name'] ?> </a> <?php endif ?></li>
</ul>
