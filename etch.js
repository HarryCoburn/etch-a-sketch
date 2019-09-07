function setBoard() {
    let body = document.querySelector('body');
    // Create outer container
    let etch = document.createElement('div');
    etch.setAttribute('id', "etch");    
    // Generate grid
    for (i = 0; i < 16; i++) {
        let etchBlock = document.createElement('div');
        etchBlock.classList.add('etchBlock', i);
        etch.appendChild(etchBlock);
    }
    body.appendChild(etch);
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