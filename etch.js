let etchContainer = document.querySelector("#etch-container");
etchContainer.addEventListener("mouseover", colorChange);


let gridSizeButton = document.querySelector("#setSize");
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


let gridSize = 4; // Per side
let containerWidth = 960; // In pixels
let rainbowOn = false;

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
    function getRandomColor() {
        return Math.round(Math.random() * 255);
    }

    let target = document.elementFromPoint(event.clientX, event.clientY);
    if (rainbowOn) {
        target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    } else {
        target.style.backgroundColor = `black`;
    }
}


function shadeColor(square) {
    let style = getComputedStyle(square);
    let rgb = style.backgroundColor.match(/\d+/g);
    let newRGB = [];
    rgb.forEach((color) => {
        color = parseInt(color * 90 / 100);
        color = (color > 0) ? color : 0;
        newRGB.push(color);
    })
    square.setAttribute('style', 'background-color: rgb(' + newRGB[0] + ', ' + newRGB[1] + ', ' + newRGB[2] + ')');
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
