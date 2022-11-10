/*jshint esversion: 6 */

// generate main_canvas
const canvas = document.getElementById('main_canvas');
const ctx = canvas.getContext('2d');

// generate background_canvas
const background = document.getElementById('background_canvas');
const background_ctx = background.getContext('2d');

// generate all html elements
const download_button = document.getElementById('download_button');
const generate_button = document.getElementById('generate_button');
const background_colorpicker = document.getElementById('background_colorpicker');
const width = document.getElementById('width');
const height = document.getElementById('height');

function changeCanvasSize() {
  let w = width.value, h = height.value;
  canvas.width = w;
  canvas.height = h;
  background.width = w;
  background.height = h;
}

// setup canvas size(width, height) and backgroundColor
function setup() {
  width.dispatchEvent(change_event);
  height.dispatchEvent(change_event);
  background_colorpicker.dispatchEvent(input_event);
}
