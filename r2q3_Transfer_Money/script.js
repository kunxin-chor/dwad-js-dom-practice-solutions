// PLACE YOUR CODE HERE
let walletBalance = 0
let accountBalance = 0;
let errorMessage = "";
refreshWalletBalance();
refreshAccountBalance();

function refreshWalletBalance() {
    document.querySelector("#other-wallet").innerHTML = "$" + walletBalance;
}

function refreshAccountBalance() {
    document.querySelector("#account").innerHTML = "$" + accountBalance;
}

function refreshErrorMessage() {
    console.log("refreshErrorMessage()")
    let errorDiv = document.querySelector("#error");
    if (errorMessage != "") {    
        console.log("Displaying error message")  ;
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = errorMessage;
    } else {
        errorDiv.style.display = 'none';
        errorDiv.style.innerHTML = "";
    }
}

document.querySelector("#topup10").addEventListener('click', function(){
    walletBalance += 10;
    refreshWalletBalance();
})

document.querySelector("#transfer10ToAccount").addEventListener('click', function(){
    if (walletBalance > 0) {
        walletBalance -= 10;
        accountBalance += 10;
        refreshAccountBalance();
        refreshWalletBalance();
    }
})

document.querySelector("#transfer10ToWallet").addEventListener('click', function(){
    if (accountBalance > 0) {
        walletBalance += 10;
        accountBalance -= 10;
        refreshAccountBalance();
        refreshWalletBalance();
    }

})

document.querySelector('#spendBtn').addEventListener('click', function(){
    let spendAmount = Number(document.querySelector('#spend').value);

    // make sure spendAmount is 0, NaN, undefined or null
    if (spendAmount) {
        if (walletBalance >= spendAmount) {
            walletBalance -= spendAmount; // walletBalance = walletBalance - spendAmount
            refreshWalletBalance();
            errorMessage = "";
            refreshErrorMessage();
        } else {
            errorMessage = "You don't have enough balance";
            refreshErrorMessage();
        }
     } 

})
