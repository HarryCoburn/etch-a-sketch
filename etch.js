let etchContainer = document.querySelector("#etch-container");
etchContainer.addEventListener("mouseover", colorChange);


let gridSizeButton = document.querySelector("#setSize");
gridSizeButton.addEventListener("click", setGridSize);


let gridSize = 4; // Per side
let containerWidth = 960; // In pixels

function drawGrid() {
    console.log(gridSize)
    etchContainer.replaceChildren()
    let numSquares = gridSize * gridSize;
    for (let i = 0; i < numSquares; i++) {
        console.log(`Making square number ${i}`)
        let etchSquare = document.createElement("div");
        etchSquare.classList.add("square")
        etchSquare.setAttribute("style", `flex-basis: ${containerWidth / gridSize}px;`)
        etchContainer.appendChild(etchSquare)
    }
}

// Handle the colors of the grid
function colorChange(event) {
    let target = document.elementFromPoint(event.clientX, event.clientY);
    target.style.backgroundColor = "green";
}


function setGridSize(event) {
    let newSize = Number(prompt("How many squares per side should the grid be? (1-100)"))
    while ((newSize < 0) || (newSize > 100) || (!Number.isInteger(newSize))) {
        newSize = Number(prompt("How many squares per side should the grid be? (1-100)"))
    }
    gridSize = newSize
    drawGrid()
}

drawGrid()
