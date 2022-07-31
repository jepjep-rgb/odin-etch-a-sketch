const gridContainer = document.querySelector('.sketchpad');
const resetButton = document.querySelector('.reset');

function changeColor() {
    this.style.backgroundColor = "black";
}

function clearGrid() {
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function resetGrid() {
    let newLength = prompt("Input new grid length (1-100):", 16);

    if (newLength !== null){
        newLength = parseInt(newLength);
        clearGrid();
        createGrid(newLength);
    }
}

function createGrid(length = 16) {
    let gridLength = length;
    for(let row = 1; row <= gridLength; row++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        for(let square = 1; square <= gridLength; square++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid');
            gridItem.addEventListener('mouseover', changeColor);
            rowContainer.appendChild(gridItem);
        }
        gridContainer.appendChild(rowContainer);
    }
}

resetButton.addEventListener('click', resetGrid);

createGrid();