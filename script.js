/*jshint esversion: 6 */

// function downloadCanvas() {
//   const canvas = document.getElementById("my_canvas");
//   image = canvas.toDataURL();
//   let url = document.createElement("a");
//   url.download = "l-system-tree.png";
//   url.href = image;
//   url.click();
// }

const canvas = document.getElementById('main_canvas');
const ctx = canvas.getContext('2d');

const download_button = document.getElementById('download_button');
download_button.addEventListener('click', () => {
    let url = canvas.toDataURL();
    let temp = document.createElement('a');
    temp.download = 'tree.png';
    temp.href = url;
    temp.click();
    temp.remove();
});

const background_colorpicker = document.getElementById('background_colorpicker');
background_colorpicker.addEventListener('input', (event) => {
    let input_data = event.target;
    let new_color = input_data.value;
    canvas.style.backgroundColor = new_color;
});

function setup() {
  let width = 700, height = 700;
  ctx.save();
  canvas.width = width;
  canvas.height = height;
  ctx.restore();

  const background_colorpicker = document.getElementById('background_colorpicker');
  canvas.style.backgroundColor = background_colorpicker.value;
}
