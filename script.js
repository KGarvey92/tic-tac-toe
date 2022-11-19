// TODO: Module to create and manage gameboard
const gameboard = (() => {

    //Initalise gameboard array
    const boardArray = new Array(9);
    boardArray[0] = 'YabbaDabbaDoo!';

    // TODO: clear gameboard and add new event listeners
    const resetBoard = () => {
        const board = document.querySelectorAll('.gameboardField');
        board.forEach(element => element.innerHTML = '');
    }

    const resetArray = () => {
        boardArray.length = 0;
        boardArray.length = 9;
    }
    
    // TODO: check gameboard for winner

        // TODO: If winner report mark to game controller

    return {
        resetBoard,
        resetArray
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
        return player;
    }
    else {
        const player = {};
        player.name = document.querySelector('#p2Name').value;
        if (player.name === '') {
            player.name = 'Player 2';
        }
        player.mark = document.querySelector('input[name=p2Mark]:checked').value;
        return player;         
    }
}

// TODO: Module to handle game flow.
const gameController = (() => {

    // Initialise player variables within gameController
    let p1;
    let p2;

    const createPlayers = () => {
        p1 = playerFactory('p1');
        p2 = playerFactory('p2');
    }

    // TODO: Reset previous game
        // reset gameboard display and array, set active player randomly


    // TODO: Check active player

    // TODO: Display winner (take winning mark as argument)
        // if player.mark = O/X -> display player.name
    return {
        createPlayers
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
        });
