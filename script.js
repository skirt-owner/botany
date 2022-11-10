/*jshint esversion: 6 */
const canvas = document.getElementById('main_canvas');
const ctx = canvas.getContext('2d');

const background = document.getElementById('background_canvas');
const background_ctx = background.getContext('2d');

// event to download canvas as picture
const download_button = document.getElementById('download_button');
download_button.addEventListener('click', () => {
    const temp_canvas = document.createElement('canvas');
    temp_canvas.width = canvas.width;
    temp_canvas.height = canvas.height;
    const temp_ctx = temp_canvas.getContext('2d');

    temp_ctx.drawImage(background, 0, 0);
    temp_ctx.drawImage(canvas, 0, 0);

    let url = temp_canvas.toDataURL();
    let temp_image = document.createElement('a');
    temp_image.download = 'tree.png';
    temp_image.href = url;
    temp_image.click();
    temp_image.remove();
    temp_canvas.remove();
});

// event to generate new l-system
// whenever user clicks 'generate' button
const generate_button = document.getElementById('generate_button');
generate_button.addEventListener('click', () => {
    draw();
});

// event to change canvas backgroundColor
// whenever user send new input
const background_colorpicker = document.getElementById('background_colorpicker');
background_colorpicker.addEventListener('input', (event) => {
    let input_data = event.target;
    let new_color = input_data.value;
    background_ctx.fillStyle = new_color;
    background_ctx.fillRect(0, 0, canvas.width, canvas.height);
});

function draw() {

}

// setup canvas size(width, height) and backgroundColor
function setup() {
  let width = 700, height = 700;
  canvas.width = width;
  canvas.height = height;

  background.width = width;
  background.height = height;

  background_ctx.fillStyle = background_colorpicker.value;
  background_ctx.fillRect(0, 0, canvas.width, canvas.height);
}
