let arr = [3, 5, 6, 8, 11];

minMax(arr);

function minMax(arr, minResult, maxResult, fullSum) {
    minResult = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minResult) {
            minResult += arr[i];
        }
    }

    console.log(`The Minimum in this array is ${minResult}`);

    maxResult = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > maxResult) {
            maxResult = arr[j];
        }
    }
    console.log(`The Maximum in this array is ${maxResult}`);

    fullSum = maxResult + minResult;
    console.log(`The minimum & maximum's sum is ${fullSum}`);
}