function Tile(position, color, numberCount) {
  this.x                = position.x;
  this.y                = position.y;
  this.color            = color || 'Green';
  this.numberCount   	= numberCount || 1;
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    color: this.color,
	numberCount : this.numberCount
  };
};
