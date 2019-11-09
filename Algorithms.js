function bubbleSort(array){
  let swaps = 0;
  array.forEach((value,i) => {
    if(value > array[i+1] && i != array.length-1){
      swapValues(array,i,i+1);
      swaps++;

    }
  });
  if(swaps != 0){
    bubbleSort(array);
  }
  drawNewBackground(valueArray,ctx);
}

function drawNewBackground(array,context,min=0, max=100){
  context.fillStyle = "black";
  context.fillRect(0,0,canvas.width,canvas.height);

  let width = canvas.width / array.length;

  array.forEach((value,i) => {
    let height = map(value,min,max,canvas.height,0);
    context.fillStyle = "white";
    context.fillRect(width*i,height,width-1,canvas.height);
  });
}

function newArray(points, min=0, max=100){
  let array = [];
  for(let i = 0; i < points; i++){
    let randomVal = Math.random();
    randomVal = map(randomVal,0,1,min,max);
    randomVal = Math.round(randomVal);
    array.push(randomVal);
  }
  return array;
}
