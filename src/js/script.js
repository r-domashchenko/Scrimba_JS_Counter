// document.getElementById('number').innerText = 2;
let countNumber = 0;

function increment() {
    console.log('click');
    countNumber++;
    console.log(countNumber);
    document.getElementById('number').innerText = countNumber;
    return number;
};

function save() {
    console.log('saved number is:' + countNumber);
}