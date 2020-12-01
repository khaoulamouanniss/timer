let arr = process.argv.slice(2).sort((a,b) => a - b);
arr= arr.map(Number);
  for (let i= 0; i < arr.length; i++){
    if (arr[i] > 0 && Number((arr[i]))) {
    setTimeout(function(){console.log(arr[i]);}, arr[i]);
    }
  }
