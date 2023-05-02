// String Anagram
// 'hello' => 'llleo'

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function checkAnagram(string1, string2){
    if(string1.length != string2.length) return false;
    let count ={};
    for(let str of string1){        
        count[str]= (count[str] || 0) + 1
    }
    for(let item of string2){
        if(!count[item]) return false;
        count[item]-=1;
    }
    return true
}

const result =checkAnagram('hello', 'llheo');
console.log(result)
// Time Complexity: o(n) Linear Time