let numberText = document.getElementById('number');
let savePlaceholder = document.getElementById('save-placeholder');
let countNumber = 0;

function increment() {
    countNumber++;
    numberText.innerText = countNumber;
};

function save() {
    let countStr ='-' + countNumber + '-';
    savePlaceholder.innerText += countStr;
};

function clearSaved() {
    console.log('clear btn pressed');
    let clearSave = document.getElementById('save-placeholder');
    numberText.innerText = 0;
    savePlaceholder.innerText = '';
    
};