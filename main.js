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
const imageObjectArray = [imageObjectA1, imageObjectA2, imageObjectB1, imageObjectB2, imageObjectC1, imageObjectC2];
//"dog", "dog","cat", "cat",
const imageArray = ["ocelot", "mouse"];

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
  this.imageObject = null;
}

// image Object Constructor Function
function ImageObject() {
  const imageElement = document.createElement("img");
  this.imgElement = imageElement;
}

// function to determine which tile is being selected - passes specific tiles to the game function
function determineTile() {
  tileA.addEventListener("click", () => {
    if (tile_A_Object.isClickable && !tile_A_Object.imageObject) {
      assignImageObject(tile_A_Object);
      tileGame(tile_A_Object);
    }
  });
  tileB.addEventListener("click", () => {
    if (tile_B_Object.isClickable && !tile_B_Object.imageObject) {
      assignImageObject(tile_B_Object);
      tileGame(tile_B_Object);
    }
  });
  tileC.addEventListener("click", () => {
    if (tile_C_Object.isClickable && !tile_C_Object.imageObject) {
      assignImageObject(tile_C_Object);
      tileGame(tile_C_Object);
    }
  });
  tileD.addEventListener("click", () => {
    if (tile_D_Object.isClickable && !tile_D_Object.imageObject) {
      assignImageObject(tile_D_Object);
      tileGame(tile_D_Object);
    }
  });
  tileE.addEventListener("click", () => {
    if (tile_E_Object.isClickable && !tile_E_Object.imageObject) {
      assignImageObject(tile_E_Object);
      tileGame(tile_E_Object);
    }
  });
  tileF.addEventListener("click", () => {
    if (tile_F_Object.isClickable && !tile_F_Object.imageObject) {
      assignImageObject(tile_F_Object);
      tileGame(tile_F_Object);
    }
  });
}

function assignImageObject(tileObject) {
  tileObject.imageObject = imageObjectArray.shift();
}

// Tile game main function
function tileGame(tileObject) {
  //update tileGameProperties()
  updateGameProperties(tileObject);

  //assign Image
  const tileImage = tileObject.imageObject.imgElement;
  const imageSource = assignRandomImage(imageArray, tileObject);
  console.log(`i'm responsive guys :D`);
  console.log(tileGameProperties.tileCount);

  if (tileObject.isClickable) {
    tileObject.comparing = true;
    tileObject.isClickable = false;
    highlightTile(tileObject);
  }

  // Logic to assign images to tile.
  tileImage.setAttribute("class", "visible");
  tileImage.setAttribute("src", `${imageSource}`);
  tileObject.tile.appendChild(tileImage);
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
    tileObject.tile.classList.toggle("comparing");
  }
}

function compareImages() {
  if (tileGameProperties.tileCount === 2) {
    if (tileGameProperties.tile1.imageID === tileGameProperties.tile2.imageID) {
      console.log("Congratulations you're a winner!");
      return tileGameProperties.reset();
    }
    console.log("unfortunatley you lose");
    tileGameProperties.tile1.tile.classList.toggle("clickable");
    tileGameProperties.tile1.tile.classList.toggle("comparing");
    tileGameProperties.tile1.tile.classList.toggle("visible");

    tileGameProperties.tile2.tile.classList.toggle("clickable");
    tileGameProperties.tile2.tile.classList.toggle("comparing");
    tileGameProperties.tile2.tile.classList.toggle("visible");

    return tileGameProperties.reset();
  }
  return;
}
