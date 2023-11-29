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
function createGrid(){
    for (let i=0; i<100; i++){
        let square = createCells(i+1);

        // Punto 6 readme.md
        square.addEventListener('click', function(){
            this.classList.toggle('square-blue');
            console.log(this);
        })        
        
        grid.appendChild(square);
    }
}

// Punto 5 readme.md
document.getElementById('button').addEventListener('click', function(){
    createGrid();
})