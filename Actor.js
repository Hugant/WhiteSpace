function Actor(name, hp, attack, defend, moves, amount, image) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.defend = defend;
  this.moves = moves;
  this.amount = amount;
  this.image = image;

  this.cordMove = function (x, y) {
    console.log(0);
  }

  this.dirMove = function(direction) {
    console.log(direction);
    switch (direction) {
      case "up":
        break;

      case "down":

        break;

      case "left":

        break;

      case "right":

        break;
    }
  }
}
