class Fibonacci {
    constructor() {}
    logDigits() {
            let arr = [0, 1];
            for (let i = 2; i < 10; i++){
              arr.push(arr[i - 2] + arr[i - 1])
            }  
        console.log(arr.join(",")) 
    }    
} 
const fib = new Fibonacci();
fib.logDigits();

//function todaysDate(){
    //const date= new Date()
    //console.log(date.getDate()+ "/" + (date.getMonth() +1 ) + "/" + date.getFullYear())
//}
//todaysDate()

//function isPerfectSquare(num){
    //let squareRoot = Math.sqrt(num)
    //return Math.floor(squareRoot) === squareRoot
//}
//console.log(isPerfectSquare(9))


