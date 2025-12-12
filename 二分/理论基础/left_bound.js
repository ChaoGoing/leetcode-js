function leftBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Potential left bound found
            right = mid - 1; // Continue searching in the left half
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return result;
}

// Example usage:
const arr = [2,3,5,7];
const target = 1;
console.log(leftBound(arr, target)); // Output: 1