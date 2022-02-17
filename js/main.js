function monthlyExpense() {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value)

    if (incomeAmount > 0) {
        const balance = document.getElementById('balance');
        balance.innerText = incomeAmount;
    }

    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothCost = document.getElementById('cloth-cost').value;

    // Total Expenses
    if (foodCost > 0 && rentCost > 0 && clothCost > 0) {
        const totalAmount = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
        const totalExpense = document.getElementById('total-expense');
        totalExpense.innerText = totalAmount;

        const totalBalance = incomeAmount - totalAmount;
        balance.innerText = totalBalance;
    }

    //input error handling
    const errorMessage = document.getElementById('error-message');
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        errorMessage.style.display = 'block';
    } else if (isNaN(foodCost) || foodCost < 0) {
        errorMessage.style.display = 'block';
    } else if (isNaN(rentCost) || rentCost < 0) {
        errorMessage.style.display = 'block';
    } else if (isNaN(clothCost) || clothCost < 0) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }


    //saving
    const savingInput = parseFloat(document.getElementById('saving-input').value);
    if (savingInput > 0) {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = parseFloat(incomeAmount * savingInput) / 100;

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount.innerText;

    }


    // if expense greater than income validation
    const totalAmount = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const balanceLosing = document.getElementById('balance-losing');
    if (totalAmount > incomeAmount) {
        balanceLosing.style.display = 'block'
    } else {
        balanceLosing.style.display = 'none'
    }


    //insufficient balance valitation
    const savingAmount = document.getElementById('saving-amount').innerText;
    const totalBalance = incomeAmount - totalAmount;
    const insufficient = document.getElementById('insufficient');
    if (savingAmount > totalBalance) {
        insufficient.style.display = 'block'
    } else {
        insufficient.style.display = 'none'
    }




}

// event handlining
document.getElementById('calculate-btn').addEventListener('click', function () {
    monthlyExpense();
})
document.getElementById('saving-btn').addEventListener('click', function () {
    monthlyExpense();
})
