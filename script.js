// TODO: Module to create and manage gameboard
const gameboard = (() => {

    // TODO: remove current gameboard text

    // TODO: create array to store gameboard

    // TODO: display gameboard on page

    // TODO: add event listeners to update dom and array

})();

// TODO: Factory function to handle players
const playerFactory = (playerName, playerMark) => {
    const player = {};
    player.name = playerName;
    player.mark = playerMark;
    return player;
}

// TODO: Module to handle game flow.
const gameController = (() => {

    const newGame = () => {
        
        // TODO: call gameboard module to prepare board
    
        // store inputted data (names, marks)
        let p1Name = document.querySelector('#p1Name').value;
        let p2Name = document.querySelector('#p2Name').value;
        let p1Mark = document.querySelector('input[name=p1Mark]:checked').value;
        let p2Mark = document.querySelector('input[name=p2Mark]:checked').value;
        if (p1Name === '') {
            p1Name = 'Player 1';
        }
        if (p2Name === '') {
            p2Name = 'Player 2';
        }

        // TODO: create player objects using data
        let player1 = playerFactory(p1Name, p1Mark);
        let player2 = playerFactory(p2Name, p2Mark);
        console.log(player1);
        console.log(player2);
        }

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

    // Prevent default form submission behaviour and hide form
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        document.querySelector('.newGameModal').classList.toggle('hidden');
        });