// Define html elements as constants for javascript
const tileA = document.querySelector("#tile-A");
const tileB = document.querySelector("#tile-B");
const tileC = document.querySelector("#tile-C");
const tileD = document.querySelector("#tile-D");
const tileE = document.querySelector("#tile-E");
const tileF = document.querySelector("#tile-F");

// Tile Objects
const tile_A_Object = new TileObject(tileA);
const tile_B_Object = new TileObject(tileB);
const tile_C_Object = new TileObject(tileC);
const tile_D_Object = new TileObject(tileD);
const tile_E_Object = new TileObject(tileE);
const tile_F_Object = new TileObject(tileF);

// Tile comparison Object
const comparingTiles = {
  toCompare: 0,
  tile1: null,
  tile2: null,
};

// Arrays
const imageArray = ["cat", "cat", "dog", "dog", "ocelot", "ocelot"];
// Image Array
const resetArray = imageArray;

// Functions
// function to determine which tile is being selected
function determineTile() {
  tileA.addEventListener("click", () => {
    if (tile_A_Object.isClickable) {
      assignImage(tile_A_Object);
    }
  });
  tileB.addEventListener("click", () => {
    if (tile_B_Object.isClickable) {
      assignImage(tile_B_Object);
    }
  });
  tileC.addEventListener("click", () => {
    if (tile_C_Object.isClickable) {
      assignImage(tile_C_Object);
    }
  });
  tileD.addEventListener("click", () => {
    if (tile_D_Object.isClickable) {
      assignImage(tile_D_Object);
    }
  });
  tileE.addEventListener("click", () => {
    if (tile_E_Object.isClickable) {
      assignImage(tile_E_Object);
    }
  });
  tileF.addEventListener("click", () => {
    if (tile_F_Object.isClickable) {
      assignImage(tile_F_Object);
    }
  });
}
determineTile();

//tile Object Constructor Function
function TileObject(tile) {
  this.tile = tile;
  this.isSelected = false;
  this.isClickable = true;
  this.comparing = false;
  this.imageID = true;
}

// Get random image from array while removing array elements.
function randomImage(array, tileObject) {
  // Logic for getting a random array image element
  const arrayIndex = Math.floor(Math.random() * array.length);
  const arrayElement = array[arrayIndex];
  array.splice(arrayIndex, 1);

  // Image ID for tile objects
  tileObject.imageID = `${arrayElement}`;
  return arrayElement;
}

//Function Highlight Tile
function highlightTile(tileObject) {
  if (!tileObject.isClickable) {
    tileObject.tile.classList.remove("clickable");
    tileObject.tile.classList.add("comparing");
  }
}

// Assign Image to tile
function assignImage(tileObject) {
  const imageIdentifier = randomImage(imageArray, tileObject);
  console.log(`i'm responsive guys :D`);

  if (tileObject.isClickable) {
    tileObject.comparing = true;
    tileObject.isClickable = false;
    highlightTile(tileObject);
  }
  // Logic to assign images to tile.
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", `${imageIdentifier}`);
  tileObject.tile.appendChild(imageElement);
  console.log(imageArray);
  console.log();
}

// Tile Comparison Object Test

// function checkObjectfunction(object) {
//   if (!object.tile1) {
//     object.tile1 = tileA;
//     console.log("marko");
//   }
//   console.log("polo");
// }

// console.log(comparingTiles.tile1);
// checkObjectfunction(comparingTiles);
