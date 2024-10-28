const orders = [
    {
        orederNumber: 1,
        items: [
            {name: "Cappuccino", price: 3.5},
            {name: "Chocolate Croissant", price: 2.5}
        ]
    },
    {
        orederNumber: 2,
        items: [ 
            {name: "Latte", price:4.0},
            {name: "Blueberry Muffin", price: 2.75}
        ],
        discountCode: "COFFEELOVER"
    }
];

function totalOrderValue(orders, applyDiscount)
{
  const total  = orders.map(order =>{
    let orderTotal = order.items.reduce((sum,item) => sum + item.price, 0);

    if(order.discountCode){
        orderTotal = applyDiscount(order.discountCode, orderTotal);
    }
    return orderTotal;
  });

  
const GrandTotal = total.reduce((grandTotal,orderTotal) => grandTotal + orderTotal, 0);
return GrandTotal.toFixed(2);
}

const applyDiscount = (discountCode, total) =>
    {
        if(discountCode === "COFFEELOVER")
        {
            return total*0.9;
        }else if(discountCode === "TEALOVER")
            {
            return total*0.8;
        }else{
            return total;
        }

    };

    console.log(totalOrderValue(orders, applyDiscount));