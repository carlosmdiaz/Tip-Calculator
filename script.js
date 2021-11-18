//Getting the Image
let darkMode = false;
let themeBtn = document.getElementById("mode");
let bodyBackground = document.body;
let percentage = 0;

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
    console.log(billInput.value);
});

let numberPeople = document.getElementById('number-people');
numberPeople.addEventListener("change", function(){
    console.log(numberPeople.value);
});

let costumeTip = document.getElementById('costume');

let buttonsTip = document.querySelectorAll('button');

buttonsTip.forEach((btn)=> {
    btn.addEventListener('click', function(){
        console.log(parseFloat(btn.innerText)/100);
    })
})