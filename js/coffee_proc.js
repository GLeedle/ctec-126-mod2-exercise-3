function coffeeProcessor(){
    let shipping = .76
    let fixedCost = 1.25
    let numOrdered = prompt(`
---------Welcome to Egorte' Coffee Shop - Try our new Blend---------
|                                                                              
|   1lb of Elgorte' "Spark in the Dark" Blend - $16.50 + shipping    
|   ( Shipping $0.76 per lb / free shipping for orders 10lbs and over )
|                                                                   
----------------------------------------------------------------------------

How many lbs of coffee would you like to order?`)

    numOrdered = parseInt(numOrdered)
    shipping = numOrdered <= 9 ? numOrdered * shipping : 0
    let coffee = numOrdered * 16.5
    console.log(`You ordered ${numOrdered}lbs of the "Spark in the Dark" Blend`)
    console.log(`Shipping for your order comes to $${shipping}`)
    console.log(`Your order total comes to: $${coffee + shipping}`) 
}

coffeeProcessor()