function coffeeProcessor(){
    let shipping = .76
    const fixedCost = 1.25
    let numOrdered = prompt(`
---------Welcome to Egorte' Coffee Shop - Try our new Blend---------
|                                                                              
|   1-lb of Elgorte' "Spark in the Dark" Blend - $16.50 + shipping    
|   ( Shipping $0.76 per lb / free shipping for orders 10lbs and over )
|    each order has a fixed convenience fee of $1.25
----------------------------------------------------------------------------

How many lbs of coffee would you like to order?`)

    numOrdered = parseInt(numOrdered)
    shipping = numOrdered <= 9 ? numOrdered * shipping : 0
    let coffee = numOrdered * 16.5
    console.log(`    You ordered ${numOrdered}-lbs of the "Spark in the Dark" Blend        
    
            Elgorte' coffee shop 
    ----------------------------------
    Total Sales:
    + $${coffee} - Spark in the Dark Blend
    + $${shipping} - shipping
    + $${fixedCost} - Order fee
    ----------------------------------
    TOTAL: $${coffee + shipping + fixedCost}`) 
}

coffeeProcessor()