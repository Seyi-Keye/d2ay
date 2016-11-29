module.exports={
findMinMax:function(array){
  
  var min = array[0];
  var max = array[array.length - 1];
  var result = [];
  
  for(var loop = 0; loop< array.length; loop++){
    if (min >array[loop]){
      min = array[loop];
    }
    else if (max<array[loop]){
      max = array[loop];
    }
  }
  if(min === max){
     result.push(min);
  }
  else{
  result.push(min);
  result.push(max);
  }
  return result;
}


}