let etchContainer = document.querySelector("#etch-container");

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    let etchSquare = document.createElement("div");
    etchSquare.classList.add("square")
    etchContainer.appendChild(etchSquare)
}
