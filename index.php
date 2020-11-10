<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hangman!</title>
    <link rel="stylesheet" href="css/main.css" type="text/css">
</head>
<body>
<div id="top-nav">
    <h1>Hangman The Game!</h1>
    <hr>
</div>
<main>
    <div id="letter-box-container">
        <span id="secret-word-label">Secret Word:</span>
    </div>
    <div id="hangman-container">
        <img src="img/hangman_1.jpg">
    </div>
    <div id="guessing-container">
        <input type="text" id="guess-box">
        <button id="guess-button">Guess!</button>
    </div>
    <div hidden id="validation">Guess must be exactly one character</div>
</main>
<footer>
    <img id="csumb-img" src="./img/csumb.png" alt="Picture of CSUMB icon"/>
    <div>CST336 Internet Programming. 2020&copy; Ryan Barrett</div>
    <br/>
</footer>
<script src="js/main.js"></script>
</body>
</html>
