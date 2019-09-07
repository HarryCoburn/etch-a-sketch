function setBoard() {
    let body = document.querySelector('body');
    // Create outer container
    let etch = document.createElement('div');
    etch.setAttribute('id', "etch");    
    // Generate grid    
    body.appendChild(generateGrid(etch));
}

function generateGrid(board, num=16) {
    for (i = 0; i < num; i++) {
        let etchBlock = document.createElement('div');
        etchBlock.classList.add('etchBlock', i);
        board.appendChild(etchBlock);
    }
    return board;
}


function etch() {
    const squares = document.getElementsByClassName("etchBlock");
    Array.from(squares).forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.classList.add('colored');            
        });
    })
}

setBoard();
etch();