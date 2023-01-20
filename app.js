function calcularpago() {
  // Recolectar información del usuario
  var loanAmount = prompt("Ingrese el monto del préstamo:");
  var interestRate = prompt("Ingrese la tasa de interés:");
  var loanTerm = prompt("Ingrese el período de tiempo en años:");
  var monthlyPayments = [];

  // Calcular pagos mensuales
  var monthlyInterestRate = interestRate / 12 / 100;
  for (var i = 0; i < loanTerm * 12; i++) {
    var monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 / (1 + monthlyInterestRate), loanTerm * 12));
    loanAmount -= monthlyPayment;
    monthlyPayments.push(monthlyPayment);
  }

  // Mostrar pagos mensuales
  alert("Pagos mensuales: $" + monthlyPayments);
}
