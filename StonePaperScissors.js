<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stone Paper Scissors</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #333;
        }

        .game-container {
            margin-top: 50px;
        }

        .choices {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .choice {
            padding: 20px;
            border: 2px solid #333;
            border-radius: 8px;
            background-color: #fff;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .choice:hover {
            transform: scale(1.1);
        }

        .results {
            margin-top: 30px;
        }

        .results p {
            font-size: 1.2em;
            margin: 10px 0;
        }

        .play-again {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .play-again:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <h1>Stone Paper Scissors</h1>
    <div class="game-container">
        <div class="choices">
            <div class="choice" data-choice="stone">Stone</div>
            <div class="choice" data-choice="paper">Paper</div>
            <div class="choice" data-choice="scissors">Scissors</div>
        </div>
        <div class="results">
            <p id="player-choice">Your choice: </p>
            <p id="computer-choice">Computer's choice: </p>
            <p id="result">Result: </p>
        </div>
        <button class="play-again" onclick="resetGame()">Play Again</button>
    </div>

    <script>
        const choices = document.querySelectorAll('.choice');
        const playerChoiceEl = document.getElementById('player-choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const resultEl = document.getElementById('result');

        choices.forEach(choice => {
            choice.addEventListener('click', () => {
                const playerChoice = choice.getAttribute('data-choice');
                const computerChoice = getComputerChoice();
                const result = determineWinner(playerChoice, computerChoice);

                playerChoiceEl.textContent = `Your choice: ${playerChoice}`;
                computerChoiceEl.textContent = `Computer's choice: ${computerChoice}`;
                resultEl.textContent = `Result: ${result}`;
            });
        });

        function getComputerChoice() {
            const options = ['stone', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * options.length);
            return options[randomIndex];
        }

        function determineWinner(player, computer) {
            if (player === computer) {
                return 'It's a tie!';
            }

            if (
                (player === 'stone' && computer === 'scissors') ||
                (player === 'paper' && computer === 'stone') ||
                (player === 'scissors' && computer === 'paper')
            ) {
                return 'You win!';
            }

            return 'You lose!';
        }

        function resetGame() {
            playerChoiceEl.textContent = 'Your choice: ';
            computerChoiceEl.textContent = 'Computer's choice: ';
            resultEl.textContent = 'Result: ';
        }
    </script>
</body>
</html>
