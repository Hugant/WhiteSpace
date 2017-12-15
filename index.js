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
  new Actor("Goblin", 1, 1, 0, 1, 5, document.getElementById("goblin1I")),
  new Actor("Hugant", 10, 1, 0, 1, 1, document.getElementById("heroI"))
];

var backMap = new Map(ROWS, COLS).init(backParams);
var actorMap = new ActorMap(ROWS, COLS).init(actorParams);

backMap.draw();
actorMap.draw();

setInterval(function () {
  for (i = 0; i < ) {
    console.log(id);
    if (actorParams[id] != null && actorMap[id].name = "Hugant") {
      if(isKeyDown("LEFT")) {
        actorMap[id].dirMove("left");
      }
      if(isKeyDown("UP")) {
        actorMap[id].dirMove("left");
      }
      if(isKeyDown("RIGHT")) {
        actorMap[id].dirMove("left");
      }
      if(isKeyDown("DOWN")) {
        actorMap[id].dirMove("left");
      }
    }
  }
}, 500);
