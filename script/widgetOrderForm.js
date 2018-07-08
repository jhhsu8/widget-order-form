//create a function that calculates quantity discount
function quantityDiscount(quantity, price){
    var discount;
    if (quantity > 0 && quantity < 10) {
        //1-9 ordered - 0%
        discount = 0;
    }
    else if (quantity > 9 && quantity < 20) {
        //10-19 ordered - 10%
        discount = 0.1 * quantity * price;
    }
    else if (quantity > 19 && quantity < 30) {
        //20-29 ordered - 20%
        discount = 0.2 * quantity * price;
    }
    else if (quantity > 29 && quantity < 40) {
        //30-39 ordered - 30%
        discount = 0.3 * quantity * price;
    }
    else {
        //greater than 39 ordered - 40%
        discount = 0.4 * quantity * price;
    }
    return discount;
}

//create a function that calculates order total
function calcOrderTotal() {
    if (validateFirstName() && validateLastName() && validatePhone() && validateQuantity()) {
        //all inputs are valid
        const TAXRATE = 0.085;
        var unitPrice = 4.95;
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var phoneNumber = document.getElementById("phonenumber").value;
        var widgetQuantity = document.getElementById("quantity").value;
        
        var subTotal = unitPrice * widgetQuantity;
        var discount = quantityDiscount(widgetQuantity, unitPrice);
        var discountedPrice = subTotal - discount;
        var salesTax = discountedPrice * TAXRATE;
        var orderTotal = discountedPrice + salesTax;
        
        //display user and order information
        document.getElementById("userinfo").innerHTML= "The user name is " + firstName + " " + lastName + " and phone number is " + phoneNumber;
        
        document.getElementById("widgetquantity").innerHTML= "Quantity: " + widgetQuantity;
        
        document.getElementById("subtotal").innerHTML = "Subtotal: $" + subTotal.toFixed(2);
        
        document.getElementById("discount").innerHTML = "Discount: $" + discount.toFixed(2);
        
        document.getElementById("salestax").innerHTML = "Sales tax: $" + salesTax.toFixed(2);
        
        document.getElementById("ordertotal").innerHTML = "Order total: $" + orderTotal.toFixed(2);
    } 
    else {
        //one or more inputs are invalid
        alert("One or more user inputs do not meet proper criteria");
    }
}

//create a function that validates first name input
function validateFirstName() {
    var firstName = document.getElementById("firstname").value;
    //search for and remove space in input
    var noSpace = firstName.replace(/\s/g,"");
    //2 to 15 alphabetic characters 
    var regexTest = /^[a-zA-Z]{2,15}$/.test(noSpace);
    
    if (regexTest) {
        //true - valid input
        document.getElementById("firstnameprompt").innerHTML = "";
        return true;
    }
    else {
        //false - invalid input
        document.getElementById("firstnameprompt").innerHTML = "First name must be from 2 to 15 alphabetic characters";
        return false;
    }
}

//create a function that validates last name input
function validateLastName() {
    var lastName = document.getElementById("lastname").value;
    //search for and remove space in input
    var noSpace = lastName.replace(/\s/g,"");
    //2 to 25 alphabetic characters 
    var regexTest = /^[a-zA-Z]{2,25}$/.test(noSpace);    
    
    if (regexTest) {
        //true - valid input
        document.getElementById("lastnameprompt").innerHTML = "";
        return true;
    }
    else {
        //false - invalid input
        document.getElementById("lastnameprompt").innerHTML = "Last name must be from 2 to 25 alphabetic characters";
        return false;
    }
}

//create a function that validates phone number input
function validatePhone() {
    var phoneNumber = document.getElementById("phonenumber").value;
    //(xxx) xxx-xxx, where x is a digit
    var regexTest =/^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber);
        
    if (regexTest) {
        //true - valid input
        document.getElementById("phoneprompt").innerHTML = "";
        return true;
    }
    else {
        //false - invalid input
        document.getElementById("phoneprompt").innerHTML = "Phone number must be in (xxx) xxx-xxxx format";
        return false;
    }
}

//create a function that validates order quantity input
function validateQuantity() {
    var widgeQuantity = document.getElementById("quantity").value;
    //one to two digits
    var regexTest = /^\d{1,2}$/.test(widgeQuantity);
    
    if (regexTest && widgeQuantity > 0 && widgeQuantity < 100) {
        //true - valid input 
        document.getElementById("quantityprompt").innerHTML = "";
        return true;
    }
    else {
        //false - input is not from 1 to 99
        document.getElementById("quantityprompt").innerHTML = "Order quantity must be from 1 to 99";
        return false;
    }
}

//window.onload event function
window.onload = function() {
    //when submit onclick event occurs, calcOrderTotal() is called 
    document.getElementById("submit").onclick = function(evt){
        calcOrderTotal();
    }
}