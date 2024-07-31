//JavaScript code to wait for the DOM content to be loaded using DOMContentLoaded event.
document.addEventListener('DOMContentLoaded', function () {
  //selected the color-box and change-color-btn elements using document.getElementById().
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');
  // function, called getRandomColor(), which generates a random color. Use hexadecimal or RGB values.
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  //event listener to the change-color-btn element. When clicked, the event listener should trigger a function that changes the background color of the color-box.
  changeColorBtn.addEventListener('click', function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
//end.
