/*
You are assigned the task of developing a program to count the number of words in a given string. Count and return the number of words present in the string.

Note
An extra space has been inserted after the last word of the string*/

function countWords(str) {
    str = str.trim();
    let count = str.split(' ');
    count = count.length
    return count;
  }
let str="I am a Ninja Coder ";
console.log(countWords(str));