let amountOfFunds = 500;

function withdraw(amountOfFunds, withdrawAmount, amountLeftOverAfterWithdraw) {
    withdrawAmount = parseInt(
        prompt("Enter The Amount You'd Like To Withdraw: ")
    );

    if (amountOfFunds >= withdrawAmount) {
        amountLeftOverAfterWithdraw = amountOfFunds - withdrawAmount;
        console.log(
            `Withdraw Complete. Current Balance: ${amountLeftOverAfterWithdraw}`
        );
    } else if (amountOfFunds < withdrawAmount) {
        console.log("Insufficient Funds On Your Card. ");
    }
}

withdraw(amountOfFunds);