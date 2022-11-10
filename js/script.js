const body = document.getElementsByTagName('body')[0];

const main = document.createElement('main');
main.classList.add('main');
body.appendChild(main);

const canvas_container = document.createElement('div');
canvas_container.classList.add('main-canvas-container');
canvas_container.id = 'canvas_container';
main.appendChild(canvas_container);

const main_canvas = document.createElement('canvas');
main_canvas.classList.add('main-canvas');
main_canvas.id = 'main_canvas';
canvas_container.appendChild(main_canvas);

const background_canvas = document.createElement('canvas');
background_canvas.classList.add('background-canvas');
background_canvas.id = 'background_canvas';
canvas_container.appendChild(background_canvas);

const options_container = document.createElement('div');
options_container.classList.add('main-options-container');
options_container.classList.add('options');
options_container.id = 'options_container';
main.appendChild(options_container);

const main_list = document.createElement('ul');
main_list.classList.add('main-variable-list');
main_list.classList.add('list');
main_list.classList.add('variable-list');
options_container.appendChild(main_list);

const list_item1 = document.createElement('li');
list_item1.classList.add('main-list-item');
list_item1.classList.add('list-item');
main_list.appendChild(list_item1);

const width_input = document.createElement('input');
width_input.classList.add('size-input');
width_input.classList.add('width');
width_input.id = 'width';
width_input.type = 'number';
width_input.value = 500;
width_input.min = 100, width_input.max = 3000
list_item1.appendChild(width_input);

const main_text1 = document.createElement('span');
main_text1.classList.add('main-text');
main_text1.append('w');
list_item1.appendChild(main_text1);

const height_input = document.createElement('input');
height_input.classList.add('size-input');
height_input.classList.add('height');
height_input.id = 'height';
height_input.type = 'number';
height_input.value = 500;
height_input.min = 100, height_input.max = 3000
list_item1.appendChild(height_input);

const main_text2 = document.createElement('span');
main_text2.classList.add('main-text');
main_text2.append('h');
list_item1.appendChild(main_text2);

const list_item2 = document.createElement('li');
list_item2.classList.add('main-list-item');
list_item2.classList.add('list-item');
main_list.appendChild(list_item2);

const background_colorpicker_input = document.createElement('input');
background_colorpicker_input.classList.add('color-input');
background_colorpicker_input.classList.add('background-colorpicker');
background_colorpicker_input.id = 'background_colorpicker';
background_colorpicker_input.type = 'color';
background_colorpicker_input.value = "#808080";
list_item2.appendChild(background_colorpicker_input);

const main_text3 = document.createElement('span');
main_text3.classList.add('main-text');
main_text3.append('background colorpicker');
list_item2.appendChild(main_text3);

const list_item3 = document.createElement('li');
list_item3.classList.add('main-list-item');
list_item3.classList.add('list-item');
main_list.appendChild(list_item3);

const flowers_colorpicker_input = document.createElement('input');
flowers_colorpicker_input.classList.add('color-input');
flowers_colorpicker_input.classList.add('flowers-colorpicker');
flowers_colorpicker_input.id = 'flowers_colorpicker';
flowers_colorpicker_input.type = 'color';
flowers_colorpicker_input.value = "#ac559e";
list_item3.appendChild(flowers_colorpicker_input);

const main_text4 = document.createElement('span');
main_text4.classList.add('main-text');
main_text4.append('flowers colorpicker');
list_item3.appendChild(main_text4);

const list_item4 = document.createElement('li');
list_item4.classList.add('main-list-item');
list_item4.classList.add('list-item');
main_list.appendChild(list_item4);

const leaves_colorpicker_input = document.createElement('input');
leaves_colorpicker_input.classList.add('color-input');
leaves_colorpicker_input.classList.add('leaves-colorpicker');
leaves_colorpicker_input.id = 'leaves_colorpicker';
leaves_colorpicker_input.type = 'color';
leaves_colorpicker_input.value = "#439d67";
list_item4.appendChild(leaves_colorpicker_input);

const main_text5 = document.createElement('span');
main_text5.classList.add('main-text');
main_text5.append('leaves colorpicker');
list_item4.appendChild(main_text5);

const list_item5 = document.createElement('li');
list_item5.classList.add('main-list-item');
list_item5.classList.add('list-item');
main_list.appendChild(list_item5);

const trunk_colorpicker_input = document.createElement('input');
trunk_colorpicker_input.classList.add('color-input');
trunk_colorpicker_input.classList.add('trunk-colorpicker');
trunk_colorpicker_input.id = 'trunk_colorpicker';
trunk_colorpicker_input.type = 'color';
trunk_colorpicker_input.value = "#7a4925";
list_item5.appendChild(trunk_colorpicker_input);

const main_text6 = document.createElement('span');
main_text6.classList.add('main-text');
main_text6.append('trunk colorpicker');
list_item5.appendChild(main_text6);

const buttons_container = document.createElement('div');
buttons_container.classList.add('buttons');
buttons_container.classList.add('main-buttons-container');
buttons_container.id = 'buttons_container';
options_container.appendChild(buttons_container);

const generate_button_button = document.createElement('button');
generate_button_button.classList.add('main-generate-button');
generate_button_button.classList.add('button');
generate_button_button.classList.add('generate-button');
generate_button_button.type = 'button';
generate_button_button.id = 'generate_button';
generate_button_button.append('generate');
buttons_container.appendChild(generate_button_button);

const download_button_button = document.createElement('button');
download_button_button.classList.add('main-download-button');
download_button_button.classList.add('button');
download_button_button.classList.add('download-button');
download_button_button.type = 'button';
download_button_button.id = 'download_button';
download_button_button.append('download');
buttons_container.appendChild(download_button_button);
