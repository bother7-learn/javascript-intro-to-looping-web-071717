function forLoop(array){
  for (let i=0; i<25; i++){
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array

}

function whileLoop(n){
  while (n > 0){
    console.log(n);
  n -= 1;
}
return 'done'
}

function doWhileLoop(array){
  do {
  array = array.splice(1)
} while (array.length > 0);
return array
}
