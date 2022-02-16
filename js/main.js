
function calculateExpense(cost, saving) {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);

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

    //saving

    const totalSaving = (incomeAmount * saving) / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSaving;

    //remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = incomeAmount - parseFloat(totalSaving);
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateExpense(1000);
})
document.getElementById('saving-btn').addEventListener('click', function () {
    calculateExpense(10);
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

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = incomeAmount - parseFloat(totalSaving);

    //clear input field
    savingInput.value = '';
}); */