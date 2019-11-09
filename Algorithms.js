swapArray = [];
function bubbleSort(array){
  let swaps = 0;
  array.forEach((value,i) => {
    if(value > array[i+1] && i != array.length-1){
      swapArray.push(i);
      swapValues(array,i,i+1);
      swaps++;
    }
  });
  if(swaps != 0){
    bubbleSort(array);
  }
  drawNewBackground(valueArray,ctx,"lime");
}

function drawNewBackground(array,context,color="white",min=0, max=100){
  context.fillStyle = "black";
  context.fillRect(0,0,canvas.width,canvas.height);

  let width = (canvas.width / array.length);

  array.forEach((value,i) => {
    let height = map(value,min,max,canvas.height,0);
    context.fillStyle = color;
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

function map(value,start1,stop1,start2,stop2){
  return (value - start1) / (stop1-start1) * (stop2-start2) + start2;
}

async function swapValues(array, indexA, indexB){
  let tempA = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tempA;

}
