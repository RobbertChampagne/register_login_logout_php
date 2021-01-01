<ul id="navbar">            
        <li id="navbariconli"><a href="home.php"><img id="navbaricon" src="images\playpink.PNG"></a></li>
        <li id="navbaremptyspace"></li>

        <li class="navbarright"><a class="navbarlink">Highscores</a></li>
        <li class="navbarright"><a class="navbarlink">My Highscores</a></li>
        <li class="navbarright"> <?php if(isset($_SESSION['name'])) : ?> <a class="navbarlink" href="login.php?logout='1'">Logout</a> <?php endif ?></li>
</ul>
