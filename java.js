let randomNumber;
        const startButton = document.getElementById('start-button');
        const guessInput = document.getElementById('guess-input');
        const submitGuessButton = document.getElementById('submit-guess');

        startButton.addEventListener('click', () => {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            alert('Número sorteado! Tente adivinhar.');
            guessInput.disabled = false;
            submitGuessButton.disabled = false;
        });

        submitGuessButton.addEventListener('click', () => {
            const userGuess = parseInt(guessInput.value);
            if (isNaN(userGuess)) {
                alert('Digite um número válido.');
                return;
            }
            if (userGuess === randomNumber) {
                alert('Parabéns! Você acertou!');
                guessInput.disabled = true;
                submitGuessButton.disabled = true;
            } else if (userGuess < randomNumber) {
                alert('Tente um número maior.');
            } else {
                alert('Tente um número menor.');
            }
        });