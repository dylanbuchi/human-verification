// Functions
const deactivateDisabled = function (element) {
    element.disabled = false;
};

const activateDisabled = function (element) {
    element.disabled = true;
};

const toggleDisabled = function (element) {
    if (element.disabled) {
        deactivateDisabled(element);
    } else {
        activateDisabled(element);
    }
};

const getRandomColor = function () {
    return `#${((Math.random() * 0xffffff) << 0)
        .toString(16)
        .padStart(6, '0')}`;
};

const setColorTo = function (box, color) {
    box.style.background = color;
};

const reloadWindow = function () {
    this.location.reload();
};

const hideElement = function (element) {
    element.style.display = 'none';
};

// DOM variables
const submitBtn = document.querySelector('button');
const checkbox = document.getElementById('checkbox');
const correctColorBox = document.querySelector('.correct-color-box');
const colorBoxes = document.querySelectorAll('.color-box');
const colorBoxesContainer = document.querySelector('main');
const h1Element = document.querySelector('h1');

// Main
const correctColor = getRandomColor();
const randomIndex = Math.floor(Math.random() * colorBoxes.length);
const colorBoxToGuess = colorBoxes[randomIndex];

activateDisabled(checkbox);
activateDisabled(submitBtn);

setColorTo(correctColorBox, correctColor);

colorBoxes.forEach((box) => {
    setColorTo(box, getRandomColor());
});

setColorTo(colorBoxToGuess, correctColor);

colorBoxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (box === colorBoxToGuess) {
            alert('You are human!');
            toggleDisabled(checkbox);
            toggleDisabled(submitBtn);
            hideElement(colorBoxesContainer);
            hideElement(h1Element);
        } else {
            alert('Please verify that you are human');
            reloadWindow();
        }
    });
});
