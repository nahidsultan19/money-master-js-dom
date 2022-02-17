function monthlyExpense() {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value)
    console.log(incomeAmount)
    const errorMessage = document.getElementById('error-message');
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }

    const balance = document.getElementById('balance');
    balance.innerText = incomeAmount;

    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothCost = document.getElementById('cloth-cost').value;

    // Total Expenses
    const totalAmount = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalAmount;

    // Total Balance
    const totalBalance = incomeAmount - totalAmount;
    balance.innerText = totalBalance;

    //saving
    const savingInput = parseFloat(document.getElementById('saving-input').value);
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parseFloat(incomeAmount * savingInput) / 100;


    // remaining balance

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount.innerText;




    // calculateExpense();

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
    monthlyExpense(1000);
})
document.getElementById('saving-btn').addEventListener('click', function () {
    monthlyExpense(20);
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