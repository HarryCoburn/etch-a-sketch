function setBoard() {
    let body = document.querySelector('body');
    // Create outer container
    let etch = document.createElement('div');
    etch.setAttribute('id', "etch");    
    for (i = 0; i < 16; i++) {
        let etchBlock = document.createElement('div');
        etchBlock.classList.add('etchBlock' + i);
        etch.appendChild(etchBlock);
    }
    body.appendChild(etch);
}

setBoard();