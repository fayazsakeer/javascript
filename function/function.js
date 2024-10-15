// function ispalindrome(n){
//    let temp = n
//    let rev = 0
    
//     while(n>0){
//         let last = n%10;
//         rev=rev*10+last;
//         n=(n-last)/10
//     }
//     return temp==rev
// }
// let x = 1000
// for(i=0 ;i<x ; i++){
//   if(ispalindrome(i)) {
//     console.log(i);
//   }
// }

function fib(n){
    if (n<=1) return n;
    return fib(n-1)+fib(n-2);
}


let n = 45
console.log(fib(n));
