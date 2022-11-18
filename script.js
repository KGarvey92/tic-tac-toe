// TODO: Module to create and manage gameboard
const gameboard = (() => {


    // TODO: create array to store gameboard

    // TODO: display gameboard on page

    // TODO: add event listeners to update dom and array

})();

// TODO: Factory function to handle players
//const playerFactory = (playerName, mark)

// TODO: Module to handle game flow.
const gameController = (() => {

    const newGame = () => {
        const newGamebtn = document.querySelector('.newGameBtn');
        newGamebtn.addEventListener('click', () => {
            document.querySelector('.newGameModal').classList.toggle('hidden');
        });
        // event listener to auto select p2 mark.
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

        // prevent default form submission behaviour and hide form
        const form = document.querySelector('form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            document.querySelector('.newGameModal').classList.toggle('hidden');

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
        
        // create player objects using data
        
        })

    }

    return {
        newGame,
    };
})();

gameController.newGame();
