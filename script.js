//Getting the Image
let darkMode = false;
let themeBtn = document.getElementById("mode");
let bodyBackground = document.body;
let percent = 0;
let bill = 0;
let tipPercentage = 0;
let amountofPeople = 0;

function darkModeProperties () {
    themeBtn.src = './images/icon-sun.svg';
    bodyBackground.style.backgroundColor = 'hsl(183, 100%, 15%)';
    darkMode = true;
}

function lightModeProperties() {
    themeBtn.src = './images/icon-moon.svg';
    bodyBackground.style.backgroundColor = 'hsl(185, 41%, 84%)';
    darkMode = false;
}


//Image clickable

themeBtn.addEventListener("click", function(){
    if(darkMode == false){
        darkModeProperties();
    } else{
        lightModeProperties();
    }
})

let billInput = document.getElementById('bill-input');

billInput.addEventListener("change", function(){
    let bill = billInput.value;
    calcTipSplit(bill, percent, amountofPeople);
});

let numberPeople = document.getElementById('number-people');

numberPeople.addEventListener("change", function(){
    let amountofPeople = numberPeople.value;
    calcTipSplit(bill, percent, amountofPeople);
});

let costumeTip = document.getElementById('costume');

let buttonsTip = document.querySelectorAll('button');

buttonsTip.forEach((btn)=> {
    btn.addEventListener('click', function(){
        tipPercentage = parseFloat(btn.innerText);
        calcTipSplit(bill, percent, amountofPeople);
    })
})

const calcTipSplit = (bill, percentage, amountofPeople) => {

    bill = parseInt(billInput.value);
    percentage = tipPercentage/100;
    amountofPeople = parseFloat(numberPeople.value);
    

    //Handle the input logic before calculation

    if (bill && percentage && amountofPeople){
        let tipTotalAmountPerPerson = (bill * percentage) /amountofPeople;
        let totalAmountPerPerson = bill/amountofPeople + tipTotalAmountPerPerson;

        document.getElementById("tip-amount").innerText = `$${tipTotalAmountPerPerson.toFixed(2)}`;
        document.getElementById("total-amount").innerText = `$${totalAmountPerPerson.toFixed(2)};`
    }

    
}