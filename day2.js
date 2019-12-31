'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getLetter(s) {
    let letter;
    // Write your code here
    var mySet1 = new Set(['a','e','i','o','u']);
    var mySet2 = new Set(['b','c','d','f','g']);
    var mySet3 = new Set(['h','j','k','l','m']);
    switch(true){
        case mySet1.has(s[0]):
            letter='A';
            break;
        case mySet2.has(s[0]):
            letter='B';
            break;
        case mySet3.has(s[0]):
            letter='C';
            break;
        default:
            letter='D';
            break;
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
