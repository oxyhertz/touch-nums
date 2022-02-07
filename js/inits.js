function shuffle(items) {
  var randIdx, keep, i;
  for (i = items.length - 1; i > 0; i--) {
    randIdx = getRandomInt(0, items.length - 1);

    keep = items[i];
    items[i] = items[randIdx];
    items[randIdx] = keep;
  }
  return items;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function easyMode() {
  NUMS_AMMOUNT = 9;
  init();
}

function mediumMode() {
  NUMS_AMMOUNT = 16;
  init();
}
function hardMode() {
  NUMS_AMMOUNT = 25;
  init();
}
