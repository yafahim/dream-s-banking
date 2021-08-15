//handle deposite button event

document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited

    const depositInput = document.getElementById('deposit-input');
    const NewdepositeAmountText = depositInput.value;
    const NewdepositeAmount = parseFloat(NewdepositeAmountText);
    // console.log(NewdepositeAmount);

    //update deposite total

    const depositeTotal = document.getElementById('deposit-total');

    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + NewdepositeAmount;

    depositeTotal.innerText = newDepositeTotal;

    //update account balance
    const balanchTotal = document.getElementById('balance-total');

    const balanchTotalText = balanchTotal.innerText;
    const previousBalanceTotal = parseFloat(balanchTotalText);
    const newBalanceTotal = previousBalanceTotal + NewdepositeAmount;
    balanchTotal.innerText = newBalanceTotal;



    //clear the deposite input field
    depositInput.value = '';


});


//handle withdraw event button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawinput = document.getElementById('withdraw-input');
    const withdrawAAmountText = withdrawinput.value;
    const newWithdrawAmount = parseFloat(withdrawAAmountText);
    console.log(newWithdrawAmount);


    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear the withdraw input field
    withdrawinput.value = '';
})