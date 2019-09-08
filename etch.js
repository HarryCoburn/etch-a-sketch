function setBoard(side = 4, boardType = "black") {    
    if (side === "" || side === null) side = 4;
    let body = document.querySelector('body');
    // Create outer container
    let etch = document.createElement('div');
    etch.setAttribute('id', "etch");
    etch.setAttribute('style', 'grid-template-rows: repeat(' + side + ', 1fr); grid-template-columns: repeat(' + side + ', 1fr);')
    if (boardType === "greyscale") {
        etch.style.backgroundColor = "white"
    } else {
        etch.style.backgroundColor = "gray";
    }
    // Generate grid    
    body.appendChild(generateGrid(etch,side*side));    
    // Configure buttons
    blackButton = document.querySelector('button[id="black"]');
    blackButton.addEventListener('click', resetBoard, false);
    blackButton.boardType = "black";

    rainbowButton = document.querySelector('button[id="rainbow"]');
    rainbowButton.addEventListener('click', resetBoard, false);
    rainbowButton.boardType = "rainbow";

    greyButton = document.querySelector('button[id="greyscale"]');
    greyButton.addEventListener('click', resetBoard, false);
    greyButton.boardType = "greyscale";

    // Set square events
    setSquareEvents(boardType);
}

function generateGrid(board, num) {
    for (i = 0; i < num; i++) {
        let etchBlock = document.createElement('div');
        etchBlock.classList.add('etchBlock', i);
        board.appendChild(etchBlock);
    }    
    return board;
}

function setSquareEvents(boardType) {    
    const squares = document.getElementsByClassName("etchBlock");
    if (boardType === "black") {
        Array.from(squares).forEach((square) => {
            square.addEventListener('mouseover', (e) => {
                square.setAttribute('style', 'background-color: rgb(0,0,0)');
                square.classList.add('colored');
            });
        })
    } else if (boardType === "rainbow") {
        Array.from(squares).forEach((square) => {
            square.addEventListener('mouseover', (e) => {
                if (!square.classList.contains('colored')) {
                    square.setAttribute('style', 'background-color: rgb(' + getRandomColor() + ', ' + getRandomColor() + ', ' + getRandomColor() +')');
                    square.classList.add('colored');
                } else {
                    shadeColor(square);
                }  
                
            });
        })
    } else if (boardType === "greyscale") {
        Array.from(squares).forEach((square) => {
            square.addEventListener('mouseover', (e) => {
                if (!square.classList.contains('colored')) {
                    square.setAttribute('style', 'background-color: rgb(230,230,230)');
                    square.classList.add('colored');
                } else {
                shadeColor(square);
                }
            });
        })
    }
}

function getRandomColor() {
    return Math.round(Math.random()*255);
}

function shadeColor(square) {
    let style = getComputedStyle(square);
    let rgb = style.backgroundColor.match(/\d+/g);   
    let newRGB = [];
    rgb.forEach((color) => {
        color = parseInt(color * 90 / 100);
        color = (color>0)?color:0;
        newRGB.push(color);
    })
    square.setAttribute('style', 'background-color: rgb(' + newRGB[0] + ', ' + newRGB[1] + ', ' + newRGB[2] +')');                    
}

function resetBoard(evt) {
    side = prompt("How many squares should be on a side?");
    let etch = document.getElementById('etch');
    let body = document.querySelector('body');
    body.removeChild(etch);
    setBoard(side, evt.target.boardType);    
}

setBoard();

