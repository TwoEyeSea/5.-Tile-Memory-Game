// playzone
// function to switch from true to false - the thought is to toggle visibility of the imagesin the tiles

itemA = { value: true };

function swapper(item) {
  const toFalse = false;
  const toTrue = true;
  return (item.value) ? (item.value = false) : (item.value = true);
  console.log(item);
}

function setVisibility(item) {
  if (swapper(item)) {
    item = false;
  }
  item = true;
}
