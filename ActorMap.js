function ActorMap(height, width) {
  this.map = new Array();

  this.init = function(params) {
    for (i = 0; i < height; i++) {
      row = new Array(width);
      row.fill(null);
      this.map.push(row);
    }

    for (i = 0; i < params.length; i++) {
      for (j = 0; j < params[i].amount; j++) {
        do {
          x = Math.floor(Math.random() * width);
          y = Math.floor(Math.random() * height);
        } while (backParams[backMap.map[y][x]].isBlocked);

        this.map[y][x] = params[i];
      }
    }

    return this;
  }

  this.draw = function() {
    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        if (this.map[i][j] != null) {
          ctx.drawImage(this.map[i][j].image, j * imageWidth, i * imageHeight);
        }
      }
    }
  }
}
