function maxSum(arr, n, k) {
	let max = 0
	let sum = 0
	for (let i = 0; i < k; i++) {
		sum += arr[i]
		max = sum
	}

	for (let i = k; i < n; i++) {
		console.log(sum)
		sum += arr[i] - arr[i - k]
		if (sum > max) {
			max = sum
		}
	}
	return max
}

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
let k = 4
let n = arr.length

console.log(maxSum(arr, n, k))
