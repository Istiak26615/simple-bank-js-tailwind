
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText= inputField.value ;
    const amountValue= parseFloat(inputAmountText);
     // clear 
     inputField.value=''; 
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    // work as a debugger 
    // debugger;
    
    const totalElement= document.getElementById(totalFieldId);
    const totalText= totalElement.innerText;
    const previousTotal=parseFloat(totalText);
    totalElement.innerText = previousTotal+ amount;
}
function getCurrentBalance(){
    const balanceTotal= document.getElementById('balance-total');
    const previousBalanceText= balanceTotal.innerText;
    const previousBalance= parseFloat(previousBalanceText);
    return previousBalance;

}
function updateBalance(amount, isAdd){
    const balanceTotal= document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if(isAdd==true){
        balanceTotal.innerText= previousBalance+ amount;
    }
    else{
        balanceTotal.innerText= previousBalance- amount;
    }
    }

    // function updateBalance(newWithdrawAmount){
        
    // const balanceTotal= document.getElementById('balance-total');
    // const previousBalanceText= balanceTotal.innerText;
    // const previousBalance= parseFloat(previousBalanceText);
    // const totalBalance =previousBalance- newWithdrawAmount ;
    // balanceTotal.innerText= totalBalance;
    // }

// deposite
document.getElementById('deposite-button').addEventListener('click', function(){
    // const depositeInput = document.getElementById('deposite-input');
    // const newDepositeAmountText= depositeInput.value ;
    // const newDepositeAmount= parseFloat(newDepositeAmountText);
    

    // const depositeTotal= document.getElementById('deposite-Total');
    // const previousDepositeText= depositeTotal.innerText;
    // const previousDepositeAmount=parseFloat(previousDepositeText);
    // depositeTotal.innerText = previousDepositeAmount+ newDepositeAmount;
    const newDepositeAmount= getInputValue('deposite-input');
    if(newDepositeAmount>0){
        updateTotalField('deposite-Total',newDepositeAmount);
        updateBalance(newDepositeAmount, true);
    }

    // update balance 
    // const balanceTotal= document.getElementById('balance-total');
    // const previousBalanceText= balanceTotal.innerText;
    // const previousBalance= parseFloat(previousBalanceText);
    // balanceTotal.innerText= previousBalance+ newDepositeAmount;
    

    
})

// withdraw
 
 document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdrawAmountText= withdrawInput.value ;
    // const newWithdrawAmount= parseFloat(newWithdrawAmountText);
    // const withdrawTotal= document.getElementById('withdraw-Total');
    // const previousWithdrawText= withdrawTotal.innerText;
    // const previousWithdrawAmount=parseFloat(previousWithdrawText);
    // const newWithdrawTotal= previousWithdrawAmount+newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    const newWithdrawAmount=getInputValue('withdraw-input');
    const currentBalance= getCurrentBalance();
    if(newWithdrawAmount>0 && newWithdrawAmount<currentBalance){
        updateTotalField('withdraw-Total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount>currentBalance){
        alert('you cannot withdraw more than you have');
    }

    


    //update balance

    // const balanceTotal= document.getElementById('balance-total');
    // const previousBalanceText= balanceTotal.innerText;
    // const previousBalance= parseFloat(previousBalanceText);
    // const totalBalance =previousBalance- newWithdrawTotal ;
    // balanceTotal.innerText= totalBalance;
     
    // clear 
    // withdrawInput.value='';
    
})