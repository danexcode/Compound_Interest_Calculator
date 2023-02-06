const initialBalance = document.querySelector("#initial-investment");
const interestRate = document.querySelector("#interest-rate");
const timeYear = document.querySelector("#time-year");
const timeMonth = document.querySelector("#time-month");
const currency = document.querySelector("#currency");
const period = document.querySelector("#period");
const btn = document.querySelector(".btn-calculate");
const errorMessage = document.querySelector(".error");

btn.addEventListener("click", calculate);

function calculate(){
    //comprovating the inputs are filled

    if(((initialBalance.value == "") || (interestRate.value == "") || (timeYear == "" && timeMonth == "")) && (errorMessage.className == "error")){
        errorMessage.innerText = "Please comprovate the fields";
        return;
    }
    else {
        errorMessage.innerText = "";
    }
    
    
}

