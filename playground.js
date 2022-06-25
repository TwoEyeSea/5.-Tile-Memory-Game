// playzone
// function to switch from true to false - the thought is to toggle visibility of the imagesin the tiles

const tileA_div = document.querySelector("#tile-A");
function TileObject(tile) {
  this.tile = tile;
  this.tileId = null;
  // this.isSelected = false;
  this.isClickable = true;
  this.comparing = false;
  this.imageObject = null;

  this.init = function () {
    let initValues = {};
    for (let property in this) {
      if (this.hasOwnProperty(property) && property != "originalValues") {
        initValues[property] = this[property];
        console.log("I am indeed a functioning function :)");
      }
    }
    this.initValues = initValues;
  };
  this.reset = function () {
    for (let property in this.initValues) {
      this[property] = this.initValues[property];
      console.log("i'm a functional function after all!");
    }
  };
}

const tile_A_Object = new TileObject(tileA_div);
