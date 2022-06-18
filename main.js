// Define html elements as constants for javascript
const tileA = document.querySelector("#tile-A");
const tileB = document.querySelector("#tile-B");
const tileC = document.querySelector("#tile-C");
const tileD = document.querySelector("#tile-D");
const tileE = document.querySelector("#tile-E");
const tileF = document.querySelector("#tile-F");

// Game
function assignImage(tile) {
  console.log("hello");
  if (tile.classList.contains("clickable")) {
    tile.classList.add("comparing");
    tile.classList.remove("clickable");
    console.log("I should only work once");
  }
}

// Image array
const imageArray = ["cat", "cat", "dog", "dog", "ocelot", "ocelot"];

console.log("hello world");
tileA.classList.add("test");
console.log(document.querySelector("#tile-A").classList.contains("test"));

// Functions
// function to determine which tile is being selected
function determineTile() {
  tileA.addEventListener("click", () => {
    assignImage(tileA);
  });
  tileB.addEventListener("click", () => {
    assignImage(tileB);
  });
  tileC.addEventListener("click", () => {
    assignImage(tileC);
  });
  tileD.addEventListener("click", () => {
    assignImage(tileD);
  });
  tileE.addEventListener("click", () => {
    assignImage(tileE);
  });
  tileF.addEventListener("click", () => {
    assignImage(tileF);
  });
}

determineTile();
