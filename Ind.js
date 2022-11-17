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





// function minus(x){
// function minus1(y){
//   return y-x
// }
// return minus1;
// }
// let minus2=minus(1)
// alert(minus2(2))


// var a=5;
// function M(){
//   let a=6;
//   console.log(a)
// }
// M()







// Taski 1
// function Calculator(x){
//   function cham(y){
// return x+y;
//   }
//   function minus(z){
//     return x-z;
//   }
//   return cham;

// }
// let cham1=Calculator(1)
// alert(cham1(1))
// let minus1=Calculator(2)
// alert(minus1(1))

// 
// function Basic(a,b,c){
//   if(b=="/"){
//     return a/c;
//   }
//   if(b=="+"){
//     return a+c;
//   }
//   if(b=="-"){
//     return a-c;
//   }
//   if(b=="*"){
//     return a/c;
//   }
// }
// alert(Basic(1,"-",1))



// function Basic(a,b,c){
//   console.log(b=="/"?a/c:"")
//   console.log(b=="+"?a+c:"")
//   console.log(b=="-"?a-c:"")
//   console.log(b=="*"?a*c:"")
// }
// Basic(10,"/",5)



// function sumAll(...args) { 
//   let sum = 0;
//   for (let a of args) sum ++;
//   return sum;
// }
// alert(sumAll())



// if(a.includes("4")){
//   a.replace("4","A");
// }
// if(a.includes("5")){
//   a.replace("5","S");
// }
// if(a.includes("0")){
//   a.replace("0","O");
// }
// if(a.includes("1")){
//   a.replace("1","I");
// }


// KeyBoard Mistakes
// function Key(a){
// console.log(a.includes("4")?a.replace("4","A"):"")
// console.log(a.includes("5")?a.replace("5","S"):"")
// console.log(a.includes("0")?a.replace("0","O"):"")
// console.log(a.includes("1")?a.replace("1","I"):"")
// }
// Key("FR1045")




// function Get(a){
//  let b= a.includes("1")? a.replace("1","I"):""
//  let c= b.replace("0","O")
//  let d= c.replace("5","S")
//  let f= d.replace("4","F")
// return f
// }
//  console.log(Get("10"))


// function Get(a)
// {
//   return f.replace("1","A").replace("2","S")
// }




// function Get(a,b){
//   // if(a+b>100){
//   //   return false
//   // }
//   // return true
//   return a+b>100?"true":"false"
// }
// console.log(Get(100,2))



// function Get(a){
//   return a*a*a
// }
// console.log(Get(2))




// function Trangel(a,b){
//   return (a*b)/2
// }
// console.log(Trangel(10,10))




// function Trangel(a,b){
//   return a===b?true:false;
// }
// console.log(Trangel(11,10))



// function Trangel(a,b){
//   let c=b.split(" ")
//   let d=c.join(a)
//   return d
// }
// console.log(Trangel("v","Farid Dodarov"))


// function Name(a){
// a=a.split(" ")
// return Math.max(...a)+" Myada "+Math.min(...a)

// }
// console.log(Name("1 1000 65"))

// function Name(a){
//   return a.toUpperCase().split("").reverse().join("")
// }
// alert(Name("Farid"))

