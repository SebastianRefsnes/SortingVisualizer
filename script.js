window.onload = () => {
  // Globals
  swapDelay = 1;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  // Create HTML elements ('type', 'id', ...classes)
  let canvContainer = createElement("div", "canvasContainer");
  let controlsContainer = createElement("div", "controlsContainer");
  let goButton = createElement("button", "sortButton", "algoControls", "buttons");
  let newButton = createElement("button", "new", "algoControls", "buttons");
  let slider = createElement("input", "arraySlider", "slider");
  let list = createElement("select", "sortingList");
  let bubbleOption = createElement("option", undefined, "algorithmOptions");
  let cocktailOption = createElement("option", undefined, "algorithmOptions");
  let quickOption = createElement("option", undefined, "algorithmOptions");
  let title = createElement("h1", "canvasTitle");
  canvas = createElement("canvas", "sortingCanvas");

  // Edit HTML elements
  goButton.innerHTML = "Sort!";
  goButton.addEventListener("click", buttonPress);
  newButton.innerHTML = "Randomize!";
  newButton.addEventListener("click", buttonPress);
  slider.type = "range";
  slider.min= "10", slider.max = "1000", slider.value = "200";
  slider.oninput = sliderChange;
  list.name = "Sorting algorithms";
  bubbleOption.value = "bubble";
  bubbleOption.innerHTML = "BubbleSort";
  cocktailOption.value = "cocktail";
  cocktailOption.innerHTML = "CocktailSort";
  quickOption.value = "quick";
  quickOption.innerHTML = "QuickSort";
  title.innerHTML = "Sorting Algorithm Visualizer";

  canvas.width = windowWidth * 0.9;
  canvas.height = windowHeight * 0.75;

  // Add HTML elements
  appendElements(list, bubbleOption, cocktailOption, quickOption);
  appendElements(document.body, canvContainer, controlsContainer);
  appendElements(controlsContainer, list, slider, newButton, goButton);
  appendElements(canvContainer, title, canvas);

  ctx = canvas.getContext("2d");
  valueArray = newArray(slider.value);
  setInterval(draw, 60);
}

function draw() {
  drawNewBackground(valueArray, ctx);
}

function buttonPress() {
  if(this.id == "new") {
    valueArray = newArray(document.getElementById("arraySlider").value);
    return;
  }

  let val = document.getElementById("sortingList").value;
  switch (val) {
    case "quick": quickSort(valueArray); break;
    case "bubble": bubbleSort(valueArray); break;
    case "cocktail": cocktailSort(valueArray); break;
  }
}

function sliderChange() {
  valueArray = newArray(this.value);
}

function createElement(type, id, ...classes) {
  let e = document.createElement(type);
  if(id != undefined) e.id = id;
  classes.forEach(c => e.classList.add(c));
  return e;
}

function appendElements(parent, ...childs) {
  childs.forEach(child => parent.appendChild(child));
}
