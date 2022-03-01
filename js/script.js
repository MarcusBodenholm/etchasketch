const generateGrid = (nr) => {
    if (nr > 100 || nr < 16 || isNaN(nr)) {
        return alert("Please choose a size between 16-100");
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
        square.addEventListener('mouseenter', () => {
            if (trigger) {
                square.style.backgroundColor = `${color}`;
            }
        });
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
let color = '';
let trigger = false;
const buttons = document.querySelectorAll('.colorchoice');
buttons.forEach(button => button.addEventListener('click', () => {
    let value = button.value;
    color = value;
}))
document.addEventListener('mousedown', () => {
    trigger = true;
});
document.addEventListener('mouseup', () => {
    trigger = false;
})
/* const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "red";
})) */