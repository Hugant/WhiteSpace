function ActorMap(height, width) {
  this.map = {};

  this.init = function(params) {
    var currentId = 0;

    for (i in params) {
      for (j = 0; j < params[i].amount; j++) {
        do {
          x = Math.floor(Math.random() * width);
          y = Math.floor(Math.random() * height);
        } while (backParams[backMap.map[y][x]].isBlocked);

        this.map[currentId] = new Actor(params[i].getParams());
        this.map[currentId].id = currentId;
        this.map[currentId].x = x;
        this.map[currentId].y = y;

        currentId++;
      }
    }

    this.updateQueues();

    return this;
  }

  this.draw = function() {
    for (actor in this.map) {
      if (this.map[actor] != null) {
        ctx.drawImage(this.map[actor].image,
          this.map[actor].dx, this.map[actor].dy);
      }
    }
  }

  var loopCounter = 0;

  this.animateDraw = function(callback) {
    var pps = 0.05;
    var steps = 100 / (pps * 100);
    var hos = steps / 2;

    intervalId = setInterval(function() {
      if (loopCounter >= steps) {
        loopCounter = 0;

        for (i in actorMap.map) {
          if (actorMap.map[i] != null) {
            actorMap.map[i].direction = 0;
          }
        }

        clearInterval(intervalId);
        for (actor in actorMap.map) {
          if (actorMap.map[actor] != null) {
            actorMap.map[actor].x = Math.round(actorMap.map[actor].x);
            actorMap.map[actor].y = Math.round(actorMap.map[actor].y);
          }
          // console.log(actorMap.map[actor].dx + "_" + actorMap.map[actor].dy)
        }
        return true;
      }

      for (i in actorMap.map) {
        if (actorMap.map[i] != null) {
          switch(actorMap.map[i].direction) {
            case 1:
              actorMap.map[i].y -= pps;
              break;

            case 2:
              actorMap.map[i].y += pps;
              break;

            case 3:
              actorMap.map[i].x -= pps;
              break;

            case 4:
              actorMap.map[i].x += pps;
              break;

            case 5:
              if (loopCounter < hos) {
                actorMap.map[i].y -= pps;
              } else {
                actorMap.map[i].y += pps;
              }
              break;

            case 6:
              if (loopCounter < hos) {
                actorMap.map[i].y += pps;
              } else {
                actorMap.map[i].y -= pps;
              }
              break;

            case 7:
              if (loopCounter < hos) {
                actorMap.map[i].x -= pps;
              } else {
                actorMap.map[i].x += pps;
              }
              break;

            case 8:
              if (loopCounter < hos) {
                actorMap.map[i].x += pps;
              } else {
                actorMap.map[i].x -= pps;
              }
          }
        }


        // console.log(actorMap.map[i].dx + "_" + actorMap.map[i].dy)
      }

      backMap.draw();
      actorMap.draw();
      loopCounter++;
    }, 15);
  }

  // this.personStep = function() {
  //
  // }

  this.updateQueues = function() {
    this.alliesQueue = [];
    this.enemiesQueue = [];

    for (i in this.map) {
      if (this.map[i] != null) {
        if (this.map[i].ally) {
          this.alliesQueue.push(this.map[i]);
        } else {
          this.enemiesQueue.push(this.map[i]);
        }
      }
    }
  }
}
