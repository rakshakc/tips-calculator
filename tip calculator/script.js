
const calculateButton = document.querySelector('#calculateButton');
const billAmountInput = document.querySelector('#billAmount');
const tipPercentageSelect = document.querySelector('#tipPercentage');
const tipAmountDisplay = document.querySelector('#tipAmount');

calculateButton.addEventListener('click', function() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageSelect.value);
    const tipAmount = billAmount * tipPercentage;

    tipAmountDisplay.textContent = `Tip Amount: rs${tipAmount.toFixed(2)}`; //This line updates the content of the 'tipAmountDisplay' element with the calculated tip amount.
                                                                            //It uses the textContent property to set the text content of the element.
                                                                            //The toFixed(2) method is used to format the tip amount to two decimal places, ensuring that it is displayed as a currency value with two decimal places.
                                                                            //he backtick (`) is used to create a template literal, allowing variables to be interpolated within the string.
                                                                            //The string "Tip Amount: rs" is concatenated with the formatted tip amount using ${}.
});