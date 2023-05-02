// Count the largest sum of consecutive digits
// Problem: Count the largest sum of consecutive digits
// input: [1,2,3,4,3,5,4,6,7,8]  => total element: 10

function findLargestNumber(array, num){

    if(num > array){
        throw new Error('number is greater then array value')
    } else {
        let max =0;
        for (let i = 0; i < array.length - num + 1; i++) {
            let temp =0;
            for(let j=0; j < num; j++){
                temp += array[i + j]
            }
            if(temp > max){
                max=temp;
            }            
        }
        return max;
    }
}

const result =findLargestNumber([1,2,3,4,3,5,4,6,7,8], 4);
console.log(result);
// Time Complexity: o(n^2) Quadratic time