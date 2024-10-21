/**You have been assigned the task of developing a software system for an online examination that generates question papers for various subjects. The system should be 
 able to shuffle the questions within each subject every time a question paper is generated, ensuring that the order of the questions is randomized for each student. */

function main(){
    const question = [
        "Question1",
        "Question2",
        "Question3",
        "Question4",
        "Question5"
    ]

 function shuffle(arr){
        const result = [...arr];

        for(let i = arr.length-1; i>0; i--){
          const randomNumber = Math.floor(Math.random()*i);

          const temp = result[i];
          result[i] = result[randomNumber];
          result[randomNumber] = temp;
        }
        return result
    }
    return shuffle(question);

}

let shff = main();
console.log(shff);