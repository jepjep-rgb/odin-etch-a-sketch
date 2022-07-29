const gridContainer = document.querySelector('.sketchpad');

function createGrid() {
    let gridLength = 16;
    for(let row = 1; row <= gridLength; row++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        for(let square = 1; square <= gridLength; square++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid');
            rowContainer.appendChild(gridItem);
        }
        gridContainer.appendChild(rowContainer);
    }
}

createGrid();