// get the grid container and item
const container = document.getElementById("grid-container");

function createGrid(rows) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (i = 0; i < (rows * rows); i++) {
        let gridItem = document.createElement("div");
        // gridItem.innerText = (i + 1);
        container.appendChild(gridItem).className = "grid-item";
    }
}

createGrid(64);