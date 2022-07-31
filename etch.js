const gridContainer = document.querySelector('.sketchpad');
const resetButton = document.querySelector('.reset');

function changeColor() {
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);

    console.log(this.style.backgroundColor);
    if (this.style.backgroundColor === ''){
        this.style.backgroundColor = `rgba(${R},${G},${B},.1)`;
    } else {
        let bgColor = window.getComputedStyle(this).backgroundColor;
        // Create string array composed of the actual rgba values
        let rgb = bgColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
        
        for (let i in rgb) rgb[i] = parseFloat(rgb[i]);
        if (rgb[3] < 1) rgb[3] += .1;

        this.style.backgroundColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgb[3]})`
    }
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