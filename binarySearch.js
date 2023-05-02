// Divide & Conquer Technique (Binary Search)
// Find the index of the given no in a sorted array (find index of 7)
// input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// output: index of 7 is 8 

// conditions
// min =0                   ==> index ==> 0  || element 1
// max = array.length - 1   ==> index ==> 14 || element 15  
// find midIndex = (min+max)/2 ===> (0 + 14)/2 ==> index ==> 7 || element 8
// if array[midIndex] < number(7)
// min=midIndex+1
// else if array[midIndex] > number(7)
// max= midIndex-1      ==> min=0, max=6 new array [1,2,3,4,5,6,7]
// else midIndex is right index midIndex

// solution using binary search
function findElementOfIndex(array, num){    
    let min =0;
    let max =array.length -1;

    while(min <= max){
        let midIndex = Math.floor((min + max) / 2);
        if(array[midIndex] < num){
            min=midIndex+1;
        } else if(array[midIndex] > num){
            max=midIndex-1;
        } else{
            return midIndex
        }
    }

    return -1;

}

const result= findElementOfIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7);
console.log(result);
// Time Complexity: o(n) binary Time or Logarithmic Time