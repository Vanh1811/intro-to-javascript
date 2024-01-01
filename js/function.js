function add7(a){
    return a + 7;
}

multiply = (b, c) => b * c;

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function lastLetter(t){
    return t.charAt(t.length-1);
}

console.log(add7(2));
console.log(multiply(2,3));
console.log(capitalize("vanh"));
console.log(lastLetter("vanh"));

