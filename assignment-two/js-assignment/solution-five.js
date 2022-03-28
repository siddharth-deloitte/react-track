const arr = [3,6,9,15,18];

const reducer = (acc, curr) => {
    return acc + curr;
}

console.log(arr.reduce(reducer));