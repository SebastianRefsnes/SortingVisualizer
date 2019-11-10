window.onload = init;
canvas = "";
ctx = "";
valueArray = [];
swapDelay = 1;

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
  slider.max = "1000";
  slider.value = "200";
  slider.id = "arraySlider";
  slider.classList.add("slider");
  slider.oninput = sliderChange;

  let list = document.createElement("select");
  list.name = "Sorting algorithms";
  list.id = "sortingList";

  let bubbleOption = document.createElement("option");
  bubbleOption.value = "bubble";
  bubbleOption.innerHTML = "BubbleSort";
  bubbleOption.classList.add("algorithmOptions")

  let cocktailOption = document.createElement("option");
  cocktailOption.value = "cocktail";
  cocktailOption.innerHTML = "CocktailSort";
  cocktailOption.classList.add("algorithmOptions")

  let quickOption = document.createElement("option");
  quickOption.value = "quick";
  quickOption.innerHTML = "QuickSort";
  quickOption.classList.add("algorithmOptions")


  list.appendChild(bubbleOption);
  list.appendChild(cocktailOption);
  list.appendChild(quickOption);

  let title = document.createElement("h1");
  title.innerHTML = "Sorting Algorithm Visualizer";
  title.id = "canvasTitle";

  canvas = document.createElement("canvas");
  canvas.id = "sortingCanvas";
  canvas.width = "1600";
  canvas.height = "600";

  document.body.appendChild(canvContainer);
  document.body.appendChild(controlsContainer);

  controlsContainer.appendChild(list);
  controlsContainer.appendChild(slider);
  controlsContainer.appendChild(goButton);

  canvContainer.appendChild(title);
  canvContainer.appendChild(canvas);


  ctx = canvas.getContext("2d");

  valueArray = newArray(slider.value);
  setInterval(draw, 60);
}

function draw(){
  drawNewBackground(valueArray,ctx);
}

function buttonPress(){
  let val = document.getElementById("sortingList").value;
  switch (val) {
    case "quick":
   quickSort(valueArray);
      break;
    case "bubble":
    bubbleSort(valueArray);
      break;
    case "cocktail":
    cocktailSort(valueArray);
      break;
  }
}
function sliderChange(){
  valueArray = newArray(this.value);
}
