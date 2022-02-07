"use strict";

var NUMS_AMMOUNT = 9;
var gNums;
var gNum;
var gTimer;
var gInterval;

// global Els
var currNumEl = document.querySelector(".current-num");
var elNewGameBtn = document.querySelector(".new-game");

function init() {
  var gameTimeEl = document.querySelector(".game-time");
  gNums = shuffle(createNums(NUMS_AMMOUNT));
  gNum = 1;
  gTimer = 0;
  currNumEl.innerText = "1";
  gameTimeEl.innerText = "⌛";
  elNewGameBtn.classList.remove("game-end");

  if (gInterval) {
    clearInterval(gInterval);
    gInterval = null;
  }
  renderBoard(gNums);
}

function createNums(numbers) {
  var nums = [];
  for (var i = 1; i <= numbers; i++) {
    nums.push(i);
  }
  return nums;
}

//cellClicked
function cellClicked(el) {
  if (el.innerText === currNumEl.innerText) {
    el.classList.add("clicked");

    currNumEl.innerText = gNum < NUMS_AMMOUNT ? ++gNum : gNum;
  }

  if (el.innerText === "1" && !gTimer) {
    gInterval = setInterval(runTime, 10);
  }
  if ((el.innerText === "" + NUMS_AMMOUNT) & el.classList.contains("clicked")) {
    elNewGameBtn.classList.add("game-end");
    clearInterval(gInterval);
  }
}

// render the array in table
function renderBoard(nums) {
  var boardSize = Math.sqrt(nums.length);
  var strHTML = "";
  for (var i = 0; i < boardSize; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < boardSize; j++) {
      var currCell = nums.pop();
      strHTML += `<td onclick="cellClicked(this)" class="">${currCell}</td>`;
    }
    strHTML += "</tr>";
  }
  var elBoard = document.querySelector(".board");
  elBoard.innerHTML = strHTML;
}

function runTime() {
  var timeEl = document.querySelector(".game-time");
  timeEl.innerText = (++gTimer / 100).toFixed(3);
}
