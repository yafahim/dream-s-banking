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


})