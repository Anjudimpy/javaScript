//Constructor Function: It is another way create object in javascript

function Movie(title, year){
    this.title = title;
    this.year = year;

    this.getDetails = function (){
        console.log(`
            Title: ${this.title}
            year: ${this.year}
            `);
    }
}

//new keyword
const movie1 = new Movie('Ravan', 2024);
console.log(movie1);
const movie2 =new Movie('Avatar', 2013);
console.log(movie2);
movie2.getDetails();
console.log(movie1.__proto__);
console.log(movie1.__proto__.__proto__);
console.log(movie1.__proto__.__proto__.__proto__);