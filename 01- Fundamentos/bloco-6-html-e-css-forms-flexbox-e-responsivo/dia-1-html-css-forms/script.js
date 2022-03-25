
let getButtonClear = document.getElementById('button-clear');
let getButtonSubmit = document.getElementById('button-submit');
let allInput = document.querySelectorAll('input');

function clearButton(){
allInput = '';
}

function stopClear(event){
event.preventDefault();
}

getButtonClear.addEventListener('click', clearButton);

getButtonSubmit.addEventListener('click', stopClear);