function checkIsArray(a) {
    return Array.isArray(a);
}

/**
 * 
 * @param {Array} a 
 */

function array_Clone(a) {
    return a.slice(0);
}


function first(a, n) {
    if (n > 0) return a.slice(0, n);
    if (n <= 0) return [];
    return a[0];
}
let myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.join('+'));
console.log(myColor.join(','));

function mostFrequent(arr) {
    let freq = "";
    let count = 0;
    const mp = arr.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1;
        if (a[v] > count) {
            count = a[v];
            freq = v;
        }
        return a;
    }, {});
    console.log(`${freq} (${count} times)`);
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

mostFrequent(arr1);

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));