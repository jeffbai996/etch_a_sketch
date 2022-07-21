// get the grid container and item
const container = document.getElementById("grid-container");

function createGrid(rows) {
    const existingGrid = document.querySelectorAll('.grid-item');
    existingGrid.forEach(grid => {
        grid.remove();
    })
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', rows);
    for (i = 0; i < (rows * rows); i++) {
        let gridItem = document.createElement("div");
        gridItem.addEventListener("mouseover", function(){
            gridItem.style.backgroundColor = 'black';
        })
        container.appendChild(gridItem).className = "grid-item";
    }
}

// create starting 16x16 grid
createGrid(32);