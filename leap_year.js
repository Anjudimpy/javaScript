function leapYear(year) {
    let answer;
   //Write your code here
    if (year % 4 === 0) {
          if(year % 100 === 0) {
              if(year % 400 === 0 ){
                  answer = true;
              }
              else {
                  answer = false; 
                   }
             }
    else {
      answer = true;
    }
    }
    else {
       answer = false;
    }
return answer
}

console.log(leapYear(2004));
console.log(leapYear(2100));
