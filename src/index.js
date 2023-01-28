
module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix === undefined) {
    return resultArr;
  }  
  matrix.forEach((arr, index) => { 
    if (index % 2 !== 0) {
      resultArr.push(...arr.reverse());
    }  else {
      resultArr.push(...arr);
    } 
  })

  return resultArr;
}
