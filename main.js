document.addEventListener('DOMContentLoaded', () => {
    const words = [
        // Inserisci qui le tue parole di 5 lettere
        "primo", "second", "terza", "quarto", "quint"
    ];

    let answer = words[Math.floor(Math.random() * words.length)];
    const board = document.getElementById('game-board');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    let attempts = 0;

    guessButton.addEventListener('click', () => {
        const guess = guessInput.value.toLowerCase();
        if (guess.length !== 5) {
            alert('La parola deve essere di 5 lettere');
            return;
        }
        if (attempts >= 6) {
            alert('Hai esaurito i tentativi!');
            return;
        }
        attempts++;
        const row = document.createElement('div');
        for (let i = 0; i < 5; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            if (guess[i] === answer[i]) {
                tile.classList.add('correct');
            } else if (answer.includes(guess[i])) {
                tile.classList.add('present');
            } else {
                tile.classList.add('absent');
            }
            tile.textContent = guess[i];
            row.appendChild(tile);
        }
        board.appendChild(row);
        guessInput.value = '';
        if (guess === answer) {
            alert('Hai indovinato la parola!');
        } else if (attempts === 6) {
            alert(`Hai esaurito i tentativi! La parola era: ${answer}`);
        }
    });
});
