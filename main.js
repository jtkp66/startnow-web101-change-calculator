// Write your JavaScript here
function clickEventHandler() {
   
    var amountDue = document.getElementById( "amount-due" ).value;
    var amountReceived = document.getElementById( "amount-received" ).value;
    var changeDue = parseFloat(amountReceived) - parseFloat(amountDue);

        var dollars = Math.floor(changeDue);
        changeDue = changeDue%1;
        var quarters = Math.floor(changeDue/0.25);
        changeDue = changeDue%0.25;
        var dimes = Math.floor(changeDue/0.10);
        changeDue = changeDue%0.10;
        var nickels = Math.floor(changeDue/0.05);
        changeDue = changeDue%0.05;
        var pennies = Math.floor(Math.round(changeDue/0.01));
        changeDue = changeDue%0.01;

    document.getElementById( "dollars-output" ).innerHTML=dollars;
    document.getElementById( "quarters-output" ).innerHTML=quarters;
    document.getElementById( "dimes-output" ).innerHTML=dimes;
    document.getElementById( "nickels-output" ).innerHTML=nickels;
    document.getElementById( "pennies-output" ).innerHTML=pennies;

    //document.getElementById("calculate-change").addEventListener("click", clickEventHandler)
}

//button.clickEventListener(clickEventHandler);
//.addEventListener("click", clickEventHandler);
document.getElementById("calculate-change").addEventListener("click", clickEventHandler)
