let trigger = false;
let color = document.getElementById("colorpicker").value;
let erase = false;
let rainbowToggle = false;

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
            if (trigger && !erase && !rainbowToggle) {
                square.style.backgroundColor = `${color}`;
            } else if (trigger && erase) {
                square.style.backgroundColor = 'white';
            } else if (trigger && rainbowToggle) {
                square.style.backgroundColor = rainbowColor();
            }
        });
        square.addEventListener('click', () => {
            if (!erase) {
                square.style.backgroundColor = `${color}`;
            } else if (erase) {
                square.style.backgroundColor = `white`;
            } else if (rainbowToggle) {
                square.style.backgroundColor = rainbowColor();
            }
        })
        square.addEventListener('touchmove', () => {
            if (!erase) {
                square.style.backgroundColor = `${color}`;
            } else if (erase) {
                square.style.backgroundColor = `white`;
            } else if (rainbowToggle) {
                square.style.backgroundColor = rainbowColor();
            }
        })
        row.appendChild(square);
    }
    return row;
}
const colorChange = () => {
    if (!erase) {
        this.style.backgroundColor = `${color}`;
    } else {
        this.style.backgroundColor = `white`;
    }
}
document.querySelector('#reset').addEventListener('click', () => {
    const container = document.querySelector('.gridcontainer');
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    generateGrid(document.getElementById("sizeSlider").value);
})
document.addEventListener('mousedown', () => {
    trigger = true;
});
document.addEventListener('mouseup', () => {
    trigger = false;
})
document.addEventListener('touchmove', () => {
    trigger = true;
})
const rainbowColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const rangeSlider = document.getElementById("sizeSlider");
rangeSlider.addEventListener('input', () => {
    document.getElementById("sliderindicator").textContent = rangeSlider.value + " x " + rangeSlider.value;
})
const colorPicker = document.getElementById("colorpicker");
colorPicker.addEventListener('input', () => {
    if (!erase) {
        color = colorPicker.value;
    }
})
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => {
    if (erase) {
        erase = false;
        eraser.classList.remove('selected');
    } else {
        erase = true;
        eraser.classList.add('selected');
    };
})
const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', () => {
    if (rainbowToggle) {
        rainbowToggle = false;
        rainbow.classList.remove('selected');
    } else {
        rainbowToggle = true;
        rainbow.classList.add('selected');
    };
})

generateGrid(16);
