function Map(height, width) {
  this.map = new Array();

  this.init = function(params) {
    for (i = 0; i < height; i++) {
      row = new Array(width);
      for (j = 0; j < width; j++) {
        row[j] = Math.floor(Math.random() * params.length);
      }
      this.map.push(row);
    }
    return this;
  }

  this.draw = function() {
    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        ctx.drawImage(
          backParams[this.map[i][j]].image, j * imageWidth, i * imageHeight);
      }
    }
  }
}
