const initialBalance = document.querySelector("#initial-investment");
const interestRate = document.querySelector("#interest-rate");
const timeYear = document.querySelector("#time-year");
const timeMonth = document.querySelector("#time-month");
const currency = document.querySelector("#currency");
const period = document.querySelector("#period");
const btn = document.querySelector(".btn-calculate");
const errorMessage = document.querySelector(".error");

const finalCapital = document.querySelector(".future-value");
const initBalance = document.querySelector(".initial-balance");
const interestGained = document.querySelector(".interest-gained");
const anualRate = document.querySelector(".anual-rate");

btn.addEventListener("click", calculate);
currency.addEventListener("change", changeCurrency);

function calculate(){
    //comprovating the inputs are filled

    if(((initialBalance.value == "") || (interestRate.value == "") || ((timeYear.value == "") && (timeMonth.value == ""))) && (errorMessage.className == "error")){
        errorMessage.innerText = "Please comprovate the fields";
        return;
    }
    else {
        errorMessage.innerText = "";
    }
    
    let balance = Number(initialBalance.value);
    let rate = Number(interestRate.value)/100;
    let years = Number(timeYear.value);
    let months = Number(timeMonth.value);
    let currencyText = "";
    if(currency.value == "dolars"){
        currencyText = "$ ";
    }
    else if(currency.value == "euros"){
        currencyText = "€ ";
    }

    if(period.value == "month"){
        rate = rate*12;
    }
    months = months/12; //months to years
    years = years + months;

    let result = balance*((1 + rate)**years); //Cf = Co(1+i)^t

    finalCapital.innerText = currencyText + result.toLocaleString("en");
    initBalance.innerText = currencyText + balance.toLocaleString("en");
    interestGained.innerText = currencyText + (result - balance).toLocaleString("en");
    anualRate.innerText = (rate*100).toFixed(2) + "%";
}

function changeCurrency(){
    if(currency.value == "dolars"){
        finalCapital.innerText = "$ 1,000.00";
        initBalance.innerText = "$ 1,000.00";
        interestGained.innerText = "$ 0.00";
        anualRate.innerText = "0%";
        initialBalance.setAttribute("placeholder","$ 1,000.00");
    }
    else if(currency.value == "euros"){
        finalCapital.innerText = "€ 1,000.00";
        initBalance.innerText = "€ 1,000.00";
        interestGained.innerText = "€ 0.00";
        anualRate.innerText = "0%";
        initialBalance.setAttribute("placeholder","€ 1,000.00");
    }
}