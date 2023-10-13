function fibonacci(n) {
    const fib = [0,1]
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(2)) // Output [0,1]
console.log(fibonacci(3)) // Output [0,1,1]
console.log(fibonacci(5)) // Output [0,1,1,2,3]
console.log(fibonacci(7)) // Output [0,1,1,2,3,5,8]

/* 
lets say we have n = 5
1. fib = [0,1]
2. fib[2] = fib[2-1 = 1] + fib[2-2 = 0] = fib[1] + fib[0] = 1 + 0 = [0,1,1]
3. fib[3] = fib[3-1 = 2] + fib[3-2 = 1] = fib[2] + fib[1] = 1 + 1 = [0,1,1,2]
4. fib[4] = fib[4-1 = 3] + fib[4-2= 2] = fib[3] + fib[2] = 2 + 1 = [0,1,1,2,3]

Here we are calculating the index from the previous fib so we can add it to the new iteration.
So the first iteration will not be done because the condition is false so fib is [0,1] the second iteration will be run and
its calcuation the index for the additon so fib[1] + fib[0], the index for 1 is 1 and the index for 0 is 1 so 1 + 0 = 1 so the
new result is [0,1,1] and so on....
*/ 