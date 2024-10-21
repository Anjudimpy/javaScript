function main() {
    const array = [2, 4, 6, 2, 7, 8];

    function customMap(array, fn) {
        const output = [];
      for(let num of array){
             output.push(fn(num));
         }
        return output;
    }
   function square(number)
      {
          return number*number;
      }
    return customMap(array,square);
  }
  
  console.log(main());