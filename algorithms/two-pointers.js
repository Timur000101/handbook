import { log } from './utils.js'

/**
 * Finds all pairs of numbers in the given array that sum up to the given target value.
 * Uses the two-pointer technique with a sorted array, with the left pointer starting at the
 * beginning of the array and the right pointer at the end.
 * The algorithm works by moving the pointers inwards until they meet, and at each step,
 * it checks if the sum of the values at the pointers is equal to the target.
 * If it is, it adds the pair to the result array and moves both pointers.
 * If the sum is less than the target, it moves the left pointer to the right.
 * If the sum is greater than the target, it moves the right pointer to the left.
 *
 * @param {number[]} arr - The array to find the pairs in.
 * @param {number} target - The target sum of the pairs.
 * @returns {number[][]} - An array of pairs of numbers that sum up to the given target.
 */
const getTuple = (arr, target) => {
	const result = []
	let left = 0
	let right = arr?.length - 1

	while (left < right) {
		const sumOf = arr[left] + arr[right]

		if (sumOf < target) {
			left++
		} else if (sumOf > target) {
			right--
		} else {
			result.push([arr[left], arr[right]])
			right--
			left++
		}
	}

	return result
}

/**
 * Given an array of numbers, sorts the array in descending order and returns
 * the square of each number in the sorted array.
 *
 * @param {number[]} array - The array of numbers to be squared and sorted.
 * @returns {number[]} - The array of numbers, sorted in descending order and
 *   squared.
 */
const getDegree = (array) => {
	let left = 0
	let right = array.length - 1
	const result = new Array(array.length)
	let index = array.length - 1

	while (left <= right) {
		const leftPow = array[left] * array[left]
		const rightPow = array[right] * array[right]

		if (leftPow > rightPow) {
			result[index] = leftPow
			left++
		} else {
			result[index] = rightPow
			right--
		}
		index--
	}

	return result
}

const getTupleFn = getTuple([-3, -1, 1, 2, 3], 1)
const getDegreeFn = getDegree([-10, -5, -2, 0, 4, 5, 6])

export { getTupleFn, getDegreeFn }
