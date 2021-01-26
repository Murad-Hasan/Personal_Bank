const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const dashboardArea = document.getElementById('dashboard-area');
    dashboardArea.style.display = 'block';
});
// depositBtn
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){

   const depositNumber = getInputNumber('depositAmount')
 
    updateSpanText('currentDeposit', depositNumber)
    updateSpanText('currentBalance', depositNumber)
    document.getElementById('depositAmount').value = '';

})
// withdrawBtn
 const withdrawBtn = document.getElementById('addWithdraw')
 withdrawBtn.addEventListener('click', function(){
   const withdrawNumber = getInputNumber('withdrawAmount')
    document.getElementById('withdrawAmount').value = '';
 })

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
    
}

function updateSpanText(id, depositNumber) {
    const current= document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}