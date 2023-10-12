function fibonacci(n) {
    const fib = [0,1]
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
        console.log(`fib[${i}] = ${fib[i]}`);
    }
    return fib;
}

// console.log(fibonacci(2)) // Output [0,1]
// console.log(fibonacci(3)) // Output [0,1,1]
console.log(fibonacci(5)) // Output [0,1,1,2,3]
// console.log(fibonacci(7)) // Output [0,1,1,2,3,5,8]

/* 
lets say we have n = 5
1. [0,1] 2. [0,1,1] 3. [0,1,1,2] 4. [0,1,1,2,3]
*/ 