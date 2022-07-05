let str = 5;
let mtr=[];
for(i=0; i<=str; i++){
  mtr.push(new Array(str).fill('*'));
}
for(i =0; i<mtr.length;i++ ){
  console.log(mtr[i].join(""))
}
