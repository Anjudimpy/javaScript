/**You are tasked with creating a program to calculate the price of a pizza based on its size, quantity and selected toppings. */
function pizzaPricing(size) {

    const baseprice = {
        small: 8,
        medium: 10,
        large: 12,
        extraLarge: 15
    }
  
    return function curried(toppings)
    {
        return function(quantity)
        {
           let totalPrice = (baseprice[size] + toppings.length*1.5)*quantity; 
            
           return totalPrice.toFixed(2);
        }

    }
    
}
const size = "large";
const toppings = ['bacon', 'cheese']
const quantity = 1

console.log(pizzaPricing(size)(toppings)(quantity));
