function Factorial(num){
    let mun;
    if (num === 0) return 1;
    return num*Factorial(num-1);
}
function Combination(k,n){
    if(k>n) return "failed";
    return (Factorial(n)/(Factorial(k)*(Factorial(n-k))));
    
}
console.log(Combination(2,5));
console.log(Combination(5,5));
console.log(Combination(6,5));