function Actor(params) {
  this.id =     params.id,
  this.x =      params.x ? params.x : -1;
  this.y =      params.y ? params.y : -1;
  this.name =   params.name   ? params.name : "no name";
  this.hp =     params.hp     ? params.hp : 1;
  this.attack = params.attack ? params.attack : 1;
  this.defend = params.defend ? params.defend : 0;
  this.moves =  params.moves  ? params.moves : 1;
  this.amount = params.amount ? params.amount : 1;
  this.ally =   params.ally ? params.ally : false;
  this.image =  params.image;
  this.direction = 0;

  Object.defineProperty(this, "dx", {
    get: function() {
      return this.x * imageWidth;
    }
  });

  Object.defineProperty(this, "dy", {
    get: function() {
      return this.y * imageHeight;
    }
  })

  this.cordMove = function(aim) {
    var dx = aim.x - this.x;
  	var dy = aim.y - this.y;

  	if(Math.abs(dx) > Math.abs(dy)) {
  		if(dx < 0) {
  			aiStep = this.dirMove("left");
  		} else {
  			aiStep = this.dirMove("right");
  		}
  	} else {
  		if(dy < 0) {
  			aiStep = this.dirMove("up");
  		} else {
  			aiStep = this.dirMove("down");
  		}
  	}

  	return aiStep;
  }

  this.dirMove = function(direction) {
    switch (direction) {
      case "up":
        if (this.y - 1 >= 0 &&
          !backParams[backMap.map[this.y - 1][this.x]].isBlocked) {
            if (thereIs(this.x, this.y - 1)) {
              this.direction = 5;
              this.attackTo(this.x, this.y - 1);
            } else {
              this.direction = 1;
              // this.y--;
            }
            return true;
        }
        return false;

      case "down":
        if (this.y + 1 < ROWS  &&
          !backParams[backMap.map[this.y + 1][this.x]].isBlocked) {
            if (thereIs(this.x, this.y + 1)) {
              this.direction = 6;
              this.attackTo(this.x, this.y + 1);
            } else {
              this.direction = 2;
              // this.y++;
            }
            return true;
        }
        return false;

      case "left":
        if (this.x - 1 >= 0 &&
          !backParams[backMap.map[this.y][this.x - 1]].isBlocked) {
            if (thereIs(this.x - 1, this.y)) {
              this.direction = 7;
              this.attackTo(this.x - 1, this.y);
            } else {
              this.direction = 3;
              // this.x--;
            }
            return true;
        }
        return false;

      case "right":
        if (this.x + 1 < COLS &&
          !backParams[backMap.map[this.y][this.x + 1]].isBlocked) {
            if (thereIs(this.x + 1, this.y)) {
              this.direction = 8;
              this.attackTo(this.x + 1, this.y);
            } else {
              this.direction = 4;
              // this.x++;
            }
            return true;
        }
        return false;
    }
  }

  thereIs = function(x, y) {
    for (actor in actorMap.map) {
      if (actorMap.map[actor] != null) {
        if (x == actorMap.map[actor].x && y == actorMap.map[actor].y) {
          return true;
        }
      }
    }

    return false;
  }

  this.getParams = function() {
    return {
      id: this.id,
      name: this.name,
      x: this.x,
      y: this.y,
      hp: this.hp,
      attack: this.attack,
      defend: this.defend,
      moves: this.moves,
      amount: this.amount,
      ally: this.ally,
      image: this.image
    }
  }

  this.blink = function() {

  }

  this.attackTo = function(x, y) {
    victim = null;
    for (i in actorMap.map) {
      if (actorMap.map[i] != null) {
        if (actorMap.map[i].x == x && actorMap.map[i].y == y) {
          victim = actorMap.map[i];

          victim.hp -= this.attack - victim.defend;
          if (victim.hp <= 0) {
            actorMap.map[i] = null;
          }
        }
      }
    }
    console.log(this.name + " attack " + victim.name + ", hp = " + victim.hp)

  }
}
