let grid, container;

window.onload = () => {
    grid = document.querySelector('.grid');
    container = document.querySelector('.container');
    console.log(grid, container);
    makeGrid();
}

function makeGrid() {
    console.log('tushar');
    for (let i = 0; i < 400; i++) {
        let tmpDiv = document.createElement("div");
        tmpDiv.addEventListener('click', clicked);
        tmpDiv.classList.add('grid-item');
        tmpDiv.classList.add('clicked');
        grid.appendChild(tmpDiv);
        console.log(tmpDiv)

    }
}

function clicked() {
    this.classList.toggle('clicked');
}