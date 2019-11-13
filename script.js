window.onload = () => {
  swapDelay = 1;
  windowWidth = window.innerWidth, windowHeight = window.innerHeight;
  canvas = document.getElementById("sortingCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = windowWidth * 0.9, canvas.height = windowHeight * 0.75;  
  valueArray = newArray(document.getElementById("arraySlider").value);
  setInterval(draw, 60);
}

function draw() {
  drawNewBackground(valueArray, ctx);
}

function buttonPress(button) {
  if(button.id == "new") {
    valueArray = newArray(document.getElementById("arraySlider").value);
    return;
  }

  let val = document.getElementById("sortingList").value;
  switch (val) {
    case "quick": quickSort(valueArray); break;
    case "bubble": bubbleSort(valueArray); break;
    case "cocktail": cocktailSort(valueArray); break;
    case "insertion": insertionSort(valueArray); break;
  }
}

function sliderChange(slider) { valueArray = newArray(slider.value); }