const countPrimeNumbers = () => {
    const n = 100
    let prime = [];
    for (let i = 2; i < n; i++) {
        if (i % 2 != 0)
            prime.push(i);
    }
    return prime;
}

const t0 = performance.now()
countPrimeNumbers()
const t1 = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)