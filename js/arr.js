let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]


let array = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
array.splice(0, 3, "Let's", "dance");

alert( array ) // now ["Let's", "dance", "right", "now"]


let arr1 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr1.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements

let arr2 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr2 ); // 1,2,3,4,5

let arr3 = ["t", "e", "s", "t"];

alert( arr3.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr3.slice(-2) ); // s,t (copy from -2 till the end)