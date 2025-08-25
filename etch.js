let etchContainer = document.querySelector("#etch-container");
etchContainer.addEventListener("mouseover", colorChange);


let gridSizeButton = document.querySelector("#setSizeButton");
gridSizeButton.addEventListener("click", setGridSize);

let rainbowButton = document.querySelector("#rainbowToggle")
rainbowButton.addEventListener("click", () => {
    rainbowOn = !rainbowOn;
    if (rainbowOn) {
        rainbowButton.textContent = "Rainbow ON";
    } else {
        rainbowButton.textContent = "Rainbow OFF";
    }
})

let clearButton = document.querySelector("#clearButton")
clearButton.addEventListener("click", drawGrid)

let opacityButton = document.querySelector("#opacityToggle")
opacityButton.addEventListener("click", () => {
    opacityOn = !opacityOn
    if (opacityOn) {
        opacityButton.textContent = "Opacity ON";        
    } else {
        opacityButton.textContent = "Opacity OFF";
    }
})

let gridSize = 4; // Per side
let containerWidth = 960; // In pixels
let rainbowOn = false;
let opacityOn = false;

function drawGrid() {
    console.log(gridSize)
    etchContainer.replaceChildren()
    let numSquares = gridSize * gridSize;
    for (let i = 0; i < numSquares; i++) {        
        let etchSquare = document.createElement("div");
        etchSquare.classList.add("square")
        etchSquare.setAttribute("style", `flex-basis: ${containerWidth / gridSize}px;`)
        etchContainer.appendChild(etchSquare)
    }
}

// Handle the colors of the grid
function colorChange(event) {
    if (event.target.id === "etch-container") {
        return
    }

    function getRandomColor() {
        return Math.round(Math.random() * 255);
    }

    let target = document.elementFromPoint(event.clientX, event.clientY);
    if (opacityOn) {
        if (!target.classList.contains("triggered")) { // Tile has never been triggered
            target.style.opacity = 0.1; // Set opacity directly
        }
        else {
            if (Number(target.style.opacity) + 0.1 > 1) {
                target.style.opacity = 1;
            } else {
                target.style.opacity = Number(target.style.opacity) + 0.1;
            }
        }        
    } else {
        target.style.opacity = 1;
    }

    target.classList.add("triggered")

    if (rainbowOn) {
        target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    } else {
        target.style.backgroundColor = `black`;
    }


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
