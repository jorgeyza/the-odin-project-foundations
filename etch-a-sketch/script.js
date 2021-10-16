let gridSize = 16;
let normalColor = '#000000';
let colorMode = 'normal';

const gridSelector = document.querySelector('.grid');
const rangeSelector = document.querySelector('.input');
const labelSelector = document.querySelector('.label__grid-size');
const colorPickerSelector = document.querySelector('.color-circle');
const buttonsSelector = document.querySelectorAll('.button');
const normalButton = document.querySelector(`.button[data-action="normal"]`);
const rainbowButton = document.querySelector(`.button[data-action="rainbow"]`);
const lightenButton = document.querySelector(`.button[data-action="lighten"]`);
const darkenButton = document.querySelector(`.button[data-action="darken"]`);
const resetButton = document.querySelector(`.button[data-action="reset"]`);

rangeSelector.addEventListener('change', () => createGrid(gridSize));
colorPickerSelector.addEventListener('change', function () {
  normalColor = colorPickerSelector.value;
});

buttonsSelector.forEach((button) => {
  button.addEventListener('click', function () {
    switch (button.dataset.action) {
      case 'normal':
        colorMode = 'normal';
        normalButton.classList.add('active');
        rainbowButton.classList.remove('active');
        lightenButton.classList.remove('active');
        darkenButton.classList.remove('active');
        break;
      case 'rainbow':
        colorMode = 'rainbow';
        normalButton.classList.remove('active');
        rainbowButton.classList.add('active');
        lightenButton.classList.remove('active');
        darkenButton.classList.remove('active');
        break;
      case 'lighten':
        colorMode = 'lighten';
        normalButton.classList.remove('active');
        rainbowButton.classList.remove('active');
        lightenButton.classList.add('active');
        darkenButton.classList.remove('active');
        break;
      case 'darken':
        colorMode = 'darken';
        normalButton.classList.remove('active');
        rainbowButton.classList.remove('active');
        lightenButton.classList.remove('active');
        darkenButton.classList.add('active');
        break;
      case 'reset':
        const gridElementsSelector =
          document.querySelectorAll('.grid__element');
        gridElementsSelector.forEach((gridElement) => {
          gridElement.style.backgroundColor = '#ffffff';
          gridElement.style.borderColor = '#eeeeee';
        });
        break;
      default:
        return;
    }
  });
});

function changeColor(e) {
  if (colorMode === 'rainbow') {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const rainbowColor = `rgb(${R}, ${G}, ${B})`;
    e.target.style.backgroundColor = rainbowColor;
    e.target.style.borderColor = rainbowColor;
  } else if (colorMode === 'normal') {
    e.target.style.backgroundColor = normalColor;
    e.target.style.borderColor = normalColor;
  } else if (colorMode === 'lighten' || colorMode === 'darken') {
    const currentColor = e.target.style.backgroundColor;
    var matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    var match = matchColors.exec(currentColor);
    if (match !== null) {
      const R = parseInt(match[1]);
      const G = parseInt(match[2]);
      const B = parseInt(match[3]);
      if (colorMode === 'lighten') {
        const lightenedColor = `rgb(${R + 20}, ${G + 20}, ${B + 20})`;
        e.target.style.backgroundColor = lightenedColor;
        e.target.style.borderColor = lightenedColor;
      }

      if (colorMode === 'darken') {
        const darkenedColor = `rgb(${R - 20}, ${G - 20}, ${B - 20})`;
        e.target.style.backgroundColor = darkenedColor;
        e.target.style.borderColor = darkenedColor;
      }
    }
  }
}

function createGrid() {
  gridSize = rangeSelector.value;
  labelSelector.textContent = `${gridSize}x${gridSize}`;
  gridSelector.innerHTML = '';
  gridSelector.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridSelector.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#ffffff';
    div.classList.add('grid__element');
    div.addEventListener('mouseenter', (e) => changeColor(e));
    gridSelector.appendChild(div);
  }
}

createGrid();
