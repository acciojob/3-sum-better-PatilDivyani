function threeSum(nums, target) {
// write your code here
	 nums.sort((a, b) => a - b); // sort the input array in ascending order
    let closestSum = Infinity; // initialize the closest sum to a large number
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
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
