window.onload = init;
canvas = "";
ctx = "";
valueArray = [];
function init(){
  let canvContainer = document.createElement("div");
  canvContainer.id = "canvasContainer";

  let controlsContainer = document.createElement("div");
  controlsContainer.id = "controlsContainer";

  let goButton = document.createElement("button");
  goButton.classList.add("algoControls");
  goButton.classList.add("buttons");
  goButton.innerHTML = "Sort!";
  goButton.id = "sortButton";
  goButton.addEventListener("click",buttonPress);


  let slider = document.createElement("input");
  slider.type = "range";
  slider.min= "10";
  slider.max = "100";
  slider.value = "45";
  slider.id = "arraySlider";
  slider.classList.add("slider");
  slider.oninput = sliderChange;

  let title = document.createElement("h1");
  title.innerHTML = "Sorting Algorithm Visualizer";
  title.id = "canvasTitle";

  canvas = document.createElement("canvas");
  canvas.id = "sortingCanvas";
  canvas.width = "900";
  canvas.height = "600";

  document.body.appendChild(canvContainer);
  document.body.appendChild(controlsContainer);

  controlsContainer.appendChild(slider);
  controlsContainer.appendChild(goButton);

  canvContainer.appendChild(title);
  canvContainer.appendChild(canvas);


  ctx = canvas.getContext("2d");

  valueArray = newArray(slider.value);
  drawNewBackground(valueArray,ctx);
}


function buttonPress(){
  bubbleSort(valueArray);
}
function sliderChange(){
  valueArray = newArray(this.value);
  drawNewBackground(valueArray,ctx);
}
