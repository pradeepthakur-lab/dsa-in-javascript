// Problem 1: Checking Square in another array 
// array1= [1,2,3,4] array2=[1,9,4,16]



// solution 1
function checkIsSquare(array1, array2){
    for(let i =0; i < array1.length; i++){
        let isSquare= false;
        for(let j=0; j < array2.length; j++){
            if(array1[i] * array1[i] === array2[j]){
                isSquare=true;
            }
            if(j === array2.length -1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}

const result =checkIsSquare([1,2,3,4],[1,9,4,16]);
console.log('result', result);
// Time Complexity: o(n^2) Quadratic time

// Problem 2: Checking Square in another array 
// array1= [1,2,3,4] array2=[1,9,4,16]  == case 1
// array1= [1,2,3,2] array2=[1,4,4,16]  == case 2

// solutions 2
function isCheckIsSquare(array1, array2){
    let squareMap=new Map();
    for (const num of array1) {
        const square = num * num;
        squareMap.set(square, true);
    } 
    for (const num of array2) {
        if(!squareMap.get(num)){
            return false
        }
    }    
    return true
}

const data =isCheckIsSquare([1,2,3,4],[1,9,4,16]);
console.log('data', data);
// Time Complexity: o(n) Linear time


// Problem 3: Checking Square in another array 
// array1= [1,2,3,4] array2=[1,9,4,16]  == case 1
// array1= [1,2,3,2] array2=[1,4,4,16]  == case 2

// conditions 
// create map1 ={1:1,2:2,3:1,4:1}
// create map2 ={1:1,9:1,4:2,16:1}

// solutions 3
function isCheckIsSquareArray(array1, array2){
    let map1={};
    let map2={};

    for(const item of array1){
        map1[item] =(map1[item] || 0)+1
    }
    for(const item1 of array2){
        map2[item1] =(map2[item1] || 0)+1
    }
    for(const key in map1){
        if(!map2[key * key]){           // object key compare in terms of Square
            return false;
        }
        if(map1[key] !== map2[key * key]){  // value compare
            return false;
        }
    }
    return true
}

const res =isCheckIsSquareArray([1,2,3,4],[1,9,4,16]);
console.log('res', res);
// Time Complexity: o(n) Linear time