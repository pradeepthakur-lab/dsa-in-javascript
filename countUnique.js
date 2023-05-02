// count unique numbers

// problem [1,1,1,2,2,3,4,4,5,6,6,7,8,8]
// output ==> 8

// conditions
// i=0, j=1
// array[i] !== array[j]
// 1. i++
// 2. array[i] = array[j]

// solution
function getUniqueCount(array){
   if(array.length > 0){
        let i =0;
        for(let j =1; j < array.length; j++){
            if(array[i] !== array[j]){
                i++;
                array[i] = array[j];
            }
        }
        return i + 1;
   } else {
        console.log("Array is empty");
   }
}

const result = getUniqueCount([1,1,1,2,2,3,4,4,5,6,6,7,8,8]);
console.log(result);
// Time Complexity: o(n) Linear Time