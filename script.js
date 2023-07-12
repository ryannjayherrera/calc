document.getElementById('loan-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieve user input
  var totalAmountInput = document.getElementById('total-amount');
  var totalAmount = parseFloat(totalAmountInput.value.replace(/,/g, '')); // Remove thousand separators

  var interestPercent = parseFloat(document.getElementById('interest-percent').value);
  var loanDuration = parseInt(document.getElementById('loan-duration').value);

  // Perform calculation
  var interestAmount = totalAmount * (interestPercent / 100);
  var totalLoanAmount = totalAmount + interestAmount;
  var monthlyPayment = totalLoanAmount / loanDuration;

  // Format numbers with thousand separators
  var formatter = new Intl.NumberFormat('en-US');

  // Create result message
  var resultMessage = 'Calculation Results:\n' +
    'Total Amount: ₱' + formatter.format(totalAmount.toFixed(2)) + '\n' +
    'Interest Earned: ₱' + formatter.format(interestAmount.toFixed(2)) + '\n' +
    'Total Credit Amount: ₱' + formatter.format(totalLoanAmount.toFixed(2)) + '\n' +
    'Repayment Amount: ₱' + formatter.format(monthlyPayment.toFixed(2));

  // Display result in alert
  alert(resultMessage);
});
