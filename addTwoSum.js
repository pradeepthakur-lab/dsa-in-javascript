// ## Que 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function getTwoSum(array, target){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }
}
const getSumResult = getTwoSum([2,7,11,15], 9)
console.log('getSumResult', getSumResult)
// Time Complexity: o(n^2) Quadratic Time