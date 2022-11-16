// function pow(x,n){
//   let resul=1;
//   for(let i=0;i<n;i++){
//     resul*=x
//   }
//   return resul
// }
// alert(pow(2,2))

// Recursive thinking: simplify the task and call self:
// function pow(x,n){
//   if(n==1){
// return x;
//   }
//   else{
//     return x*pow(x,n-1)
//   }
// }
// alert(pow(2,2))

// Recursion is usually shorter
// function pow(x,n){
//   return (n==1) ? x : pow(n-1)
// }

// function sumAll(...args) { // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6




// function sum(...args) {
//   let sum=0;
//   for(let arg of args) sum+=arg;
//   return sum;
// }
// alert(sum(1,4))





function minus(x){
function minus1(y){
  return y-x
}
return minus1;
}
let minus2=minus(1)
alert(minus2(2))


