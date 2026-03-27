let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    if (attemptsLeft <= 0) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You won!";
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too High!";
    } else {
        message.textContent = "📈 Too Low!";
    }

    attempts.textContent = "Attempts left: " + attemptsLeft;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 7;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
}
