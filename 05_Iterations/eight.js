const myNums = [1,2,3]

let myTotal = myNums.reduce((acc,currVal) => (acc+currVal),0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    
    {
        itemName: "py course",
        price: 4999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
]

const price2pay = shoppingCart.reduce((acc,item)=> acc + item.price, 0)
console.log(price2pay)