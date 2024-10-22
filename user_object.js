// Complete the createUserObjects function
// Do not alter the starter code
//You are given three arrays: one containing user IDs, one with user names, and another with the corresponding user images. Your task is to combine these three arrays
// into a single array of objects, where each object represents a user with their ID, name, and image.

const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];

function createUserObjects(ids, names, images) {
   return ids.map((id, index)=>{
       return {
           id:id,
           name: names[index],
           image: images[index]
       }
   });
}

console.log(createUserObjects(ids, names, images));