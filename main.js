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
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const setColorTo = function (box, color) {
    box.style.backgroundColor = color;
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

// Main
const correctColor = getRandomColor();
const randomIndex = Math.floor(Math.random() * colorBoxes.length);
const colorBoxToGuess = colorBoxes[randomIndex];

activateDisabled(checkbox);
activateDisabled(submitBtn);

setColorTo(correctColorBox, correctColor);

colorBoxes.forEach((box) => {
    if (box !== colorBoxToGuess) {
        setColorTo(box, getRandomColor());
    }
});

setColorTo(colorBoxToGuess, correctColor);
console.log(
    colorBoxToGuess.style.backgroundColor ===
        correctColorBox.style.backgroundColor
);

colorBoxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (box === colorBoxToGuess) {
            alert('You are human!');
            toggleDisabled(checkbox);
            toggleDisabled(submitBtn);
            hideElement(colorBoxesContainer);
        } else {
            alert('Please verify that you are human');
            reloadWindow();
        }
    });
});
