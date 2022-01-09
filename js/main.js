var elForm = document.querySelector('.money__form');
var elInput = document.querySelector('.money__input');
var elSelect = document.querySelector('.money__select');
var elResult = document.querySelector('.money__result');

var currencyUSD = 10818.05;
var currencyRUBL = 142.14;
var currencyEURO = 12240.62;

elForm.addEventListener('submit', function(evt){
evt.preventDefault();

var inputValue = elInput.value;
var selectValue = elSelect.value;
var calculationUSD = (inputValue * currencyUSD).toFixed(2);
var calculationRUBL = (inputValue * currencyRUBL).toFixed(2);
var calculationEURO = (inputValue * currencyEURO).toFixed(2);

if(selectValue == 'usd'){
    elResult.textContent = calculationUSD;
}else if(selectValue == 'rubl'){
elResult.textContent = calculationRUBL
}else if(selectValue == 'euro'){
    elResult.textContent = calculationEURO
}else{
    elResult.textContent = "Choose currency"
}

})
