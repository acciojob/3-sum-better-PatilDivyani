function threeSum(arr, target) {
// write your code here
	 arr.sort((a, b) => a - b); // sort the input array in ascending order
    let closestSum = Infinity; // initialize the closest sum to a large number
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return closestSum;
}

module.exports = threeSum;
