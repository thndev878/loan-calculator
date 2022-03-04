function calculate(){

  loanAmount = document.getElementById('la').value;
  loanTermInYears = document.getElementById('lt').value;
  interestRate = document.getElementById('ir').value;


  console.log(`loan amount: ${loanAmount}`);
  console.log(`loan term in years: ${loanTermInYears}`);
  console.log(`interest rate: ${interestRate}`);

  result = 632.41;

  console.log(`[MONTHLY PAYMENT]: $ ${result}`);

  unhide();
  document.getElementById('results').innerHTML = "Monthly Payments: $ " + result;
}

function unhide(){
  document.getElementById('results').style.visibility = 'visible';
}

function hide(){
  document.getElementById('results').style.visibility = 'hidden';
}


