async function bubbleSort(array){
  let swaps = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[i+1] && i != array.length-1){
      await swapValues(array,i,i+1);
      swaps++;
    }
  }
  if(swaps != 0){
    bubbleSort(array);
  }
}
async function cocktailSort(array){
  let swaps = 0;
  //Left to right
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[i+1] && i != array.length-1){
      await swapValues(array,i,i+1);
      swaps++;
    }
  }
  if(swaps == 0){
    return
  }
  //Right to Left
  for(let i = array.length; i > 0; i--){
    if(array[i] < array[i-1]){
      await swapValues(array,i,i-1);
      swaps++;
    }
  }
  cocktailSort(array);

}

async function quickSort(array,start=0,end=array.length-1){
  if(start >= end){
    return;
  }
  let pivotFinal = await partition(array,start,end);
  await Promise.all([
     quickSort(array,start,pivotFinal-1)
    ,quickSort(array,pivotFinal+1,end)
  ]);


}

async function partition(array,start,end){
  let pivotIndex = start;
  let pivot = array[end];
  for(let i = start; i < end; i++){
    if(array[i] < pivot){
      await swapValues(array,i,pivotIndex);
      pivotIndex++;
    }
  }
  await swapValues(array,pivotIndex,end);
  return pivotIndex;
}



function drawNewBackground(array,context,color="white",min=0, max=100){
  context.fillStyle = "black";
  context.fillRect(0,0,canvas.width,canvas.height);

  let width = (canvas.width / array.length);

  array.forEach((value,i) => {
    let height = map(value,min,max,canvas.height,0);
    context.fillStyle = color;
    context.fillRect(width*i,height,width-(width/10),canvas.height);
  });
}

function newArray(points, min=10, max=100){
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

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function swapValues(array, indexA, indexB){
  await sleep(swapDelay);
  let tempA = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tempA;
}
