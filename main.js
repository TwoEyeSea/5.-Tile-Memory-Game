// Constants

// Define html elements as constants for javascript

const tileA_div = document.querySelector("#tile-A");
const tileB_div = document.querySelector("#tile-B");
const tileC_div = document.querySelector("#tile-C");
const tileD_div = document.querySelector("#tile-D");
const tileE_div = document.querySelector("#tile-E");
const tileF_div = document.querySelector("#tile-F");
const userScore_div = document.querySelector("#user_score");
const failedAttempts_div = document.querySelector("#failed_attempts");
const currentRound_div = document.querySelector("#round");

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

// Image Sources
const monkey = "/Images/monkey_small.jpg";
const astronaut = "/Images/astronaut_small.jpg";
const cat = "/Images/cat_small.jpg";

// UI variables
let currentRound = 1;
let score = 0;
let attempts = 0;

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
      }
    }
    this.initValues = initValues;
  },
  reset: function () {
    for (let property in this.initValues) {
      this[property] = this.initValues[property];
    }
  },
};

const roundTracker = {
  // 4 attempts can be made per round
  matches: 0,
  attempts: 0,
};

// Arrays
// tile Objects
const tileObjectArray = [tile_A_Object, tile_B_Object, tile_C_Object, tile_D_Object, tile_E_Object, tile_F_Object];
// ImageObjects
const imageObjectArray = [imageObjectA1, imageObjectA2, imageObjectB1, imageObjectB2, imageObjectC1, imageObjectC2];

// Image Sources for <img> elements
const imageSourceArray = [cat, cat, monkey, monkey, astronaut, astronaut];
const resetArray = [cat, cat, monkey, monkey, astronaut, astronaut];
// tileId's to place within tileObjects and img elements
const tileIdArray = ["tileA", "tileB", "tileC", "tileD", "tileE", "tileF"];

// Functions
// Function on launch
initTileObjects();
determineTile();
displayObjects(tileObjectArray);

// TileObject Constructor Function
function TileObject(tile) {
  this.tile = tile;
  this.tileId = null;
  this.isClickable = true;
  this.comparing = false;
  this.imageObject = null;

  this.init = function () {
    let initValues = {};
    for (let property in this) {
      if (this.hasOwnProperty(property) && property != "originalValues") {
        initValues[property] = this[property];
        console.log("tiles initialized");
      }
    }
    this.initValues = initValues;
  };
  this.reset = function () {
    for (let property in this.initValues) {
      this[property] = this.initValues[property];
      console.log("tiles reset");
    }
  };
}

// ImageObject Constructor Function
function ImageObject() {
  const imageElement = document.createElement("img");
  this.imgElement = imageElement;
}

// Launch functions
// Function to assign imageObjects to tileObjects and to assign image sources randomly to imageObject img elements
function initTileObjects() {
  if (!tile_A_Object.imageObject) {
    initialTileProps(tileObjectArray);
  }
  // Function to reset tiles and randomly assign images again
  if (tile_A_Object.imageObject) {
    imageSourceArray.push(...resetArray);
    resetTileProps(tileObjectArray);
  }
  assignImageObject(tileObjectArray, imageObjectArray);
  assignTileId(tileObjectArray, tileIdArray);
  assignImageSource(tileObjectArray);
}
// Function to assign tileId to tileObect
function assignTileId(tileObjectArray, imageSourceArray) {
  let index = 0;
  for (let tileObject of tileObjectArray) {
    tileObject.tileId = imageSourceArray[index];
    index++;
  }
}

//  Functions to assign imageObjects to tileObjects and Get random image sources from array for img elements.
function assignImageObject(tileObjectArray, imageObjectArray) {
  let index = 0;
  for (let tileObject of tileObjectArray) {
    tileObject.imageObject = imageObjectArray[index];
    index++;
  }
}
// Logic to assign image sources to imageObect img html elements randomly.
function assignImageSource(tileObjectArray) {
  for (let tileObject of tileObjectArray) {
    const tileImage = tileObject.imageObject.imgElement;
    const tileId = tileObject.tileId;
    const imageSource = randomImageSource(imageSourceArray);
    tileImage.setAttribute("class", "invisible");
    tileImage.setAttribute("id", `${tileId}`);
    tileImage.setAttribute("src", `${imageSource}`);
    tileObject.tile.appendChild(tileImage);
  }
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

  if (tileGameProperties.tileCount === 2) {
    console.log("should timeout");
    setTimeout(function () {
      compareImages();
    }, 500);
  }
}

// function noClicking(array) {
//   for (let object of array) {
//     if (object.comparing) {
//       object.isClickable = false;
//     }
//   }
// }

function newRound() {
  let round = 0;
  if (roundTracker.matches > 2) {
    console.log("new round");
    roundTracker.matches = 0;
    roundTracker.attempts = 0;
    currentRound++;
    currentRound_div.innerHTML = currentRound;
    initTileObjects();
  }
  if (roundTracker.attempts > 2) {
    console.log("new round");
    roundTracker.matches = 0;
    roundTracker.attempts = 0;
    currentRound++;
    currentRound_div.innerHTML = currentRound;
    initTileObjects();
  }
}

// Utility functions
// Save Initial Tile Properties
function initialTileProps(tileObjectArray) {
  for (let tileObject of tileObjectArray) {
    tileObject.init();
    console.log("i'm initialized");
  }
}
// Revert tileObject properties to initial state.
function resetTileProps(tileObjectArray) {
  for (let tileObject of tileObjectArray) {
    const imgElement = document.querySelector(`#${tileObject.tileId}`);
    imgElement.remove();
    tileObject.tile.classList.remove("comparing");
    tileObject.reset();
  }
}
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

// Function to compare 2images within the tileGameProperties Object
function compareImages() {
  // constants for toggling img element class
  //constants for comparing img element sources
  const imgTile1 = document.querySelector(`#${tileGameProperties.tile1.tileId}`).getAttribute("src");
  const imgTile2 = document.querySelector(`#${tileGameProperties.tile2.tileId}`).getAttribute("src");

  if (imgTile1 === imgTile2) {
    winPoint();
    roundTracker.matches++;
    newRound();
    return tileGameProperties.reset();
  }

  roundTracker.attempts++;
  noPair();
  failedAttempt();
  newRound();
  return tileGameProperties.reset();
}

// Function to toggle tile classes and tileObject props
function noPair() {
  document.querySelector(`#${tileGameProperties.tile1.tileId}`).classList.toggle("invisible");
  document.querySelector(`#${tileGameProperties.tile2.tileId}`).classList.toggle("invisible");
  tileGameProperties.tile1.tile.classList.toggle("comparing");
  tileGameProperties.tile2.tile.classList.toggle("comparing");
  tileGameProperties.tile1.tile.classList.toggle("clickable");
  tileGameProperties.tile2.tile.classList.toggle("clickable");
  tileGameProperties.tile1.isClickable = true;
  tileGameProperties.tile2.isClickable = true;
}

function winPoint() {
  score++;
  userScore_div.innerHTML = score;
}

function failedAttempt() {
  attempts++;
  failedAttempts_div.innerHTML = attempts;
}

// Dev tool functions
function displayObjects(array) {
  for (let object of array) {
    console.log(object);
  }
}
