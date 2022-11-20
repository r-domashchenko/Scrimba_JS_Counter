let numberText = document.getElementById('number');
let savePlaceholder = document.getElementById('save-placeholder');
let countNumber = 0;

function increment() {
    countNumber++;
    numberText.textContent = countNumber;
};

function save() {
    let countStr = countNumber + ' - ';
    savePlaceholder.textContent += countStr;
    numberText.textContent = 0;
    countNumber = 0;
};

function clearSaved() {
    console.log('clear btn pressed');
    let clearSave = document.getElementById('save-placeholder');
    numberText.textContent = 0;
    savePlaceholder.textContent = '';
};