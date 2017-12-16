var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var imageWidth = 48;
var imageHeight = 48;

const ROWS = Math.floor(window.innerHeight / imageHeight);
const COLS = Math.floor(window.innerWidth / imageWidth);

const backParams = [
  new Place("grass1", document.getElementById("grass1I"), false),
  new Place("grass2", document.getElementById("grass2I"), false),
  new Place("tree1",  document.getElementById("tree1I"),  true),
  new Place("tree2",  document.getElementById("tree2I"),  true),
  new Place("water1", document.getElementById("water1I"), false),
  new Place("water2", document.getElementById("water2I"), false)
];

const actorParams = [
  new Actor({
    name: "Knight",
    x: -1,
    y: -1,
    hp: 10,
    attack: 1,
    defend: 0,
    moves: 1,
    amount: 1,
    ally: true,
    image: document.getElementById("heroI")
  }),

  new Actor({
    name: "Goblin",
    x: -1,
    y: -1,
    hp: 1,
    attack: 1,
    defend: 0,
    moves: 1,
    amount: 5,
    ally: false,
    image: document.getElementById("goblin1I")
  }),

  new Actor({
    name: "Vampir",
    x: -1,
    y: -1,
    hp: 2,
    attack: 1,
    defend: 0,
    moves: 1,
    amount: 1,
    ally: false,
    image: document.getElementById("vampirI")
  })
];

var backMap = new Map(ROWS, COLS).init(backParams);
var actorMap = new ActorMap(ROWS, COLS).init(actorParams);
var counter = 0;

backMap.draw();
actorMap.draw();

createVirtualKeyboard();

playerStep();

window.requestAnimationFrame = (function(callback) {
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
})();

function playerStep() {
  steped = actorMap.alliesQueue[counter].dirMove(keyDowned());
  actorMap.animateDraw();

  setTimeout(function() {
    if (steped && ++counter >= actorMap.alliesQueue.length) {
      counter = 0;
      actorMap.updateQueues();
      requestAnimationFrame(enemyStep);
    } else {
      requestAnimationFrame(playerStep);
    }
  }, 500);
}

function enemyStep() {
  steped = actorMap.enemiesQueue[counter].cordMove(actorMap.alliesQueue[0]);

  setTimeout(function() {
    if (++counter >= actorMap.enemiesQueue.length) {
      counter = 0;
      actorMap.updateQueues();
      requestAnimationFrame(playerStep);
    } else {
      requestAnimationFrame(enemyStep);
    }
  }, 100);
}
