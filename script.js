function threeSum(arr, target) {
// write your code here
	let ans;
	let check;
  for (let i = 0; i < arr.length; i++) {
	  let sum;
  	for (let j = 0; j < arr.length; j++) {
  		sum += arr[j];
		if(sum>ans && sum<check){
			ans = sum;
		}
  	}
  }
	return ans;
}

module.exports = threeSum;
