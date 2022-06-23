// Define html elements as constants for javascript
const tileA_div = document.querySelector("#tile-A");
const tileB_div = document.querySelector("#tile-B");
const tileC_div = document.querySelector("#tile-C");
const tileD_div = document.querySelector("#tile-D");
const tileE_div = document.querySelector("#tile-E");
const tileF_div = document.querySelector("#tile-F");

// Tile Objects
const tile_A_Object = new TileObject(tileA_div);
const tile_B_Object = new TileObject(tileB_div);
const tile_C_Object = new TileObject(tileC_div);
const tile_D_Object = new TileObject(tileD_div);
const tile_E_Object = new TileObject(tileE_div);
const tile_F_Object = new TileObject(tileF_div);

// Image Object
const imageObjectA1 = new ImageObject();
const imageObjectA2 = new ImageObject();
const imageObjectB1 = new ImageObject();
const imageObjectB2 = new ImageObject();
const imageObjectC1 = new ImageObject();
const imageObjectC2 = new ImageObject();

// Tile comparison Object
const tileGameProperties = {
  tileCount: 0,
  Initialized: false,
  tile1: null,
  tile2: null,

  // code for save and reset functions
  init: function () {
    let initValues = {};
    for (let property in this) {
      if (this.hasOwnProperty(property) && property != "originalValues") {
        initValues[property] = this[property];
        console.log("I am indeed a functioning function :)");
      }
    }
    this.initValues = initValues;
  },
  reset: function () {
    for (let property in this.initValues) {
      this[property] = this.initValues[property];
      console.log("i'm a functional function after all!");
    }
  },
};

// Arrays
// ImageObjects
const imageObjectArray = [imageObjectA1, imageObjectA2, imageObjectB1, imageObjectB2, imageObjectC1, imageObjectC2];

// Image Sources for <img> elements
const imageSourceArray = ["dog", "dog", "cat", "cat", "ocelot", "mouse"];

// tileId's to place within tileObjects and img elements
const tileIdArray = ["tileA", "tileB", "tileC", "tileD", "tileE", "tileF"];

// Image Array
const resetArray = imageSourceArray;

// Functions
// Function on launch
initTileObjects();
determineTile();

// TileObject Constructor Function
function TileObject(tile) {
  this.tile = tile;
  this.tileId = null;
  // this.isSelected = false;
  this.isClickable = true;
  this.comparing = false;
  this.imageObject = null;
}

// ImageObject Constructor Function
function ImageObject() {
  const imageElement = document.createElement("img");
  this.imgElement = imageElement;
}

// Launch functions
// Function to assign imageObjects to tileObjects and to assign image sources randomly to imageObject img elements
function initTileObjects() {
  assignImageObject(tile_A_Object);
  assignImageObject(tile_B_Object);
  assignImageObject(tile_C_Object);
  assignImageObject(tile_D_Object);
  assignImageObject(tile_E_Object);
  assignImageObject(tile_F_Object);

  assignTileId(tile_A_Object);
  assignTileId(tile_B_Object);
  assignTileId(tile_C_Object);
  assignTileId(tile_D_Object);
  assignTileId(tile_E_Object);
  assignTileId(tile_F_Object);

  assignImageSource(tile_A_Object, tile_A_Object.imageObject);
  assignImageSource(tile_B_Object, tile_B_Object.imageObject);
  assignImageSource(tile_C_Object, tile_C_Object.imageObject);
  assignImageSource(tile_D_Object, tile_D_Object.imageObject);
  assignImageSource(tile_E_Object, tile_E_Object.imageObject);
  assignImageSource(tile_F_Object, tile_F_Object.imageObject);
}
// Function to assign tileId to tileObect
function assignTileId(tileObject) {
  tileObject.tileId = tileIdArray.shift();
}

//  Functions to assign imageObjects to tileObjects and Get random image sources from array for img elements.
function assignImageObject(tileObject) {
  tileObject.imageObject = imageObjectArray.shift();
}
// Logic to assign image sources to imageObect img html elements randomly.
function assignImageSource(tileObject, imageObject) {
  const tileImage = imageObject.imgElement;
  const tileId = tileObject.tileId;
  const imageSource = randomImageSource(imageSourceArray);
  console.log(`i'm responsive guys :D`);

  tileImage.setAttribute("class", "invisible");
  tileImage.setAttribute("id", `${tileId}`);
  tileImage.setAttribute("src", `${imageSource}`);
  console.log(imageSourceArray);
  tileObject.tile.appendChild(tileImage);
}
// Function to get random image
function randomImageSource(array) {
  // Logic for getting a random array image element
  const arrayIndex = Math.floor(Math.random() * array.length);
  const arrayElement = array[arrayIndex];
  array.splice(arrayIndex, 1);

  // Image ID for tile objects
  return arrayElement;
}

// UI functions
// function to determine which tile is being selected - passes specific tiles to the game function
function determineTile() {
  tileA_div.addEventListener("click", () => {
    if (tile_A_Object.isClickable) {
      tileGame(tile_A_Object);
    }
  });
  tileB_div.addEventListener("click", () => {
    if (tile_B_Object.isClickable) {
      tileGame(tile_B_Object);
    }
  });
  tileC_div.addEventListener("click", () => {
    if (tile_C_Object.isClickable) {
      tileGame(tile_C_Object);
    }
  });
  tileD_div.addEventListener("click", () => {
    if (tile_D_Object.isClickable) {
      tileGame(tile_D_Object);
    }
  });
  tileE_div.addEventListener("click", () => {
    if (tile_E_Object.isClickable) {
      tileGame(tile_E_Object);
    }
  });
  tileF_div.addEventListener("click", () => {
    if (tile_F_Object.isClickable) {
      tileGame(tile_F_Object);
    }
  });
}

// Tile game main function
function tileGame(tileObject) {
  //update tileGameProperties()
  updateGameProperties(tileObject);

  if (tileObject.isClickable) {
    tileObject.comparing = true;
    tileObject.isClickable = false;
    highlightTile(tileObject);
  }
  compareImages();
}

// Utility functions
// Increment tileGameProperties.tileCount
function updateGameProperties(tileObject) {
  if (!tileGameProperties.Initialized) {
    tileGameProperties.Initialized = true;
    tileGameProperties.init();
  }

  tileGameProperties.tileCount++;

  if (!tileGameProperties.tile1) {
    return (tileGameProperties.tile1 = tileObject);
  }
  return (tileGameProperties.tile2 = tileObject);
}

//Function Highlight Tile
function highlightTile(tileObject) {
  const imgElement = document.querySelector(`#${tileObject.tileId}`);
  if (!tileObject.isClickable) {
    tileObject.tile.classList.toggle("clickable");
    tileObject.tile.classList.toggle("comparing");
    imgElement.classList.toggle("invisible");
  }
}
// Function to compare images within the tileGameProperties Object
// function compareImages() {
//   if (tileGameProperties.tileCount === 2) {
//     if (tileGameProperties.tile1.imageID === tileGameProperties.tile2.imageID) {
//       console.log("Congratulations you're a winner!");
//       return tileGameProperties.reset();
//     }
//     console.log("unfortunatley you lose");
//     tileGameProperties.tile1.tile.classList.toggle("clickable");
//     tileGameProperties.tile1.tile.classList.toggle("comparing");
//     tileGameProperties.tile1.tile.classList.toggle("visible");

//     tileGameProperties.tile2.tile.classList.toggle("clickable");
//     tileGameProperties.tile2.tile.classList.toggle("comparing");
//     tileGameProperties.tile2.tile.classList.toggle("visible");

//     return tileGameProperties.reset();
//   }
//   return;
// }
