function setBoard(side = 4) {    
    if (side === "") side = 4;
    let body = document.querySelector('body');
    // Create outer container
    let etch = document.createElement('div');
    etch.setAttribute('id', "etch");
    etch.setAttribute('style', 'grid-template-rows: repeat(' + side + ', 1fr); grid-template-columns: repeat(' + side + ', 1fr);')    
    // Generate grid    
    body.appendChild(generateGrid(etch,side*side));    
    // Configure button
    button = document.querySelector('button');
    button.addEventListener('click', resetBoard);
    // Set square events
    setSquareEvents();
}

function generateGrid(board, num) {
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
    side = prompt("How many squares should be on a side?");
    let etch = document.getElementById('etch');
    let body = document.querySelector('body');
    body.removeChild(etch);
    setBoard(side);    
}

setBoard();

