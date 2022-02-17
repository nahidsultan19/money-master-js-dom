function monthlyExpense() {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value)

    //pore kora
    if (incomeAmount > 0) {
        const balance = document.getElementById('balance');
        balance.innerText = incomeAmount;
    }
    // const balance = document.getElementById('balance');
    // balance.innerText = incomeAmount;



    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothCost = document.getElementById('cloth-cost').value;





    //pore kora
    // Total Expenses
    if (foodCost > 0 && rentCost > 0 && clothCost > 0) {
        const totalAmount = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
        const totalExpense = document.getElementById('total-expense');
        totalExpense.innerText = totalAmount;

        const totalBalance = incomeAmount - totalAmount;
        balance.innerText = totalBalance;
    }

    // pore kora input error handling
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





    // Total Balance
    /* const totalBalance = incomeAmount - totalAmount;
    balance.innerText = totalBalance; */

    //saving
    const savingInput = parseFloat(document.getElementById('saving-input').value);
    if (savingInput > 0) {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = parseFloat(incomeAmount * savingInput) / 100;

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount.innerText;

    }
    /* const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parseFloat(incomeAmount * savingInput) / 100; */



    // remaining balance
    /* const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount.innerText; */

    // income and expense input validation
    /* const errorMessage = document.getElementById('error-message');
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
        errorMessage.style.display = 'block';
        totalExpense.innerText = 'No data';
        balance.innerText = 'No data';
    } else if (isNaN(foodCost) || foodCost < 0) {
        errorMessage.style.display = 'block';
        totalExpense.innerText = 'No data';
        balance.innerText = 'No data';
    } else if (isNaN(rentCost) || rentCost < 0) {
        errorMessage.style.display = 'block';
        totalExpense.innerText = 'No data';
        balance.innerText = 'No data';
    } else if (isNaN(clothCost) || clothCost < 0) {
        errorMessage.style.display = 'block';
        totalExpense.innerText = 'No data';
        balance.innerText = 'No data';
    } else {
        errorMessage.style.display = 'none';
    }
 */
    // if expense greater than income validation
    const totalAmount = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const balanceLosing = document.getElementById('balance-losing');
    if (totalAmount > incomeAmount) {
        balanceLosing.style.display = 'block'
    } else {
        balanceLosing.style.display = 'none'
    }


    // saving valitaion
    /*  if (isNaN(savingInput)) {
         savingAmount.innerText = 'No dada'
         remainingBalance.innerText = 'No data'
     } else {
         savingAmount.innerText = parseFloat(incomeAmount * savingInput) / 100;
         remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount.innerText;
 
     } */

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
/* function calculateExpense(percent) {
    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothCost = document.getElementById('cloth-cost').value;

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value)

    const totalAmount = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalAmount;

    const balance = document.getElementById('balance');
    const totalBalance = incomeAmount - totalAmount;
    balance.innerText = totalBalance;

    //saving

    const savingInput = document.getElementById('saving-input');
    const savingAmount = parseFloat(savingInput.value);
    const save = incomeAmount / savingAmount;
    savingAmount.innerText = save;


}
 */

document.getElementById('calculate-btn').addEventListener('click', function () {
    monthlyExpense();
})
document.getElementById('saving-btn').addEventListener('click', function () {
    monthlyExpense();
})



/* const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {
    console.log('calculate btn clicked..')
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    // console.log(incomeAmount);

    //expenses
    const foodCost = document.getElementById('food-cost');
    const foodAmount = parseFloat(foodCost.value);

    const rentCost = document.getElementById('rent-cost');
    const rentAmount = parseFloat(rentCost.value);

    const clothCost = document.getElementById('cloth-cost');
    const clothAmount = parseFloat(clothCost.value);

    const expenseAmount = foodAmount + rentAmount + clothAmount;
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = expenseAmount;
    console.log(expenseAmount);

    const balance = document.getElementById('balance');
    const totalBalance = parseFloat(balance.innerText);
    const balanceAmount = incomeAmount - expenseAmount;
    balance.innerText = balanceAmount;

    //clear input field
    // incomeInput.value = '';
    // foodCost.value = '';
    // rentCost.value = '';

});

const savingBtn = document.getElementById('saving-btn');
savingBtn.addEventListener('click', function () {
    console.log('saving btn click..')
    const savingInput = document.getElementById('saving-input');
    const saving = parseFloat(savingInput.value);

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    const totalSaving = (incomeAmount * 10) / 100;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSaving;

    //remaining balance


    // const remainingBalance = document.getElementById('remaining-balance');
    // remainingBalance.innerText = balanceAmount - parseFloat(totalSaving);

    //clear input field
    savingInput.value = '';
}); */