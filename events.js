const click_event = new Event('click', {
  bubble: true,
  cancelable: true
});

const input_event = new Event('input', {
  bubble: true,
  cancelable: true
});

const change_event = new Event('change', {
  bubble: true,
  cancelable: true
});

// event to download canvas as picture
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

// event to change canvas backgroundColor
// whenever user send new input
background_colorpicker.addEventListener('input', (event) => {
    let input_data = event.target;
    let new_color = input_data.value;
    background_ctx.fillStyle = new_color;
    background_ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// event to generate new l-system
// whenever user clicks 'generate' button
generate_button.addEventListener('click', () => {
    width.dispatchEvent(change_event);
    height.dispatchEvent(change_event);
    background_colorpicker.dispatchEvent(input_event);
    draw();
});

width.addEventListener('change', (event) => {
  let input_data = event.target;
  let w = input_data.value;
  canvas.width = w;
  background.width = w;
});

height.addEventListener('change', (event) => {
  let input_data = event.target;
  let wheight = input_data.value;
  canvas.height = wheight;
  background.height = wheight;
});
