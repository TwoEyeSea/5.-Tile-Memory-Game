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
const imageArray = ["cat", "cat", "dog", "dog", "ocelot", "ocelot"];
// Image Array
const resetArray = imageArray;

// Functions
// Function on launch
determineTile();

//tile Object Constructor Function
function TileObject(tile) {
  this.tile = tile;
  this.isSelected = false;
  this.isClickable = true;
  this.comparing = false;
  this.imageID = true;
}

// function to determine which tile is being selected - passes specific tiles to the game function
function determineTile() {
  tileA.addEventListener("click", () => {
    if (tile_A_Object.isClickable) {
      tileGame(tile_A_Object);
    }
  });
  tileB.addEventListener("click", () => {
    if (tile_B_Object.isClickable) {
      tileGame(tile_B_Object);
    }
  });
  tileC.addEventListener("click", () => {
    if (tile_C_Object.isClickable) {
      tileGame(tile_C_Object);
    }
  });
  tileD.addEventListener("click", () => {
    if (tile_D_Object.isClickable) {
      tileGame(tile_D_Object);
    }
  });
  tileE.addEventListener("click", () => {
    if (tile_E_Object.isClickable) {
      tileGame(tile_E_Object);
    }
  });
  tileF.addEventListener("click", () => {
    if (tile_F_Object.isClickable) {
      tileGame(tile_F_Object);
    }
  });
}

// Tile game main function
function tileGame(tileObject) {
  //update tileGameProperties()
  updateGameProperties(tileObject);

  //assign Image
  const imageIdentifier = assignRandomImage(imageArray, tileObject);
  console.log(`i'm responsive guys :D`);
  console.log(tileGameProperties.tileCount);

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

// Get random image from array while removing array elements.
function assignRandomImage(array, tileObject) {
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
    tileObject.tile.classList.toggle("clickable");
    tileObject.tile.classList.add("comparing");
  }
}

function compareImages() {
  if (tileGameProperties.tileCount === 2) {
    if (tileGameProperties.tile1 === tileGameProperties.tile2) {
      console.log("Congratulations you're a winner!");
      return tileGameProperties.reset();
    }
    console.log("unfortunatley you lose");
    return tileGameProperties.reset();
  }
  return;
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
