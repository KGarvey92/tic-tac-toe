// TODO: Module to create and manage gameboard
const gameboard = (() => {


    // TODO: create array to store gameboard

    // TODO: display gameboard on page

    // TODO: add event listeners to update dom and array

})();

// TODO: Factory function to handle players
// const playerFactory = (name, mark)

// TODO: Module to handle game flow.
const gameController = (() => {

    const newGame = () => {
        const btn = document.querySelector('.newGameBtn');
        btn.addEventListener('click', () => {
            document.querySelector('.newGameModal').classList.toggle('hidden');
        })
    }

    return {
        newGame,
    };
})();

gameController.newGame();
