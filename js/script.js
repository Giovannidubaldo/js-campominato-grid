// Punto 1 readme.md
function createCells(num){
    let cell = document.createElement('div');
    cell.classList.add('square')

    return cell;
}

let grid = document.getElementById('grid');

// Punto 3 readme.md
for (let i=0; i<100; i++){
    let square = createCells();

    
    grid.appendChild(square);
}