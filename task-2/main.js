let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3],
  [4, 5, 6, 7],
];
let mtr=[]
let r = 3;
let c = 2;

for (i = 0; i < r; i++) {
  mtr.push([])
  for (j = 0; j < c; j++) {
    mtr[i].push(matrix[i][j])
   
  }
}


for (i = 0; i < mtr.length; i++) {
  console.log(mtr[i].join(" "));
}
