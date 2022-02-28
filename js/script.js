const generateGrid = (nr) => {
    if (nr > 100 || nr < 16) {
        return alert("Please choose a size between 16-100");
    } else if (isNaN(nr)) {
        return alert("Please insert a number between 16-100");
    }
    for (let i = 0; i < nr; i++) {
        const row = generateRow(nr);
        document.querySelector('.gridcontainer').appendChild(row);
    }
}

const generateRow = (nr) => {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < nr; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    return row;
}
generateGrid(16);
document.querySelector('#reset').addEventListener('click', () => {
    const container = document.querySelector('.gridcontainer');
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    generateGrid(prompt('How many squares do you want? Minimum size is 16, maximum is 100'));
})
