// อันนี้ผมไม่แน่ใจว่า ใช่คำตอบที่ต้องการรึเปล่า แต่แนวคิดผมคิดได้แบบนี้ครับ ถ้าผิดพลาดประการใด ผม ขออภัยมาณที่นี้ ด้วยนะครับ
let num = [2, 7, 11, 15];
let sum = 9;

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    let x = num[i];
    let y = num[j];
    if (x + y == sum) {
      console.log(num.indexOf(x));
      if (y === x) {
        console.log(num.indexOf(y, 2));
      } else {
        console.log(num.indexOf(y));
      }
    }
  }
}

let num2 = [3, 2, 4];
let sum2 = 6;

for (let i = 0; i < num2.length; i++) {
  for (let j = i + 1; j < num2.length; j++) {
    let x = num2[i];
    let y = num2[j];
    if (x + y == sum2) {
      console.log(num2.indexOf(x));
      if (y === x) {
        console.log(num2.indexOf(y, 2));
      } else {
        console.log(num2.indexOf(y));
      }
    }
  }
}

let num3 = [3, 1, 2, 3];
let sum3 = 6;

for (let i = 0; i < num3.length; i++) {
  for (let j = i + 1; j < num3.length; j++) {
    let x = num3[i];
    let y = num3[j];
    if (x + y == sum3) {
      console.log(num3.indexOf(x));
      if (y === x) {
        console.log(num3.indexOf(y, 2));
      } else {
        console.log(num3.indexOf(y));
      }
    }
  }
}

let num4 = [3, 2];
let sum4 = 3;

for (let i = 0; i < num4.length; i++) {
  for (let j = i + 1; j < num4.length; j++) {
    let x = num4[i];
    let y = num4[j];
    if (x + y == sum4) {
      console.log(num4.indexOf(x));
      if (y === x) {
        console.log(num4.indexOf(y, 2));
      } else {
        console.log(num4.indexOf(y));
      }
    }
  }
}
