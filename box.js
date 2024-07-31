//JavaScript code to wait for the DOM content to be loaded using DOMContentLoaded event.
document.addEventListener('DOMContentLoaded', function () {
  // Select the color-box and change-color-btn elements using document.getElementById().
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');

  // Function that generates a random integer between 0 and max (inclusive).
  function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  // Function that generates a random color in RGB format.
  function getRandomColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Add an event listener to the change-color-btn element.
  // When clicked, it changes the background color of the color-box.
  changeColorBtn.addEventListener('click', function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
//end.
