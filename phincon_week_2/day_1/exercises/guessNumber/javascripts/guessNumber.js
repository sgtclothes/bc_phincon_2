document.addEventListener("DOMContentLoaded", function () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let timeLeft = 30;
    let timerInterval = setInterval(updateTimer, 1000);
    function updateTimer() {
        timeLeft--;
        document.getElementById("timer").innerText = `Waktu tersisa: ${timeLeft} detik`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("result").innerText = "Waktu Habis! Anda Kalah!";
        }
    }
    document.getElementById("submitGuess").addEventListener("click", function () {
        let userGuess = document.getElementById("guessInput").value;
        if (userGuess == randomNumber) {
            clearInterval(timerInterval);
            document.getElementById("result").innerText = "Selamat, Anda Menang!";
        } else if (userGuess < randomNumber) {
            document.getElementById("result").innerText = "Terlalu kecil!";
        } else {
            document.getElementById("result").innerText = "Terlalu besar!";
        }
    });
});
