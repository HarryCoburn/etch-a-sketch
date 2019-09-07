function setBoard(side) {    
    let body = document.querySelector('body');
    // Create outer container
    let etch = document.createElement('div');
    etch.setAttribute('id', "etch");
    // Generate grid    
    body.appendChild(generateGrid(etch,side));    
    // Configure button
    button = document.querySelector('button');
    button.addEventListener('click', resetBoard);
}

function generateGrid(board, num = 16) {
    for (i = 0; i < num; i++) {
        let etchBlock = document.createElement('div');
        etchBlock.classList.add('etchBlock', i);
        board.appendChild(etchBlock);
    }    
    return board;
}

function setSquareEvents() {
    console.log('Enter etch');
    const squares = document.getElementsByClassName("etchBlock");
    Array.from(squares).forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.classList.add('colored');
        });
    })
}

function resetBoard() {
    /*
    const squares = document.getElementsByClassName("etchBlock");
    Array.from(squares).forEach((square) =>
        square.classList.remove('colored')
    )*/
    side = prompt("How many squares should be on a side?");
    let etch = document.getElementById('etch');
    let body = document.querySelector('body');
    body.removeChild(etch);
    setBoard(side);
    setSquareEvents();
}

setBoard();
setSquareEvents();
