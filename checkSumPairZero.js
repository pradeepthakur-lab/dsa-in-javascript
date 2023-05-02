// ## Que 1
// checking sum zero // meaning which array key pared add sum is zero
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] ==> input
function getSumPairZero(array){
    for(let num of array){
        for(let j=1;j<array.length;j++){
            if(num + array[j] === 0){
                return [num, array[j]]
            }
        }
    }
}
const result =getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log('result', result)
// Time Complexity: o(n^2) Quadratic Time

// 2 another solution
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] ==> input
function findSumPairZero(array){
    let left = 0;
    let right = array.length-1;
    while(left < right){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[left], array[right]];
        } else if(sum > 0){
            right--;
        } else{
            left++;
        }
    }
}
const newresult =findSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log('newresult', newresult)
// Time Complexity: o(n) Linear Time
