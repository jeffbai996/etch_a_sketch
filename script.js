// get the grid container and item
const container = document.getElementById("grid-container");
// set default value for the reset button if user does not change canvas size
let newSize = 16;

// create a grid 
function createGrid(rows) {
    // remove grid if one exists
    const existingGrid = document.querySelectorAll('.grid-item');
    existingGrid.forEach(grid => {grid.remove()});
    // set grid nrow and ncol
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    // generate grid items with event listener and append to container
    for (i = 0; i < (rows * rows); i++) {
        let gridItem = document.createElement("div");
        gridItem.addEventListener("mouseover", function(){
            gridItem.style.backgroundColor = 'black';
        })
        container.appendChild(gridItem).className = "grid-item";
    }
}

// change canvas size
function changeSize() {
    newSize = prompt("Enter the desired number of cells per row/column: ");
    while (newSize <= 0 || newSize >= 100 || isNaN(newSize)) {
        newSize = prompt("Error - Please enter a value between 1 and 100:");
    }
    createGrid(newSize);
}

// reset canvas with the last specified size
function resetCanvas() {
    createGrid(newSize);
}

// create default grid of 16x16
createGrid(16);