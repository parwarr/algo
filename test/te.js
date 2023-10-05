function sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
        console.log(sum +  " " + i);
    }

    console.log("res");
    console.log(sum);
}

sum(10);