// /3 three /5 five /9 nine check if /3 /5 three five /3/9 three nine /3/5/9 three five nine  /5/9 five nine /13 return three five nine thirteen

// user input -> x = [3,5,9,13]
// x.map
 
const x = [3, 5, 9, 13];

const num = {
  three: 3,
  five: 5,
  nine: 9,
  thirteen: 13,
};
function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}


for(let n=1; n<=100 ; n++){
    let totalSum = []
    for(let i=0; i < x.length;i++){
        if(n % x[i] ===0){
            totalSum.push(getObjKey(num, x[i]))
        }
    }
    if(totalSum.length == 0){
        console.log(n)
    }else{
        console.log(totalSum.join(' '))
    }
}
