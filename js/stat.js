'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = -150;

var GAP = 10;

var ELM_DISTANCE = 50;

var TEXT_COLOR = '#000';

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  //Отрисовка облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  //Отрисовка текста результата
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText("Ура вы победили!", 240, 30);
  ctx.fillText("Список результатов:", 225, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var PLAYER_NAME = names[i];
    var PLAYER_TIME = Math.round(times[i]);

    ctx.fillStyle = 'rgba(255, 0, 0,' + Math.random(i) + ')';
    ctx.fillRect((CLOUD_WIDTH / 2 - ELM_DISTANCE) + (COLUMN_WIDTH + ELM_DISTANCE) * i, CLOUD_HEIGHT - COLUMN_WIDTH + GAP, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(PLAYER_TIME, (CLOUD_WIDTH / 2 - ELM_DISTANCE) + (COLUMN_WIDTH + ELM_DISTANCE) * i, (CLOUD_HEIGHT / 2 - GAP) - ELM_DISTANCE);
    ctx.fillText(PLAYER_NAME, (CLOUD_WIDTH / 2 - ELM_DISTANCE) + (COLUMN_WIDTH + ELM_DISTANCE) * i, CLOUD_HEIGHT - GAP );

  }
}
