
function removeVowels(obj) {

    return { value: obj.value.replace(/[aeiou]/gi, "")};
  }
  
  let strObj = { value: "Hello World" };

  let newObj = removeVowels(strObj);
  removeVowels(strObj);
  console.log(strObj.value);
  console.log(newObj.value);