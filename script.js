// TODO: Module to create and manage gameboard
const gameboard = (() => {

    //Initalise gameboard array
    const boardArray = new Array(9);

    //Set active mark
    let activeMark = "";


    // clear gameboard and add new event listeners
    const resetBoard = () => {
        const board = document.querySelectorAll('.gameboardField');
        board.forEach(element => {
            if (element.innerHTML !== ''){
                element.innerHTML = '';
                element.addEventListener('click', () =>{
                    if (element.innerHTML === '' && gameController.gameOver === false){
                        element.innerHTML = activeMark;
                        //report to gameboard array
                        boardArray[element.dataset.index] = activeMark;
                        gameboard.checkForWinner();
                        gameController.changeActive();
                        console.log('clicked');
                    }
                }, {once: true});
            }})
    }

    const resetArray = () => {
        boardArray.length = 0;
        boardArray.length = 9;
    }

    // display ai turn on board, field of ai move
    const aiMark = (field) => {
        const board = document.querySelectorAll('.gameboardField');
        board.forEach(element => { if(element.dataset.index == field) {
            element.innerHTML = activeMark;
        }
    })
    }

    const updateMark = (mark) => {
        activeMark = mark;
    }
    // TODO: check gameboard for winner
    const checkForWinner = () => {
        // winning combinations:
        // 0 - 1 - 2
        if (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2] && boardArray[0] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }
        // 3 - 4 - 5
        if (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5] && boardArray[3] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }
        // 6 - 7 - 8
        if (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8] && boardArray[6] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }
        // 0 - 3 - 6
        if (boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6] && boardArray[0] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }
        // 1 - 4 - 7
        if (boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7] && boardArray[1] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }
        // 2 - 5 - 8
        if (boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8] && boardArray[2] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }
        // 0 - 4 - 8
        if (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8] && boardArray[0] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }

        // 2 - 4 - 6
        if (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6] && boardArray[2] != null) {
            console.log('Winner Found');
            gameController.gameOver = true;
            console.log(gameController.gameOver);
        }

    }


    return {
        resetBoard,
        resetArray,
        boardArray,
        aiMark,
        updateMark,
        checkForWinner
    };

})();

// Factory function to create player objects
const playerFactory = (playerNum) => {
    if (playerNum === 'p1') {
        const player = {};
        player.name = document.querySelector('#p1Name').value;
        if (player.name === '') {
            player.name = 'Player 1';
        }
        player.mark = document.querySelector('input[name=p1Mark]:checked').value;
        player.active = false;
        return player;
    }
    else {
        const player = {};
        player.name = document.querySelector('#p2Name').value;
        if (player.name === '') {
            player.name = 'Player 2';
        }
        player.mark = document.querySelector('input[name=p2Mark]:checked').value;
        player.active = false;
        return player;         
    }
}

// TODO: Module to handle game flow.
const gameController = (() => {

    // Initialise player variables within gameController
    let p1;
    let p2;

    // boolean to track whether game is over
    let gameOver = false;

    const createPlayers = () => {
        p1 = playerFactory('p1');
        p2 = playerFactory('p2');
    }

    // Reset previous game
    const resetGame = () => {
        gameController.gameOver = false;
        gameboard.resetArray();
        gameboard.resetBoard();
        Math.random() < 0.5 ? p1.active = true : p2.active = true;
        if (p1.active === true) {
            gameboard.updateMark(p1.mark);
            document.querySelector('.gameAnnouncer').textContent = `${p1.name}'s turn`;
        }
        else {
            gameboard.updateMark(p2.mark);
            document.querySelector('.gameAnnouncer').textContent = `${p2.name}'s turn`;
        }
    }


    // Change active player
    const changeActive = () => {
        // Swap active player status and update mark
        if (p1.active === false) {
            p1.active = true;
            p2.active = false;
            gameboard.updateMark(p1.mark);
            // Display current player message above board
            document.querySelector('.gameAnnouncer').textContent = `${p1.name}'s turn`;

        }
        else {
            p1.active = false;
            p2.active = true;
            gameboard.updateMark(p2.mark);
            // Display current player message above board
            document.querySelector('.gameAnnouncer').textContent = `${p2.name}'s turn`;

        }
    }


    // TODO: Display winner (take winning mark as argument)
        // if player.mark = O/X -> display player.name

    // TODO: AI turn logic
    const aiTurn = () => {
        // TODO: AI logic
        
        // taking turn
        gameboard.aiMark();
        changeActive();
    }


    return {
        createPlayers,
        changeActive,
        resetGame,
        aiTurn,
        gameOver
    };
 
    })();

//Event listeners
    
    // Display/hide new game form
    const newGamebtn = document.querySelector('.newGameBtn');
        newGamebtn.addEventListener('click', () => {
            document.querySelector('.newGameModal').classList.toggle('hidden');
        });
    // Auto select p2 mark.
    let p1RadioX = document.querySelector('#p1X');
    p1RadioX.addEventListener('click', () => {
        document.querySelector('#p2X').removeAttribute("checked", "");
        document.querySelector('#p2O').setAttribute("checked", "");
    });
    let p1RadioO = document.querySelector('#p1O');
    p1RadioO.addEventListener('click', () => {
        document.querySelector('#p2O').removeAttribute("checked", "");
        document.querySelector('#p2X').setAttribute("checked", "");
    });

    // Prevent default form submission behaviour, create player objects and hide form
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        document.querySelector('.newGameModal').classList.toggle('hidden');
        gameController.createPlayers();
        gameController.resetGame();
        });
