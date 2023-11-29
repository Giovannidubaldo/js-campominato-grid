// Punto 1 readme.md
function createCells(num){
    let cell = document.createElement('div');
    cell.classList.add('square')

    // Punto 4 readme.md
    cell.innerHTML = num;

    return cell;
}

let grid = document.getElementById('grid');

// Punto 3 readme.md
for (let i=0; i<100; i++){
    let square = createCells(i+1);
    grid.appendChild(square);
}