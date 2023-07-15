const fromEl = document.querySelector('.js-feedback-form');
const inputEl = document.querySelector('.js-feedback-form input');
const textArefEl = document.querySelector('.js-feedback-form textarea')

getValueFromLocalStorage()

textArefEl.addEventListener('input', getInputValue)

function getInputValue(event){
    const inputValue = event.target.value;
    console.log(inputValue);
    localStorage.setItem("value", inputValue);
}


function getValueFromLocalStorage(){
    const comment = localStorage.getItem("value");

    if(comment){
        textArefEl.textContent = comment;
    }
}
