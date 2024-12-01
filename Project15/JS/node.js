let iPhonePrice = 119.95;
let iPhoneAmount = 30;
const taxAmount = 0.05;
let untaxedPrice = iPhonePrice * iPhoneAmount;
let taxedAmount = untaxedPrice * taxAmount;
let fullPrice = untaxedPrice + taxedAmount;
console.log("The price of", iPhoneAmount, "iPhones without tax is", untaxedPrice, "with a tax of", taxedAmount, "The final price being", fullPrice);

// Could've done it in one line, just wanted the taxed/untaxed amounts shown even if a bit excessive.