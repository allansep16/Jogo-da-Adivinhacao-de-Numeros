let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    let feedback = '';

    if (userGuess === randomNumber) {
        feedback = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`;
        document.getElementById('restartGame').style.display = 'block';
    } else if (userGuess < randomNumber) {
        feedback = 'Muito baixo! Tente novamente.';
    } else if (userGuess > randomNumber) {
        feedback = 'Muito alto! Tente novamente.';
    }

    document.getElementById('feedback').textContent = feedback;
});

document.getElementById('restartGame').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartGame').style.display = 'none';
});
