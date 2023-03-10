
const container = document.querySelector('#container');
//------------------
function createGrid(height, width) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < height; i++) {
        const line = document.createElement('div');
        line.classList.add(`line`);
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('div');
            cell.classList.add(`cell`);
            cell.setAttribute('cellid', ('0' + i).slice(-2) + ('0' + j).slice(-2));
            line.appendChild(cell);
        }
        grid.appendChild(line);

    }

    container.appendChild(grid);
}

createGrid(16, 16);

//----------------
function changeCellColor(e) {
    const cellid = e.target.getAttribute('cellid');
    const cell = document.querySelector(`.cell[cellid="${cellid}"]`);
    // if (cell.classList.contains('colorChanged'))
    //     cell.setAttribute('style', 'background: black;');
    // else {
    //     cell.classList.add(`colorChanged`);
    //     cell.setAttribute('style', 'background: ' + randomRGBA() + ';');
    // }
    cell.setAttribute('style', 'background: ' + randomRGBA() + ';');
}
function randomRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', changeCellColor));

//------------------
function resizeGrid(e) {
    let size = prompt("Please enter Grid Size", 16);
    container.removeChild(document.querySelector('.grid'));
    createGrid(size, size);
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseenter', changeCellColor));

}
const btnSize = document.querySelector('.btnSize');
btnSize.addEventListener('click', resizeGrid);