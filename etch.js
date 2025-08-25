let etchContainer = document.querySelector("#etch-container");
etchContainer.addEventListener("mouseover", colorChange);

let gridSize = 4; // Per side
let numSquares = gridSize * gridSize;
let containerWidth = 960; // In pixels

// Make the grid
for (let i = 0; i < numSquares; i++) {
    let etchSquare = document.createElement("div");
    etchSquare.classList.add("square")
    etchSquare.setAttribute("style", `flex-basis: ${containerWidth/gridSize}px;`)            
    etchContainer.appendChild(etchSquare)
}

function colorChange(event) {    
    let target = document.elementFromPoint(event.clientX, event.clientY);   
    target.style.backgroundColor = "green";
}